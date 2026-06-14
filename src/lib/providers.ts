'use client';

import { Tenant } from './tenant';

// Provider Types
export type ProviderType = 
  | 'supabase' 
  | 'stripe' 
  | 'mercadoPago' 
  | 'google' 
  | 'googleMaps' 
  | 'googleAnalytics' 
  | 'whatsApp' 
  | 'email' 
  | 'pushNotification' 
  | 'storage' 
  | 'ai' 
  | 'ocr' 
  | 'api' 
  | 'webhooks' 
  | 'authentication' 
  | 'logs' 
  | 'cache' 
  | 'cdn' 
  | 'upload' 
  | 'backup' 
  | 'monitoring';

export interface Provider {
  type: ProviderType;
  name: string;
  enabled: boolean;
  config: Record<string, any>;
}

export interface Providers {
  [key: string]: Provider;
}

interface ProvidersCache {
  [key: string]: Providers;
}

// Default Providers Config
const DEFAULT_PROVIDERS: Providers = {
  supabase: {
    type: 'supabase',
    name: 'Supabase',
    enabled: true,
    config: {}
  },
  stripe: {
    type: 'stripe',
    name: 'Stripe',
    enabled: false,
    config: {}
  },
  mercadoPago: {
    type: 'mercadoPago',
    name: 'Mercado Pago',
    enabled: false,
    config: {}
  },
  google: {
    type: 'google',
    name: 'Google',
    enabled: false,
    config: {}
  },
  googleMaps: {
    type: 'googleMaps',
    name: 'Google Maps',
    enabled: false,
    config: {}
  },
  googleAnalytics: {
    type: 'googleAnalytics',
    name: 'Google Analytics',
    enabled: false,
    config: {}
  },
  whatsApp: {
    type: 'whatsApp',
    name: 'WhatsApp',
    enabled: false,
    config: {}
  },
  email: {
    type: 'email',
    name: 'Email',
    enabled: false,
    config: {}
  },
  pushNotification: {
    type: 'pushNotification',
    name: 'Push Notification',
    enabled: false,
    config: {}
  },
  storage: {
    type: 'storage',
    name: 'Storage',
    enabled: true,
    config: {}
  },
  ai: {
    type: 'ai',
    name: 'AI',
    enabled: false,
    config: {}
  },
  ocr: {
    type: 'ocr',
    name: 'OCR',
    enabled: false,
    config: {}
  },
  api: {
    type: 'api',
    name: 'API',
    enabled: false,
    config: {}
  },
  webhooks: {
    type: 'webhooks',
    name: 'Webhooks',
    enabled: false,
    config: {}
  },
  authentication: {
    type: 'authentication',
    name: 'Authentication',
    enabled: false,
    config: {}
  },
  logs: {
    type: 'logs',
    name: 'Logs',
    enabled: false,
    config: {}
  },
  cache: {
    type: 'cache',
    name: 'Cache',
    enabled: false,
    config: {}
  },
  cdn: {
    type: 'cdn',
    name: 'CDN',
    enabled: false,
    config: {}
  },
  upload: {
    type: 'upload',
    name: 'Upload',
    enabled: false,
    config: {}
  },
  backup: {
    type: 'backup',
    name: 'Backup',
    enabled: false,
    config: {}
  },
  monitoring: {
    type: 'monitoring',
    name: 'Monitoring',
    enabled: false,
    config: {}
  }
};

let _providersCache: ProvidersCache = {};

// Provider Integration Engine Class
export class ProviderIntegrationEngine {
  private _currentProviders: Providers;

  constructor(initialTenant?: Tenant) {
    this._currentProviders = this.resolveProviders(initialTenant);
  }

  // Helpers
  getDefaultProviders(): Providers {
    return this._getDeepCopy(DEFAULT_PROVIDERS);
  }

  resolveProviders(tenant?: Tenant): Providers {
    const cacheKey = `tenant:${tenant?.id || 'default'}`;

    if (_providersCache[cacheKey]) {
      return this._getDeepCopy(_providersCache[cacheKey]);
    }

    const providers: Providers = this.getDefaultProviders();
    _providersCache[cacheKey] = providers;
    return providers;
  }

  getProvider(type: ProviderType): Provider | undefined {
    return this._currentProviders[type];
  }

  isProviderEnabled(type: ProviderType): boolean {
    const provider = this.getProvider(type);
    return !!provider?.enabled;
  }

  canUseProvider(type: ProviderType): boolean {
    return this.isProviderEnabled(type);
  }

  createProvidersSnapshot(): Providers {
    return this._getDeepCopy(this._currentProviders);
  }

  clearProvidersCache(): void {
    _providersCache = {};
  }

  // Helper to deep copy
  private _getDeepCopy(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }

  // Getters and Setters
  get currentProviders(): Providers {
    return this._getDeepCopy(this._currentProviders);
  }

  set currentProviders(providers: Partial<Providers>) {
    const mergedProviders: Providers = { ...DEFAULT_PROVIDERS };

    Object.entries(providers).forEach(([key, provider]) => {
      if (provider) {
        mergedProviders[key] = provider;
      }
    });

    this._currentProviders = mergedProviders;
  }
}

// Hook-like factory
export function createProviderIntegrationEngine(initialTenant?: Tenant): ProviderIntegrationEngine {
  return new ProviderIntegrationEngine(initialTenant);
}
