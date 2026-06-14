'use client';

import { Tenant } from './tenant';
import { Identity } from './identity';
import { ConfigurationEngine } from './configuration';

// Domain Types
export type DomainEnvironment = 'local' | 'vercel' | 'production' | 'preview';

export interface DomainConfig {
  protocol: 'http' | 'https';
  primaryDomain: string;
  customDomain: string | null;
  subdomain: string | null;
  slug: string | null;
  previewDomain: string | null;
  productionDomain: string | null;
  developmentDomain: string | null;
  fallbackDomain: string;
  port: number | null;
  environment: DomainEnvironment;
  publicUrl: string;
  adminUrl: string;
  clientAppUrl: string;
  publicSiteUrl: string | null;
}

export interface Domain {
  environments: {
    local: DomainConfig;
    vercel: DomainConfig;
    production: DomainConfig;
    preview: DomainConfig;
  };
  activeEnvironment: DomainEnvironment;
  current: DomainConfig;
}

interface DomainCache {
  [key: string]: Domain;
}

// Default Domain Configs
const DEFAULT_LOCAL_DOMAIN: DomainConfig = {
  protocol: 'http',
  primaryDomain: 'localhost',
  customDomain: null,
  subdomain: null,
  slug: null,
  previewDomain: null,
  productionDomain: null,
  developmentDomain: 'localhost',
  fallbackDomain: 'localhost',
  port: 3000,
  environment: 'local',
  publicUrl: 'http://localhost:3000',
  adminUrl: 'http://localhost:3000/admin',
  clientAppUrl: 'http://localhost:3000',
  publicSiteUrl: null
};

const DEFAULT_VERCEL_DOMAIN: DomainConfig = {
  protocol: 'https',
  primaryDomain: 'app-teste-drsleepfranciscojunqueira.vercel.app',
  customDomain: null,
  subdomain: null,
  slug: null,
  previewDomain: null,
  productionDomain: 'app-teste-drsleepfranciscojunqueira.vercel.app',
  developmentDomain: 'app-teste-drsleepfranciscojunqueira.vercel.app',
  fallbackDomain: 'app-teste-drsleepfranciscojunqueira.vercel.app',
  port: null,
  environment: 'vercel',
  publicUrl: 'https://app-teste-drsleepfranciscojunqueira.vercel.app',
  adminUrl: 'https://app-teste-drsleepfranciscojunqueira.vercel.app/admin',
  clientAppUrl: 'https://app-teste-drsleepfranciscojunqueira.vercel.app',
  publicSiteUrl: null
};

const DEFAULT_PRODUCTION_DOMAIN: DomainConfig = {
  protocol: 'https',
  primaryDomain: 'app-teste-drsleepfranciscojunqueira.vercel.app',
  customDomain: null,
  subdomain: null,
  slug: null,
  previewDomain: null,
  productionDomain: 'app-teste-drsleepfranciscojunqueira.vercel.app',
  developmentDomain: 'app-teste-drsleepfranciscojunqueira.vercel.app',
  fallbackDomain: 'app-teste-drsleepfranciscojunqueira.vercel.app',
  port: null,
  environment: 'production',
  publicUrl: 'https://app-teste-drsleepfranciscojunqueira.vercel.app',
  adminUrl: 'https://app-teste-drsleepfranciscojunqueira.vercel.app/admin',
  clientAppUrl: 'https://app-teste-drsleepfranciscojunqueira.vercel.app',
  publicSiteUrl: null
};

const DEFAULT_PREVIEW_DOMAIN: DomainConfig = {
  protocol: 'https',
  primaryDomain: 'app-teste-drsleepfranciscojunqueira.vercel.app',
  customDomain: null,
  subdomain: null,
  slug: null,
  previewDomain: null,
  productionDomain: 'app-teste-drsleepfranciscojunqueira.vercel.app',
  developmentDomain: 'app-teste-drsleepfranciscojunqueira.vercel.app',
  fallbackDomain: 'app-teste-drsleepfranciscojunqueira.vercel.app',
  port: null,
  environment: 'preview',
  publicUrl: 'https://app-teste-drsleepfranciscojunqueira.vercel.app',
  adminUrl: 'https://app-teste-drsleepfranciscojunqueira.vercel.app/admin',
  clientAppUrl: 'https://app-teste-drsleepfranciscojunqueira.vercel.app',
  publicSiteUrl: null
};

