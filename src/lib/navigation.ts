'use client';

import React from 'react';
import { Tenant } from './tenant';
import { Identity } from './identity';
import {
  Home,
  Users,
  ShoppingCart,
  ShieldCheck,
  CalendarHeart,
  Settings,
  LayoutDashboard,
  Store,
  FileText,
  Tags,
  Palette,
  Globe,
  Bell,
  LucideIcon
} from 'lucide-react';

// Navigation Types
export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  group: 'principal' | 'outros';
  order: number;
  isActive?: boolean;
  permissions?: string[];
  isVisible?: boolean;
}

export interface NavigationContext {
  superAdmin: NavItem[];
  empresa: NavItem[];
  cliente: NavItem[];
}

interface NavigationCache {
  [key: string]: NavigationContext;
}

// Default Navigation Config
export const defaultNavigation: NavigationContext = {
  superAdmin: [
    {
      id: 'sa-dashboard',
      label: 'Dashboard',
      href: '/admin/dashboard',
      icon: LayoutDashboard,
      group: 'principal',
      order: 1
    },
    {
      id: 'sa-empresas',
      label: 'Empresas',
      href: '/admin/empresas',
      icon: Globe,
      group: 'principal',
      order: 2
    },
    {
      id: 'sa-lojas',
      label: 'Lojas',
      href: '/admin/lojas',
      icon: Store,
      group: 'principal',
      order: 3
    },
    {
      id: 'sa-usuarios',
      label: 'Usuários',
      href: '/admin/usuarios',
      icon: Users,
      group: 'principal',
      order: 4
    },
    {
      id: 'sa-permissoes',
      label: 'Permissões',
      href: '/admin/permissoes',
      icon: ShieldCheck,
      group: 'outros',
      order: 1
    },
    {
      id: 'sa-configuracoes',
      label: 'Configurações',
      href: '/admin/configuracoes',
      icon: Settings,
      group: 'outros',
      order: 2
    }
  ],
  empresa: [
    {
      id: 'emp-dashboard',
      label: 'Dashboard',
      href: '/empresa/dashboard',
      icon: Home,
      group: 'principal',
      order: 1
    },
    {
      id: 'emp-clientes',
      label: 'Clientes',
      href: '/empresa/clientes',
      icon: Users,
      group: 'principal',
      order: 2
    },
    {
      id: 'emp-produtos',
      label: 'Produtos',
      href: '/empresa/produtos',
      icon: ShoppingCart,
      group: 'principal',
      order: 3
    },
    {
      id: 'emp-garantias',
      label: 'Garantias',
      href: '/empresa/garantias',
      icon: ShieldCheck,
      group: 'principal',
      order: 4
    },
    {
      id: 'emp-programa-fidelidade',
      label: 'Programa Fidelidade',
      href: '/empresa/programa-fidelidade',
      icon: ShieldCheck,
      group: 'outros',
      order: 1
    },
    {
      id: 'emp-categorias',
      label: 'Categorias',
      href: '/empresa/categorias',
      icon: Tags,
      group: 'outros',
      order: 2
    },
    {
      id: 'emp-timeline',
      label: 'Timeline',
      href: '/empresa/timeline',
      icon: CalendarHeart,
      group: 'outros',
      order: 3
    },
    {
      id: 'emp-documentos',
      label: 'Documentos',
      href: '/empresa/documentos',
      icon: FileText,
      group: 'outros',
      order: 4
    },
    {
      id: 'emp-identidade-visual',
      label: 'Identidade Visual',
      href: '/empresa/identidade-visual',
      icon: Palette,
      group: 'outros',
      order: 5
    },
    {
      id: 'emp-configuracoes',
      label: 'Configurações',
      href: '/empresa/configuracoes',
      icon: Settings,
      group: 'outros',
      order: 6
    }
  ],
  cliente: [
    {
      id: 'cli-home',
      label: 'Início',
      href: '/home',
      icon: Home,
      group: 'principal',
      order: 1
    },
    {
      id: 'cli-meu-colchao',
      label: 'Meu Colchão',
      href: '/meu-colchao',
      icon: ShieldCheck,
      group: 'principal',
      order: 2
    },
    {
      id: 'cli-clube-sono',
      label: 'Clube do Sono',
      href: '/clube-do-sono',
      icon: Users,
      group: 'principal',
      order: 3
    },
    {
      id: 'cli-indique-ganhe',
      label: 'Indique e Ganhe',
      href: '/indique-ganhe',
      icon: Users,
      group: 'principal',
      order: 4
    },
    {
      id: 'cli-cuidados',
      label: 'Cuidados',
      href: '/cuidados',
      icon: FileText,
      group: 'outros',
      order: 1
    },
    {
      id: 'cli-minha-conta',
      label: 'Minha Conta',
      href: '/minha-conta',
      icon: Settings,
      group: 'outros',
      order: 2
    }
  ]
};

