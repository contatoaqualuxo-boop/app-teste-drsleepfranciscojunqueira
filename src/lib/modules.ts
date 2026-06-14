'use client';

import React from 'react';
import { Tenant } from './tenant';
import { Identity } from './identity';
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Tags,
  ShieldCheck,
  CalendarHeart,
  FileText,
  Settings,
  Shield,
  Palette,
  Box,
  Layers,
  BarChart3,
  Bell,
  Smartphone,
  LucideIcon
} from 'lucide-react';

// Module Types
export type ModuleKey = 
  | 'dashboard'
  | 'clientes'
  | 'produtos'
  | 'categorias'
  | 'garantias'
  | 'timeline'
  | 'documentos'
  | 'configuracoes'
  | 'programa_fidelidade'
  | 'identidade_visual'
  | 'design_system'
  | 'white_label'
  | 'analytics'
  | 'notificacoes'
  | 'app_cliente';

export type ModuleContext = 'super_admin' | 'empresa' | 'cliente';

export interface Module {
  key: ModuleKey;
  name: string;
  description: string;
  category: 'core' | 'marketing' | 'operations' | 'analytics' | 'design' | 'support';
  context: ModuleContext[];
  isActiveByDefault: boolean;
  icon: LucideIcon;
  dependencies?: ModuleKey[];
  permissions?: string[];
  plan?: string;
}

// Default Modules Config
export const defaultModules: Module[] = [
  {
    key: 'dashboard',
    name: 'Dashboard',
    description: 'Painel principal com métricas e resumo',
    category: 'core',
    context: ['super_admin', 'empresa'],
    isActiveByDefault: true,
    icon: LayoutDashboard
  },
  {
    key: 'clientes',
    name: 'Clientes',
    description: 'Gerenciamento de clientes e dados',
    category: 'core',
    context: ['empresa'],
    isActiveByDefault: true,
    icon: Users
  },
  {
    key: 'produtos',
    name: 'Produtos',
    description: 'Gerenciamento de produtos e catálogo',
    category: 'operations',
    context: ['empresa'],
    isActiveByDefault: true,
    icon: ShoppingCart
  },
  {
    key: 'categorias',
    name: 'Categorias',
    description: 'Organização de produtos por categorias',
    category: 'operations',
    context: ['empresa'],
    isActiveByDefault: true,
    icon: Tags
  },
  {
    key: 'garantias',
    name: 'Garantias',
    description: 'Gestão de garantias de produtos',
    category: 'operations',
    context: ['empresa'],
    isActiveByDefault: true,
    icon: ShieldCheck
  },
  {
    key: 'timeline',
    name: 'Timeline',
    description: 'Histórico de atividades e eventos',
    category: 'operations',
    context: ['empresa'],
    isActiveByDefault: true,
    icon: CalendarHeart
  },
  {
    key: 'documentos',
    name: 'Documentos',
    description: 'Armazenamento e gestão de documentos',
    category: 'operations',
    context: ['empresa'],
    isActiveByDefault: true,
    icon: FileText
  },
  {
    key: 'configuracoes',
    name: 'Configurações',
    description: 'Configurações gerais da conta',
    category: 'core',
    context: ['super_admin', 'empresa', 'cliente'],
    isActiveByDefault: true,
    icon: Settings
  },
  {
    key: 'programa_fidelidade',
    name: 'Programa Fidelidade',
    description: 'Programa de pontos e benefícios',
    category: 'marketing',
    context: ['empresa'],
    isActiveByDefault: true,
    icon: Shield
  },
  {
    key: 'identidade_visual',
    name: 'Identidade Visual',
    description: 'Customização da marca e cores',
    category: 'design',
    context: ['empresa'],
    isActiveByDefault: true,
    icon: Palette
  },
  {
    key: 'design_system',
    name: 'Design System',
    description: 'Biblioteca de componentes e tokens',
    category: 'design',
    context: ['super_admin'],
    isActiveByDefault: true,
    icon: Layers
  },
  {
    key: 'white_label',
    name: 'White Label',
    description: 'Marcação branca e personalização total',
    category: 'design',
    context: ['super_admin', 'empresa'],
    isActiveByDefault: true,
    icon: Box
  },
  {
    key: 'analytics',
    name: 'Analytics',
    description: 'Relatórios e análises de dados',
    category: 'analytics',
    context: ['super_admin', 'empresa'],
    isActiveByDefault: false,
    icon: BarChart3
  },
  {
    key: 'notificacoes',
    name: 'Notificações',
    description: 'Envio de e-mails e SMS',
    category: 'support',
    context: ['super_admin', 'empresa'],
    isActiveByDefault: false,
    icon: Bell
  },
  {
    key: 'app_cliente',
    name: 'App Cliente',
    description: 'Aplicativo mobile para clientes',
    category: 'core',
    context: ['cliente'],
    isActiveByDefault: true,
    icon: Smartphone
  }
];