const DEFAULT_DOMAIN: Domain = {
  environments: {
    local: DEFAULT_LOCAL_DOMAIN,
    vercel: DEFAULT_VERCEL_DOMAIN,
    production: DEFAULT_PRODUCTION_DOMAIN,
    preview: DEFAULT_PREVIEW_DOMAIN
  },
  activeEnvironment: 'local',
  current: DEFAULT_LOCAL_DOMAIN
};

let _domainCache: DomainCache = {};

// Domain Resolver Class
export class DomainResolver {
  private _currentDomain: Domain;

  constructor(initialTenant?: Tenant) {
    this._currentDomain = this.resolveDomainFromTenant(initialTenant);
  }

  // Helpers
  getDefaultDomain(): Domain {
    return this._getDeepCopy(DEFAULT_DOMAIN);
  }

  resolveDomain(): Domain {
    return this._getDeepCopy(this._currentDomain);
  }

  resolveDomainFromTenant(tenant?: Tenant): Domain {
    const cacheKey = `tenant:${tenant?.id || 'default'}`;

    if (_domainCache[cacheKey]) {
      return this._getDeepCopy(_domainCache[cacheKey]);
    }

    const domain: Domain = this.getDefaultDomain();

    // Apply custom domain from tenant if available
    if (tenant?.customDomain) {
      domain.current.customDomain = tenant.customDomain;
      domain.current.publicUrl = `https://${tenant.customDomain}`;
      domain.current.adminUrl = `https://${tenant.customDomain}/admin`;
      domain.current.clientAppUrl = `https://${tenant.customDomain}`;
    }

    _domainCache[cacheKey] = domain;
    return domain;
  }

  resolveDomainFromConfiguration(config?: ConfigurationEngine): Domain {
    return this.getDefaultDomain();
  }

  resolveDomainFromHost(host?: string): Domain {
    const domain = this.getDefaultDomain();

    if (host) {
      if (host.includes('localhost')) {
        domain.activeEnvironment = 'local';
        domain.current = domain.environments.local;
      } else if (host.includes('vercel.app')) {
        domain.activeEnvironment = 'vercel';
        domain.current = domain.environments.vercel;
      }
    }

    return domain;
  }

  getPrimaryDomain(): string {
    return this._currentDomain.current.primaryDomain;
  }

  getCustomDomain(): string | null {
    return this._currentDomain.current.customDomain;
  }

  getSubdomain(): string | null {
    return this._currentDomain.current.subdomain;
  }

  getPublicUrl(): string {
    return this._currentDomain.current.publicUrl;
  }

  getAdminUrl(): string {
    return this._currentDomain.current.adminUrl;
  }

  getClientAppUrl(): string {
    return this._currentDomain.current.clientAppUrl;
  }

  isCustomDomain(): boolean {
    return this._currentDomain.current.customDomain !== null;
  }

  isLocalhost(): boolean {
    return this._currentDomain.current.environment === 'local';
  }

  isPreviewDomain(): boolean {
    return this._currentDomain.current.environment === 'preview';
  }

  createDomainSnapshot(): Domain {
    return this._getDeepCopy(this._currentDomain);
  }

  clearDomainCache(): void {
    _domainCache = {};
  }

  // Helper to deep copy
  private _getDeepCopy(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }

  // Getters and Setters
  get currentDomain(): Domain {
    return this._getDeepCopy(this._currentDomain);
  }

  set currentDomain(domain: Partial<Domain>) {
    this._currentDomain = {
      ...DEFAULT_DOMAIN,
      ...domain,
      environments: domain.environments || DEFAULT_DOMAIN.environments,
      current: domain.current || DEFAULT_DOMAIN.current
    };
  }
}

// Hook-like factory
export function createDomainResolver(initialTenant?: Tenant): DomainResolver {
  return new DomainResolver(initialTenant);
}