let _navigationCache: NavigationCache = {};

// Navigation Engine Class
export class NavigationEngine {
  private _currentNavigation: NavigationContext;

  constructor(initialTenant?: Tenant) {
    this._currentNavigation = this.resolveNavigationFromTenant(initialTenant);
  }

  // Helpers
  getDefaultNavigation(): NavigationContext {
    return this._getDeepCopy(defaultNavigation);
  }

  resolveNavigation(): NavigationContext {
    return this._getDeepCopy(this._currentNavigation);
  }

  resolveNavigationFromTenant(tenant?: Tenant): NavigationContext {
    const cacheKey = `tenant:${tenant?.id || 'default'}`;

    if (_navigationCache[cacheKey]) {
      return this._getDeepCopy(_navigationCache[cacheKey]);
    }

    const navigation: NavigationContext = this.getDefaultNavigation();
    _navigationCache[cacheKey] = navigation;
    return navigation;
  }

  resolveNavigationFromIdentity(identity?: Identity): NavigationContext {
    if (!identity) {
      return this.getDefaultNavigation();
    }

    const cacheKey = `identity:${identity.tenant?.id || 'default'}`;

    if (_navigationCache[cacheKey]) {
      return this._getDeepCopy(_navigationCache[cacheKey]);
    }

    const navigation: NavigationContext = this.resolveNavigationFromTenant(identity.tenant || undefined);
    _navigationCache[cacheKey] = navigation;
    return navigation;
  }

  getNavigation(
    context: keyof NavigationContext,
    isActiveFn?: (href: string) => boolean
  ): NavItem[] {
    const items = this._currentNavigation[context] || [];
    return items
      .filter(item => item.isVisible !== false)
      .sort((a, b) => a.order - b.order)
      .map(item => ({
        ...item,
        isActive: isActiveFn ? isActiveFn(item.href) : false
      }));
  }

  createNavigationSnapshot(): NavigationContext {
    return this._getDeepCopy(this._currentNavigation);
  }

  clearNavigationCache(): void {
    _navigationCache = {};
  }

  // Helper to deep copy
  private _getDeepCopy(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }

  // Getters and Setters
  get currentNavigation(): NavigationContext {
    return this._getDeepCopy(this._currentNavigation);
  }

  set currentNavigation(navigation: Partial<NavigationContext>) {
    this._currentNavigation = {
      ...defaultNavigation,
      ...navigation,
      superAdmin: navigation.superAdmin || defaultNavigation.superAdmin,
      empresa: navigation.empresa || defaultNavigation.empresa,
      cliente: navigation.cliente || defaultNavigation.cliente
    };
  }
}

// Hook-like factory
export function createNavigationEngine(initialTenant?: Tenant): NavigationEngine {
  return new NavigationEngine(initialTenant);
}

// Helper function to get navigation items for a context (for backward compatibility)
export function getNavigation(
  context: keyof NavigationContext,
  isActiveFn?: (href: string) => boolean
): NavItem[] {
  const items = defaultNavigation[context] || [];
  return items
    .filter(item => item.isVisible !== false)
    .sort((a, b) => a.order - b.order)
    .map(item => ({
      ...item,
      isActive: isActiveFn ? isActiveFn(item.href) : false
    }));
}
