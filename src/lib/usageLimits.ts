'use client';

import { Tenant } from './tenant';

// Usage Limits Types
export interface UsageLimits {
  users: number | null;
  clients: number | null;
  companies: number | null;
  stores: number | null;
  products: number | null;
  categories: number | null;
  documents: number | null;
  warranties: number | null;
  timeline: number | null;
  storage: number | null;
  modules: number | null;
  featureFlags: number | null;
  integrations: number | null;
  notifications: number | null;
  automations: number | null;
  partners: number | null;
  ai: number | null;
}

interface UsageLimitsCache {
  [key: string]: UsageLimits;
}

// Default Usage Limits Config
const DEFAULT_USAGE_LIMITS: UsageLimits = {
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
};

let _usageLimitsCache: UsageLimitsCache = {};

// Usage Limits Engine Class
export class UsageLimitsEngine {
  private _currentUsageLimits: UsageLimits;

  constructor(initialTenant?: Tenant) {
    this._currentUsageLimits = this.resolveUsageLimitsFromTenant(initialTenant);
  }

  // Helpers
  getDefaultUsageLimits(): UsageLimits {
    return this._getDeepCopy(DEFAULT_USAGE_LIMITS);
  }

  resolveUsageLimits(): UsageLimits {
    return this._getDeepCopy(this._currentUsageLimits);
  }

  resolveUsageLimitsFromTenant(tenant?: Tenant): UsageLimits {
    const cacheKey = `tenant:${tenant?.id || 'default'}`;

    if (_usageLimitsCache[cacheKey]) {
      return this._getDeepCopy(_usageLimitsCache[cacheKey]);
    }

    const usageLimits: UsageLimits = this.getDefaultUsageLimits();
    _usageLimitsCache[cacheKey] = usageLimits;
    return usageLimits;
  }

  resolveUsageLimitsFromPlan(plan?: string): UsageLimits {
    const usageLimits: UsageLimits = this.getDefaultUsageLimits();
    return usageLimits;
  }

  resolveUsageLimitsFromSubscription(subscription?: any): UsageLimits {
    const usageLimits: UsageLimits = this.getDefaultUsageLimits();
    return usageLimits;
  }

  getUsageLimit(key: keyof UsageLimits): number | null {
    return this._currentUsageLimits[key];
  }

  hasReachedLimit(key: keyof UsageLimits, currentUsage: number): boolean {
    const limit = this._currentUsageLimits[key];
    if (limit === null) return false;
    return currentUsage >= limit;
  }

  canCreateResource(key: keyof UsageLimits, currentUsage: number): boolean {
    return !this.hasReachedLimit(key, currentUsage);
  }

  canUseResource(key: keyof UsageLimits, currentUsage: number): boolean {
    return !this.hasReachedLimit(key, currentUsage);
  }

  createUsageLimitsSnapshot(): UsageLimits {
    return this._getDeepCopy(this._currentUsageLimits);
  }

  clearUsageLimitsCache(): void {
    _usageLimitsCache = {};
  }

  // Helper to deep copy
  private _getDeepCopy(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }

  // Getters and Setters
  get currentUsageLimits(): UsageLimits {
    return this._getDeepCopy(this._currentUsageLimits);
  }

  set currentUsageLimits(limits: Partial<UsageLimits>) {
    this._currentUsageLimits = {
      ...DEFAULT_USAGE_LIMITS,
      ...limits
    };
  }
}

// Hook-like factory
export function createUsageLimitsEngine(initialTenant?: Tenant): UsageLimitsEngine {
  return new UsageLimitsEngine(initialTenant);
}
