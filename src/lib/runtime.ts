'use client';

import { Tenant } from './tenant';
import { Registry } from './registry';
import { BrandAssets } from './brandAssets';
import { DesignTokens } from './designTokens';
import { Providers } from './providers';
import { Subscription } from './subscription';
import { UsageLimits } from './usageLimits';

// Runtime Types
export interface RuntimeIdentity {
  name: string;
  slug: string;
  logo: string;
  logoDark: string;
  logoLight: string;
}

export interface RuntimeTheme {
  mode: 'light' | 'dark' | 'system';
  colors: Record<string, any>;
  fonts: Record<string, any>;
  spacing: Record<string, any>;
  motion: Record<string, any>;
  layout: Record<string, any>;
}

export interface RuntimeAccess {
  isAuthenticated: boolean;
  permissions: string[];
  roles: string[];
}

export interface RuntimePlan {
  id: string;
  name: string;
  features: string[];
}

export interface Runtime {
  tenant: Tenant | null;
  identity: RuntimeIdentity;
  theme: RuntimeTheme;
  domain: Record<string, any>;
  plan: RuntimePlan;
  subscription: Subscription | null;
  limits: UsageLimits;
  access: RuntimeAccess;
  modules: string[];
  features: string[];
  providers: Providers;
  registry: Registry;
}

interface RuntimeCache {
  [key: string]: Runtime;
}

// Default Runtime Config
const DEFAULT_RUNTIME: Runtime = {
  tenant: null,
  identity: {
    name: 'Plataforma Prévisita',
    slug: 'previsita',
    logo: '',
    logoDark: '',
    logoLight: ''
  },
  theme: {
    mode: 'light',
    colors: {},
    fonts: {},
    spacing: {},
    motion: {},
    layout: {}
  },
  domain: {},
  plan: {
    id: 'starter',
    name: 'Starter',
    features: []
  },
  subscription: null,
  limits: {
    users: null,
    clients: null,
    companies: null,
    stores: null,
    products: null,
    categories: null,
    documents: null,
    warranties: null,
    timeline: null,
    storage: null,
    modules: null,
    featureFlags: null,
    integrations: null,
    notifications: null,
    automations: null,
    partners: null,
    ai: null
  },
  access: {
    isAuthenticated: false,
    permissions: [],
    roles: []
  },
  modules: [],
  features: [],
  providers: {},
  registry: {}
};

let _runtimeCache: RuntimeCache = {};

// White Label Runtime Class
export class WhiteLabelRuntime {
  private _currentRuntime: Runtime;

  constructor(initialTenant?: Tenant) {
    this._currentRuntime = this.resolveRuntimeFromTenant(initialTenant);
  }

  // Helpers
  getDefaultRuntime(): Runtime {
    return this._getDeepCopy(DEFAULT_RUNTIME);
  }

  resolveRuntime(): Runtime {
    return this._getDeepCopy(this._currentRuntime);
  }

  resolveRuntimeFromTenant(tenant?: Tenant): Runtime {
    const cacheKey = `tenant:${tenant?.id || 'default'}`;

    if (_runtimeCache[cacheKey]) {
      return this._getDeepCopy(_runtimeCache[cacheKey]);
    }

    const runtime: Runtime = { ...this.getDefaultRuntime(), tenant: tenant || null };
    _runtimeCache[cacheKey] = runtime;
    return runtime;
  }

  resolveRuntimeFromConfiguration(config?: any): Runtime {
    const runtime: Runtime = this.getDefaultRuntime();
    return runtime;
  }

  getRuntimeIdentity(): RuntimeIdentity {
    return this._currentRuntime.identity;
  }

  getRuntimeTheme(): RuntimeTheme {
    return this._currentRuntime.theme;
  }

  getRuntimeAccess(): RuntimeAccess {
    return this._currentRuntime.access;
  }

  getRuntimePlan(): RuntimePlan {
    return this._currentRuntime.plan;
  }

  getRuntimeSubscription(): Subscription | null {
    return this._currentRuntime.subscription;
  }

  getRuntimeProviders(): Providers {
    return this._currentRuntime.providers;
  }

  createRuntimeSnapshot(): Runtime {
    return this._getDeepCopy(this._currentRuntime);
  }

  clearRuntimeCache(): void {
    _runtimeCache = {};
  }

  // Helper to deep copy
  private _getDeepCopy(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }

  // Getters and Setters
  get currentRuntime(): Runtime {
    return this._getDeepCopy(this._currentRuntime);
  }

  set currentRuntime(runtime: Partial<Runtime>) {
    this._currentRuntime = {
      ...DEFAULT_RUNTIME,
      ...runtime
    };
  }
}

// Hook-like factory
export function createWhiteLabelRuntime(initialTenant?: Tenant): WhiteLabelRuntime {
  return new WhiteLabelRuntime(initialTenant);
}