// Helper function to get modules
export function getModules(context?: ModuleContext, isActiveFn?: (module: Module) => boolean): Module[] {
  let modules = [...defaultModules];
  
  if (context) {
    modules = modules.filter(mod => mod.context.includes(context));
  }
  
  if (isActiveFn) {
    modules = modules.filter(isActiveFn);
  }
  
  return modules;
}

interface ModuleCache {
  [key: string]: ModuleKey[];
}

let _modulesCache: ModuleCache = {};

// Module Engine Class
export class ModuleEngine {
  private _currentActiveModules: ModuleKey[];

  constructor(initialTenant?: Tenant) {
    this._currentActiveModules = this.resolveModulesFromTenant(initialTenant);
  }

  // Helpers
  getDefaultActiveModules(): ModuleKey[] {
    return defaultModules.filter(mod => mod.isActiveByDefault).map(mod => mod.key);
  }

  resolveModules(): ModuleKey[] {
    return [...this._currentActiveModules];
  }

  resolveModulesFromTenant(tenant?: Tenant): ModuleKey[] {
    const cacheKey = `tenant:${tenant?.id || 'default'}`;

    if (_modulesCache[cacheKey]) {
      return [..._modulesCache[cacheKey]];
    }

    const activeModules: ModuleKey[] = this.getDefaultActiveModules();
    _modulesCache[cacheKey] = activeModules;
    return activeModules;
  }

  resolveModulesFromIdentity(identity?: Identity): ModuleKey[] {
    if (!identity) {
      return this.getDefaultActiveModules();
    }

    const cacheKey = `identity:${identity.tenant?.id || 'default'}`;

    if (_modulesCache[cacheKey]) {
      return [..._modulesCache[cacheKey]];
    }

    const activeModules: ModuleKey[] = this.resolveModulesFromTenant(identity.tenant || undefined);
    _modulesCache[cacheKey] = activeModules;
    return activeModules;
  }

  getModules(context?: ModuleContext): Module[] {
    let modules = [...defaultModules];
    
    if (context) {
      modules = modules.filter(mod => mod.context.includes(context));
    }
    
    modules = modules.filter(mod => this._currentActiveModules.includes(mod.key) || mod.isActiveByDefault);
    
    return modules;
  }

  isModuleActive(key: ModuleKey): boolean {
    const module = defaultModules.find(m => m.key === key);
    if (!module) return false;
    return this._currentActiveModules.includes(key) || module.isActiveByDefault;
  }

  createModulesSnapshot(): ModuleKey[] {
    return [...this._currentActiveModules];
  }

  clearModulesCache(): void {
    _modulesCache = {};
  }

  // Getters and Setters
  get currentActiveModules(): ModuleKey[] {
    return [...this._currentActiveModules];
  }

  set currentActiveModules(modules: ModuleKey[]) {
    this._currentActiveModules = [...modules];
  }
}

// Hook-like factory
export function createModuleEngine(initialTenant?: Tenant): ModuleEngine {
  return new ModuleEngine(initialTenant);
}

// Helper function to check if a module is active (for backward compatibility)
export function isModuleActive(key: ModuleKey, activeModules?: ModuleKey[]): boolean {
  const module = defaultModules.find(m => m.key === key);
  if (!module) return false;
  if (!activeModules) return module.isActiveByDefault;
  return activeModules.includes(key) || module.isActiveByDefault;
}
