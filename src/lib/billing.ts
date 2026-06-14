'use client';

import { Tenant } from './tenant';
import { ConfigurationEngine } from './configuration';

// Billing Types
export type SubscriptionStatus = 'active' | 'past_due' | 'cancelled' | 'trialing' | 'paused';
export type BillingCycle = 'monthly' | 'yearly';

export interface Billing {
  status: SubscriptionStatus;
  plan: string | null;
  cycle: BillingCycle;
  trialStart: Date | null;
  trialEnd: Date | null;
  subscriptionStart: Date | null;
  renewalDate: Date | null;
  cancellationDate: Date | null;
  paymentMethod: string | null;
  gateway: string | null;
  limits: Record<string, any>;
  isBlocked: boolean;
}

interface BillingCache {
  [key: string]: Billing;
}

// Default Billing Config
const DEFAULT_BILLING: Billing = {
  status: 'trialing',
  plan: 'starter',
  cycle: 'monthly',
  trialStart: null,
  trialEnd: null,
  subscriptionStart: null,
  renewalDate: null,
  cancellationDate: null,
  paymentMethod: null,
  gateway: null,
  limits: {},
  isBlocked: false
};

let _billingCache: BillingCache = {};

// Billing Resolver Class
export class BillingResolver {
  private _currentBilling: Billing;

  constructor(initialTenant?: Tenant) {
    this._currentBilling = this.resolveBillingFromTenant(initialTenant);
  }

  // Helpers
  getDefaultBilling(): Billing {
    return this._getDeepCopy(DEFAULT_BILLING);
  }

  resolveBilling(): Billing {
    return this._getDeepCopy(this._currentBilling);
  }

  resolveBillingFromTenant(tenant?: Tenant): Billing {
    const cacheKey = `tenant:${tenant?.id || 'default'}`;

    if (_billingCache[cacheKey]) {
      return this._getDeepCopy(_billingCache[cacheKey]);
    }

    const billing: Billing = this.getDefaultBilling();
    _billingCache[cacheKey] = billing;
    return billing;
  }

  resolveBillingFromPlan(plan?: string): Billing {
    const billing: Billing = this.getDefaultBilling();
    if (plan) {
      billing.plan = plan;
    }
    return billing;
  }

  resolveBillingFromConfiguration(config?: ConfigurationEngine): Billing {
    return this.getDefaultBilling();
  }

  getBillingStatus(): SubscriptionStatus {
    return this._currentBilling.status;
  }

  isBillingActive(): boolean {
    return this._currentBilling.status === 'active' || this._currentBilling.status === 'trialing';
  }

  isTrialActive(): boolean {
    return this._currentBilling.status === 'trialing';
  }

  isPastDue(): boolean {
    return this._currentBilling.status === 'past_due';
  }

  canUseBillingFeatures(): boolean {
    return !this._currentBilling.isBlocked && this.isBillingActive();
  }

  createBillingSnapshot(): Billing {
    return this._getDeepCopy(this._currentBilling);
  }

  clearBillingCache(): void {
    _billingCache = {};
  }

  // Helper to deep copy
  private _getDeepCopy(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }

  // Getters and Setters
  get currentBilling(): Billing {
    return this._getDeepCopy(this._currentBilling);
  }

  set currentBilling(billing: Partial<Billing>) {
    this._currentBilling = {
      ...DEFAULT_BILLING,
      ...billing
    };
  }
}

// Hook-like factory
export function createBillingResolver(initialTenant?: Tenant): BillingResolver {
  return new BillingResolver(initialTenant);
}
