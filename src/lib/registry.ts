'use client';

import { Tenant } from './tenant';

// Registry Types
export type RegistryCategory = 
  | 'theme' 
  | 'design' 
  | 'layout' 
  | 'brand' 
  | 'navigation' 
  | 'module' 
  | 'feature' 
  | 'config' 
  | 'tenant' 
  | 'permission' 
  | 'access' 
  | 'plan' 
  | 'billing' 
  | 'subscription' 
  | 'usage' 
  | 'provider';

export interface RegistryItem {
  key: string;
  name: string;
  description: string;
  category: RegistryCategory;
  file: string;
  status: 'active' | 'inactive' | 'deprecated';
  dependencies: string[];
  context: Record<string, any>;
  order: number;
  version: string;
  maintenance: Record<string, any>;
  documentation: Record<string, any>;
}

export interface Registry {
  [key: string]: RegistryItem;
}

interface RegistryCache {
  [key: string]: Registry;
}

// Default Registry Config
const DEFAULT_REGISTRY: Registry = {
  themeEngine: {
    key: 'themeEngine',
    name: 'Theme Engine',
    description: 'Gerenciador de temas da plataforma',
    category: 'theme',
    file: 'theme.ts',
    status: 'active',
    dependencies: [],
    context: {},
    order: 1,
    version: '1.0.0',
    maintenance: {},
    documentation: {}
  },
  designTokensEngine: {
    key: 'designTokensEngine',
    name: 'Design Tokens Engine',
    description: 'Gerenciador de tokens de design',
    category: 'design',
    file: 'designTokens.ts',
    status: 'active',
    dependencies: ['themeEngine'],
    context: {},
    order: 2,
    version: '1.0.0',
    maintenance: {},
    documentation: {}
  },
  fontResolver: {
    key: 'fontResolver',
    name: 'Font Resolver',
    description: 'Resolvedor de fontes',
    category: 'design',
    file: 'fonts.ts',
    status: 'active',
    dependencies: ['designTokensEngine'],
    context: {},
    order: 3,
    version: '1.0.0',
    maintenance: {},
    documentation: {}
  },
  spacingResolver: {
    key: 'spacingResolver',
    name: 'Spacing Resolver',
    description: 'Resolvedor de espaçamentos',
    category: 'design',
    file: 'spacing.ts',
    status: 'active',
    dependencies: ['designTokensEngine'],
    context: {},
    order: 4,
    version: '1.0.0',
    maintenance: {},
    documentation: {}
  },
  motionResolver: {
    key: 'motionResolver',
    name: 'Motion Resolver',
    description: 'Resolvedor de animações e transições',
    category: 'design',
    file: 'motion.ts',
    status: 'active',
    dependencies: ['designTokensEngine'],
    context: {},
    order: 5,
    version: '1.0.0',
    maintenance: {},
    documentation: {}
  },
  layoutResolver: {
    key: 'layoutResolver',
    name: 'Layout Resolver',
    description: 'Resolvedor de layouts',
    category: 'layout',
    file: 'layout.ts',
    status: 'active',
    dependencies: ['designTokensEngine', 'spacingResolver'],
    context: {},
    order: 6,
    version: '1.0.0',
    maintenance: {},
    documentation: {}
  },
  brandAssetsResolver: {
    key: 'brandAssetsResolver',
    name: 'Brand Assets Resolver',
    description: 'Resolvedor de ativos de marca',
    category: 'brand',
    file: 'brandAssets.ts',
    status: 'active',
    dependencies: [],
    context: {},
    order: 7,
    version: '1.0.0',
    maintenance: {},
    documentation: {}
  },
  identityResolver: {
    key: 'identityResolver',
    name: 'Identity Resolver',
    description: 'Resolvedor de identidade visual',
    category: 'brand',
    file: 'identity.ts',
    status: 'active',
    dependencies: ['brandAssetsResolver'],
    context: {},
    order: 8,
    version: '1.0.0',
    maintenance: {},
    documentation: {}
  },
  whiteLabelResolver: {
    key: 'whiteLabelResolver',
    name: 'White Label Resolver',
    description: 'Resolvedor de personalização white label',
    category: 'brand',
    file: 'whiteLabel.ts',
    status: 'active',
    dependencies: ['identityResolver', 'themeEngine'],
    context: {},
    order: 9,
    version: '1.0.0',
    maintenance: {},
    documentation: {}
  },
  domainResolver: {
    key: 'domainResolver',
    name: 'Domain Resolver',
    description: 'Resolvedor de domínios e URLs',
    category: 'config',
    file: 'domain.ts',
    status: 'active',
    dependencies: [],
    context: {},
    order: 10,
    version: '1.0.0',
    maintenance: {},
    documentation: {}
  },
  navigationEngine: {
    key: 'navigationEngine',
    name: 'Navigation Engine',
    description: 'Gerenciador de navegação',
    category: 'navigation',
    file: 'navigation.ts',
    status: 'active',
    dependencies: ['domainResolver'],
    context: {},
    order: 11,
    version: '1.0.0',
    maintenance: {},
    documentation: {}
  },
  moduleEngine: {
    key: 'moduleEngine',
    name: 'Module Engine',
    description: 'Gerenciador de módulos',
    category: 'module',
    file: 'module.ts',
    status: 'active',
    dependencies: ['featureFlagEngine'],
    context: {},
    order: 12,
    version: '1.0.0',
    maintenance: {},
    documentation: {}
  },
  featureFlagEngine: {
    key: 'featureFlagEngine',
    name: 'Feature Flag Engine',
    description: 'Gerenciador de flags de funcionalidades',
    category: 'feature',
    file: 'featureFlags.ts',
    status: 'active',
    dependencies: ['configurationEngine'],
    context: {},
    order: 13,
    version: '1.0.0',
    maintenance: {},
    documentation: {}
  },
  configurationEngine: {
    key: 'configurationEngine',
    name: 'Configuration Engine',
    description: 'Gerenciador de configurações',
    category: 'config',
    file: 'configuration.ts',
    status: 'active',
    dependencies: [],
    context: {},
    order: 14,
    version: '1.0.0',
    maintenance: {},
    documentation: {}
  },
  tenantEngine: {
    key: 'tenantEngine',
    name: 'Tenant Engine',
    description: 'Gerenciador de tenants/empresas',
    category: 'tenant',
    file: 'tenant.ts',
    status: 'active',
    dependencies: ['configurationEngine'],
    context: {},
    order: 15,
    version: '1.0.0',
    maintenance: {},
    documentation: {}
  },
  permissionEngine: {
    key: 'permissionEngine',
    name: 'Permission Engine',
    description: 'Gerenciador de permissões',
    category: 'permission',
    file: 'permissions.ts',
    status: 'active',
    dependencies: ['tenantEngine'],
    context: {},
    order: 16,
    version: '1.0.0',
    maintenance: {},
    documentation: {}
  },
  accessEngine: {
    key: 'accessEngine',
    name: 'Access Engine',
    description: 'Gerenciador de acessos',
    category: 'access',
    file: 'access.ts',
    status: 'active',
    dependencies: ['permissionEngine'],
    context: {},
    order: 17,
    version: '1.0.0',
    maintenance: {},
    documentation: {}
  },
  plansEngine: {
    key: 'plansEngine',
    name: 'Plans Engine',
    description: 'Gerenciador de planos',
    category: 'plan',
    file: 'plans.ts',
    status: 'active',
    dependencies: ['moduleEngine', 'featureFlagEngine'],
    context: {},
    order: 18,
    version: '1.0.0',
    maintenance: {},
    documentation: {}
  },
  billingResolver: {
    key: 'billingResolver',
    name: 'Billing Resolver',
    description: 'Resolvedor de cobrança',
    category: 'billing',
    file: 'billing.ts',
    status: 'active',
    dependencies: ['plansEngine', 'tenantEngine'],
    context: {},
    order: 19,
    version: '1.0.0',
    maintenance: {},
    documentation: {}
  },
  subscriptionResolver: {
    key: 'subscriptionResolver',
    name: 'Subscription Resolver',
    description: 'Resolvedor de assinaturas',
    category: 'subscription',
    file: 'subscription.ts',
    status: 'active',
    dependencies: ['billingResolver', 'plansEngine'],
    context: {},
    order: 20,
    version: '1.0.0',
    maintenance: {},
    documentation: {}
  },
  usageLimitsEngine: {
    key: 'usageLimitsEngine',
    name: 'Usage Limits Engine',
    description: 'Gerenciador de limites de uso',
    category: 'usage',
    file: 'usageLimits.ts',
    status: 'active',
    dependencies: ['plansEngine', 'subscriptionResolver'],
    context: {},
    order: 21,
    version: '1.0.0',
    maintenance: {},
    documentation: {}
  },
  providerIntegrationEngine: {
    key: 'providerIntegrationEngine',
    name: 'Provider Integration Engine',
    description: 'Gerenciador de integrações com provedores',
    category: 'provider',
    file: 'providers.ts',
    status: 'active',
    dependencies: ['configurationEngine'],
    context: {},
    order: 22,
    version: '1.0.0',
    maintenance: {},
    documentation: {}
  }
};

