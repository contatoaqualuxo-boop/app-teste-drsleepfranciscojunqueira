'use client';

import { Tenant } from './tenant';
import { ConfigurationEngine } from './configuration';

// Plan Types
export type PlanType = 'Starter' | 'Professional' | 'Premium' | 'Enterprise' | 'Custom';

export interface PlanLimits {
  users: number | null;
  companies: number | null;
  clients: number | null;
  storage: number | null; // In GB
  modules: number | null;
  integrations: number | null;
  accesses: number | null;
}

export interface PlanResources {
  available: string[];
  blocked: string[];
  upcoming: string[];
}

export interface Plan {
  id: string;
  name: PlanType;
  displayName: string;
  description: string;
  limits: PlanLimits;
  resources: PlanResources;
  price: {
    monthly: number | null;
    yearly: number | null;
    currency: string;
  };
  isPopular?: boolean;
  isCustom?: boolean;
  isActive?: boolean;
}

export interface PlansEngineState {
  activePlan: Plan;
  availablePlans: Plan[];
}

interface PlansCache {
  [key: string]: PlansEngineState;
}

// Default Plan Configs
const DEFAULT_STARTER_PLAN: Plan = {
  id: 'starter',
  name: 'Starter',
  displayName: 'Starter',
  description: 'Plano básico para iniciar',
  limits: {
    users: 5,
    companies: 1,
    clients: 100,
    storage: 5,
    modules: 3,
    integrations: 2,
    accesses: null
  },
  resources: {
    available: ['clientes', 'garantias', 'configurações básicas'],
    blocked: ['fidelidade', 'analytics', 'integrações premium'],
    upcoming: ['white label básico']
  },
  price: {
    monthly: 99,
    yearly: 999,
    currency: 'BRL'
  },
  isActive: true
};

const DEFAULT_PROFESSIONAL_PLAN: Plan = {
  id: 'professional',
  name: 'Professional',
  displayName: 'Professional',
  description: 'Plano para empresas em crescimento',
  limits: {
    users: 20,
    companies: 3,
    clients: 1000,
    storage: 50,
    modules: 10,
    integrations: 10,
    accesses: null
  },
  resources: {
    available: ['todos os módulos básicos', 'fidelidade', 'integrações padrão'],
    blocked: ['white label completo', 'integrações premium', 'api dedicada'],
    upcoming: ['analytics avançado']
  },
  price: {
    monthly: 299,
    yearly: 2999,
    currency: 'BRL'
  },
  isPopular: true,
  isActive: true
};

const DEFAULT_PREMIUM_PLAN: Plan = {
  id: 'premium',
  name: 'Premium',
  displayName: 'Premium',
  description: 'Plano completo para empresas',
  limits: {
    users: 100,
    companies: 10,
    clients: 10000,
    storage: 500,
    modules: null,
    integrations: null,
    accesses: null
  },
  resources: {
    available: ['todos os módulos', 'white label completo', 'analytics avançado'],
    blocked: ['api dedicada', 'enterprise support'],
    upcoming: ['integrações premium exclusivas']
  },
  price: {
    monthly: 999,
    yearly: 9999,
    currency: 'BRL'
  },
  isActive: true
};

const DEFAULT_ENTERPRISE_PLAN: Plan = {
  id: 'enterprise',
  name: 'Enterprise',
  displayName: 'Enterprise',
  description: 'Plano personalizado para grandes empresas',
  limits: {
    users: null,
    companies: null,
    clients: null,
    storage: null,
    modules: null,
    integrations: null,
    accesses: null
  },
  resources: {
    available: ['tudo', 'api dedicada', 'suporte enterprise', 'SLA prioritário'],
    blocked: [],
    upcoming: []
  },
  price: {
    monthly: null,
    yearly: null,
    currency: 'BRL'
  },
  isCustom: true,
  isActive: true
};

const DEFAULT_PLANS: Plan[] = [
  DEFAULT_STARTER_PLAN,
  DEFAULT_PROFESSIONAL_PLAN,
  DEFAULT_PREMIUM_PLAN,
  DEFAULT_ENTERPRISE_PLAN
];

const DEFAULT_PLANS_STATE: PlansEngineState = {
  activePlan: DEFAULT_STARTER_PLAN,
  availablePlans: DEFAULT_PLANS
};

let _plansCache: PlansCache = {};

// Plans Engine Class
export class PlansEngine {
  private _currentState: PlansEngineState;

  constructor(initialTenant?: Tenant) {
    this._currentState = this.resolvePlanFromTenant(initialTenant);
  }

  // Helpers
  getDefaultPlan(): Plan {
    return this._getDeepCopy(DEFAULT_STARTER_PLAN);
  }

  resolvePlan(): PlansEngineState {
    return this._getDeepCopy(this._currentState);
  }

  resolvePlanFromTenant(tenant?: Tenant): PlansEngineState {
    const cacheKey = `tenant:${tenant?.id || 'default'}`;

    if (_plansCache[cacheKey]) {
      return this._getDeepCopy(_plansCache[cacheKey]);
    }

    const state: PlansEngineState = this._getDeepCopy(DEFAULT_PLANS_STATE);

    // Apply plan from tenant settings if available
    const tenantPlan = (tenant as { plan?: string } | undefined)?.plan;
    if (tenantPlan) {
      const plan = DEFAULT_PLANS.find(p => p.id === tenantPlan) || DEFAULT_STARTER_PLAN;
      state.activePlan = plan;
    }

    _plansCache[cacheKey] = state;
    return state;
  }

  resolvePlanFromConfiguration(config?: ConfigurationEngine): PlansEngineState {
    return this._getDeepCopy(DEFAULT_PLANS_STATE);
  }

  getPlanLimits(): PlanLimits {
    return this._getDeepCopy(this._currentState.activePlan.limits);
  }

  getPlanModules(): string[] {
    return this._getDeepCopy(this._currentState.activePlan.resources.available);
  }

  getPlanFeatures(): PlanResources {
    return this._getDeepCopy(this._currentState.activePlan.resources);
  }

  getPlanPermissions(): string[] {
    return this._getDeepCopy(this._currentState.activePlan.resources.available);
  }

  canUpgrade(): boolean {
    const currentIndex = DEFAULT_PLANS.findIndex(p => p.id === this._currentState.activePlan.id);
    return currentIndex < DEFAULT_PLANS.length - 1;
  }

  createPlanSnapshot(): PlansEngineState {
    return this._getDeepCopy(this._currentState);
  }

  clearPlanCache(): void {
    _plansCache = {};
  }

  // Helper to deep copy
  private _getDeepCopy(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }

  // Getters and Setters
  get currentState(): PlansEngineState {
    return this._getDeepCopy(this._currentState);
  }

  set currentState(state: Partial<PlansEngineState>) {
    this._currentState = {
      ...DEFAULT_PLANS_STATE,
      ...state,
      activePlan: state.activePlan || DEFAULT_STARTER_PLAN,
      availablePlans: state.availablePlans || DEFAULT_PLANS
    };
  }
}

// Hook-like factory
export function createPlansEngine(initialTenant?: Tenant): PlansEngine {
  return new PlansEngine(initialTenant);
}
