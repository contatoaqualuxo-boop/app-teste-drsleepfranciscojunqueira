'use client';

import { CompanySettings } from './types';
import { createConfigEngine, ConfigurationEngine } from './configuration';

// Tenant Types
export interface Tenant {
  id: string;
  type: 'company' | 'store' | 'admin';
  companyId: string;
  storeId: string | null;
  slug: string | null;
  customDomain: string | null;
  isActive: boolean;
  settings: Partial<CompanySettings>;
  configEngine: ConfigurationEngine;
}

interface TenantCache {
  [key: string]: Tenant;
}

// Default Tenant
const DEFAULT_TENANT: Tenant = {
  id: 'default',
  type: 'admin',
  companyId: 'default',
  storeId: null,
  slug: null,
  customDomain: null,
  isActive: true,
  settings: {},
  configEngine: createConfigEngine()
};

// Cache storage
let _tenantCache: TenantCache = {};

// Tenant Engine Class
export class TenantEngine {
  private _currentTenant: Tenant | null;

  constructor(initialTenant?: Partial<Tenant>) {
    this._currentTenant = initialTenant ? this._buildTenant(initialTenant) : null;
  }

  // Build tenant from partial data
  private _buildTenant(partial: Partial<Tenant>): Tenant {
    const baseTenant = { ...DEFAULT_TENANT, ...partial };
    return {
      ...baseTenant,
      configEngine: createConfigEngine(baseTenant.settings)
    };
  }

  // Helpers
  getDefaultTenant(): Tenant {
    return DEFAULT_TENANT;
  }

  resolveTenantFromCompany(companyId: string, settings?: Partial<CompanySettings>): Tenant {
    const cacheKey = `company:${companyId}`;
    if (_tenantCache[cacheKey]) {
      return _tenantCache[cacheKey];
    }

    const tenant = this._buildTenant({
      id: companyId,
      type: 'company',
      companyId,
      storeId: null,
      isActive: true,
      settings
    });

    _tenantCache[cacheKey] = tenant;
    return tenant;
  }

  resolveTenantFromStore(storeId: string, companyId: string, settings?: Partial<CompanySettings>): Tenant {
    const cacheKey = `store:${storeId}`;
    if (_tenantCache[cacheKey]) {
      return _tenantCache[cacheKey];
    }

    const tenant = this._buildTenant({
      id: storeId,
      type: 'store',
      companyId,
      storeId,
      isActive: true,
      settings
    });

    _tenantCache[cacheKey] = tenant;
    return tenant;
  }

  resolveTenantFromUser(userId: string, companyId?: string, settings?: Partial<CompanySettings>): Tenant {
    if (companyId) {
      return this.resolveTenantFromCompany(companyId, settings);
    }
    return DEFAULT_TENANT;
  }

  resolveTenantFromDomain(domain: string, settings?: Partial<CompanySettings>): Tenant {
    const cacheKey = `domain:${domain}`;
    if (_tenantCache[cacheKey]) {
      return _tenantCache[cacheKey];
    }
    // Fallback to default for now
    const tenant = this._buildTenant({
      ...DEFAULT_TENANT,
      customDomain: domain,
      settings
    });
    _tenantCache[cacheKey] = tenant;
    return tenant;
  }

  resolveTenantFromSlug(slug: string, settings?: Partial<CompanySettings>): Tenant {
    const cacheKey = `slug:${slug}`;
    if (_tenantCache[cacheKey]) {
      return _tenantCache[cacheKey];
    }
    // Fallback to default for now
    const tenant = this._buildTenant({
      ...DEFAULT_TENANT,
      slug,
      settings
    });
    _tenantCache[cacheKey] = tenant;
    return tenant;
  }

  isTenantActive(tenant: Tenant): boolean {
    return tenant.isActive;
  }

  hasTenant(): boolean {
    return this._currentTenant !== null;
  }

  getTenantCache(): TenantCache {
    return { ..._tenantCache };
  }

  clearTenantCache(): void {
    _tenantCache = {};
  }

  // Getters and Setters
  get currentTenant(): Tenant | null {
    return this._currentTenant;
  }

  set currentTenant(tenant: Partial<Tenant> | null) {
    this._currentTenant = tenant ? this._buildTenant(tenant) : null;
  }
}

// Hook-like factory
export function createTenantEngine(initialTenant?: Partial<Tenant>): TenantEngine {
  return new TenantEngine(initialTenant);
}
