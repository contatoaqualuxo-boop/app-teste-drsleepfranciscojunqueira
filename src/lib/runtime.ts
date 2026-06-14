'use client';

import { Tenant } from './tenant';
import { Registry } from './registry';
import { Providers, DEFAULT_PROVIDERS } from './providers';
import { Subscription } from './subscription';
import { UsageLimits } from './usageLimits';
import { SupabaseSettings } from './supabaseSettingsConnector';
import { Identity, IdentityResolver, createIdentityResolver } from './identity';
import { Theme, createTheme } from './theme';

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
  providers: { ...DEFAULT_PROVIDERS },
  registry: {}
};

let _runtimeCache: RuntimeCache = {};
let _runtimeIdentityCache: Record<string, RuntimeIdentity> = {};
let _runtimeThemeCache: Record<string, RuntimeTheme> = {};

// White Label Runtime Class
export class WhiteLabelRuntime {
  private _currentRuntime: Runtime;
  private _identityResolver: IdentityResolver;

  constructor(initialTenant?: Tenant) {
    this._identityResolver = createIdentityResolver(initialTenant);
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

  resolveRuntimeFromSettings(settings?: SupabaseSettings): Runtime {
    const runtime: Runtime = this.getDefaultRuntime();

    // Safe merging with fallback
    if (settings?.identity) {
      runtime.identity = {
        ...runtime.identity,
        ...settings.identity
      };
    }

    if (settings?.theme) {
      runtime.theme = {
        ...runtime.theme,
        ...settings.theme
      };
    }

    if (settings?.plan) {
      runtime.plan = {
        ...runtime.plan,
        ...settings.plan
      };
    }

    if (settings?.provider) {
      runtime.providers = {
        ...runtime.providers,
        ...settings.provider
      };
    }

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

  // Identity Integration Helpers
  resolveRuntimeIdentity(tenant?: Tenant): RuntimeIdentity {
    const cacheKey = `tenant:${tenant?.id || 'default'}`;

    if (_runtimeIdentityCache[cacheKey]) {
      return this._getDeepCopy(_runtimeIdentityCache[cacheKey]);
    }

    const identity = this._identityResolver.resolveIdentityFromTenant(tenant);
    const runtimeIdentity: RuntimeIdentity = {
      name: identity.companyInfo.companyName || 'Plataforma Prévisita',
      slug: 'previsita',
      logo: identity.brandAssets.logoUrl || '',
      logoDark: '',
      logoLight: ''
    };

    _runtimeIdentityCache[cacheKey] = runtimeIdentity;
    return this._getDeepCopy(runtimeIdentity);
  }

  resolveIdentityFromRuntime(runtimeIdentity?: RuntimeIdentity): Partial<Identity> {
    return {
      companyInfo: {
        companyName: runtimeIdentity?.name || null,
        slogan: null,
        previsitaUrl: null,
        customDomain: null
      },
      brandAssets: {
        logoUrl: runtimeIdentity?.logo || null,
        faviconUrl: null,
        bannerUrl: null,
        socialImageUrl: null
      }
    };
  }

  hasRuntimeIdentity(): boolean {
    return !!this._currentRuntime.identity.name && this._currentRuntime.identity.name !== 'Plataforma Prévisita';
  }

  createRuntimeIdentitySnapshot(): RuntimeIdentity {
    return this._getDeepCopy(this._currentRuntime.identity);
  }

  clearRuntimeIdentityCache(): void {
    _runtimeIdentityCache = {};
  }

  // Theme Integration Helpers
  resolveRuntimeTheme(tenant?: Tenant): RuntimeTheme {
    const cacheKey = `tenant:${tenant?.id || 'default'}`;

    if (_runtimeThemeCache[cacheKey]) {
      return this._getDeepCopy(_runtimeThemeCache[cacheKey]);
    }

    const theme = this._identityResolver.getTheme();
    const runtimeTheme: RuntimeTheme = {
      mode: 'light',
      colors: {
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        accent: theme.colors.accent,
        background: theme.colors.background,
        surface: theme.colors.surface,
        text: theme.colors.text,
        textSecondary: theme.colors.textSecondary,
        border: theme.colors.border
      },
      fonts: {},
      spacing: {},
      motion: {},
      layout: {}
    };

    _runtimeThemeCache[cacheKey] = runtimeTheme;
    return this._getDeepCopy(runtimeTheme);
  }

  resolveThemeFromRuntime(runtimeTheme?: RuntimeTheme): Partial<Theme> {
    return {
      colors: {
        primary: runtimeTheme?.colors?.primary || '#6366f1',
        secondary: runtimeTheme?.colors?.secondary || '#8b5cf6',
        accent: runtimeTheme?.colors?.accent || '#f59e0b',
        background: runtimeTheme?.colors?.background || '#020617',
        surface: runtimeTheme?.colors?.surface || '#020617',
        text: runtimeTheme?.colors?.text || '#ffffff',
        textSecondary: runtimeTheme?.colors?.textSecondary || '#9ca3af',
        border: runtimeTheme?.colors?.border || '#1f2937'
      }
    };
  }

  hasRuntimeTheme(): boolean {
    return !!this._currentRuntime.theme.colors.primary && this._currentRuntime.theme.colors.primary !== '#6366f1';
  }

  createRuntimeThemeSnapshot(): RuntimeTheme {
    return this._getDeepCopy(this._currentRuntime.theme);
  }

  clearRuntimeThemeCache(): void {
    _runtimeThemeCache = {};
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