let _registryCache: RegistryCache = {};

// Registry Engine Class
export class RegistryEngine {
  private _currentRegistry: Registry;

  constructor(initialTenant?: Tenant) {
    this._currentRegistry = this.resolveRegistry(initialTenant);
  }

  // Helpers
  getDefaultRegistry(): Registry {
    return this._getDeepCopy(DEFAULT_REGISTRY);
  }

  resolveRegistry(tenant?: Tenant): Registry {
    const cacheKey = `tenant:${tenant?.id || 'default'}`;

    if (_registryCache[cacheKey]) {
      return this._getDeepCopy(_registryCache[cacheKey]);
    }

    const registry: Registry = this.getDefaultRegistry();
    _registryCache[cacheKey] = registry;
    return registry;
  }

  getRegistryItem(key: string): RegistryItem | undefined {
    return this._currentRegistry[key];
  }

  getRegistryByCategory(category: RegistryCategory): RegistryItem[] {
    return Object.values(this._currentRegistry).filter(item => item.category === category);
  }

  getRegistryDependencies(key: string): string[] {
    const item = this.getRegistryItem(key);
    return item?.dependencies || [];
  }

  isRegistryItemActive(key: string): boolean {
    const item = this.getRegistryItem(key);
    return item?.status === 'active';
  }

  registerEngine(item: RegistryItem): void {
    this._currentRegistry[item.key] = item;
  }

  createRegistrySnapshot(): Registry {
    return this._getDeepCopy(this._currentRegistry);
  }

  clearRegistryCache(): void {
    _registryCache = {};
  }

  // Helper to deep copy
  private _getDeepCopy(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }

  // Getters and Setters
  get currentRegistry(): Registry {
    return this._getDeepCopy(this._currentRegistry);
  }

  set currentRegistry(registry: Partial<Registry>) {
    const mergedRegistry: Registry = { ...DEFAULT_REGISTRY };

    Object.entries(registry).forEach(([key, item]) => {
      if (item) {
        mergedRegistry[key] = item;
      }
    });

    this._currentRegistry = mergedRegistry;
  }
}

// Hook-like factory
export function createRegistryEngine(initialTenant?: Tenant): RegistryEngine {
  return new RegistryEngine(initialTenant);
}
