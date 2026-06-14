'use client';

import { Tenant } from './tenant';
import { SubscriptionStatus } from './billing';

// Subscription Types
export interface Subscription {
  tenant: Tenant | null;
  plan: string | null;
  status: SubscriptionStatus;
  startDate: Date | null;
  trialEndDate: Date | null;
  renewalDate: Date | null;
  cancellationDate: Date | null;
  cycle: 'monthly' | 'yearly';
  limits: Record<string, any>;
  enabledFeatures: string[];
  blockedFeatures: string[];
  downgradePending: boolean;
  upgradePending: boolean;
}

interface SubscriptionCache {
  [key: string]: Subscription;
}

// Default Subscription Config
const DEFAULT_SUBSCRIPTION: Subscription = {
  tenant: null,
  plan: 'starter',
  status: 'trialing',
  startDate: null,
  trialEndDate: null,
  renewalDate: null,
  cancellationDate: null,
  cycle: 'monthly',
  limits: {},
  enabledFeatures: [],
  blockedFeatures: [],
  downgradePending: false,
  upgradePending: false
};

let _subscriptionCache: SubscriptionCache = {};

// Subscription Resolver Class
export class SubscriptionResolver {
  private _currentSubscription: Subscription;

  constructor(initialTenant?: Tenant) {
    this._currentSubscription = this.resolveSubscriptionFromTenant(initialTenant);
  }

  // Helpers
  getDefaultSubscription(): Subscription {
    return this._getDeepCopy(DEFAULT_SUBSCRIPTION);
  }

  resolveSubscription(): Subscription {
    return this._getDeepCopy(this._currentSubscription);
  }

  resolveSubscriptionFromTenant(tenant?: Tenant): Subscription {
    const cacheKey = `tenant:${tenant?.id || 'default'}`;

    if (_subscriptionCache[cacheKey]) {
      return this._getDeepCopy(_subscriptionCache[cacheKey]);
    }

    const subscription: Subscription = {
      ...this.getDefaultSubscription(),
      tenant: tenant || null
    };

    _subscriptionCache[cacheKey] = subscription;
    return subscription;
  }

  resolveSubscriptionFromBilling(billing?: any): Subscription {
    const subscription: Subscription = this.getDefaultSubscription();
    if (billing) {
      subscription.status = billing.status;
      subscription.plan = billing.plan;
      subscription.cycle = billing.cycle;
    }
    return subscription;
  }

  resolveSubscriptionFromPlan(plan?: string): Subscription {
    const subscription: Subscription = this.getDefaultSubscription();
    if (plan) {
      subscription.plan = plan;
    }
    return subscription;
  }

  getSubscriptionStatus(): SubscriptionStatus {
    return this._currentSubscription.status;
  }

  isSubscriptionActive(): boolean {
    return this._currentSubscription.status === 'active' || this._currentSubscription.status === 'trialing';
  }

  isTrialSubscription(): boolean {
    return this._currentSubscription.status === 'trialing';
  }

  isSubscriptionPastDue(): boolean {
    return this._currentSubscription.status === 'past_due';
  }

  canUseSubscription(): boolean {
    return this.isSubscriptionActive();
  }

  createSubscriptionSnapshot(): Subscription {
    return this._getDeepCopy(this._currentSubscription);
  }

  clearSubscriptionCache(): void {
    _subscriptionCache = {};
  }

  // Helper to deep copy
  private _getDeepCopy(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }

  // Getters and Setters
  get currentSubscription(): Subscription {
    return this._getDeepCopy(this._currentSubscription);
  }

  set currentSubscription(subscription: Partial<Subscription>) {
    this._currentSubscription = {
      ...DEFAULT_SUBSCRIPTION,
      ...subscription
    };
  }
}

// Hook-like factory
export function createSubscriptionResolver(initialTenant?: Tenant): SubscriptionResolver {
  return new SubscriptionResolver(initialTenant);
}
