'use client';

import { Tenant, createTenantEngine } from './tenant';
import { UserPermissions, createPermissionEngine } from './permissions';
import { ModuleKey, isModuleActive } from './modules';
import { FeatureFlagKey, isFeatureFlagActive } from './featureFlags';
import { NavItem, getNavigation } from './navigation';

// Access Types
export interface AccessContext {
  tenant: Tenant | null;
  permissions: UserPermissions;
  activeModules: ModuleKey[];
  activeFeatures: FeatureFlagKey[];
  navigation: {
    superAdmin: NavItem[];
    empresa: NavItem[];
    cliente: NavItem[];
  };
}

export interface RouteAccess {
  path: string;
  requiredRoles?: string[];
  requiredModules?: ModuleKey[];
  requiredFeatures?: FeatureFlagKey[];
  isPublic?: boolean;
}

export const DEFAULT_ACCESS_CONTEXT: AccessContext = {
  tenant: null,
  permissions: {
    roles: [],
    modulePermissions: [],
    featurePermissions: [],
    customPermissions: []
  },
  activeModules: [],
  activeFeatures: [],
  navigation: {
    superAdmin: getNavigation('superAdmin'),
    empresa: getNavigation('empresa'),
    cliente: getNavigation('cliente')
  }
};

// Access Engine Class
export class AccessEngine {
  private _accessContext: AccessContext;

  constructor(initialContext?: Partial<AccessContext>) {
    this._accessContext = { ...DEFAULT_ACCESS_CONTEXT, ...initialContext };
  }

  // Helpers
  canAccess(requirements: {
    roles?: string[];
    modules?: ModuleKey[];
    features?: FeatureFlagKey[];
  }): boolean {
    // Check roles
    if (requirements.roles && requirements.roles.length > 0) {
      const hasRole = requirements.roles.some(role => 
        this._accessContext.permissions.roles.some(r => r.id === role)
      );
      if (!hasRole) return false;
    }

    // Check modules
    if (requirements.modules && requirements.modules.length > 0) {
      const hasAllModules = requirements.modules.every(mod => 
        this._accessContext.activeModules.includes(mod) || isModuleActive(mod)
      );
      if (!hasAllModules) return false;
    }

    // Check features
    if (requirements.features && requirements.features.length > 0) {
      const hasAllFeatures = requirements.features.every(feature => 
        this._accessContext.activeFeatures.includes(feature) || isFeatureFlagActive(feature)
      );
      if (!hasAllFeatures) return false;
    }

    return true;
  }

  canAccessRoute(route: RouteAccess): boolean {
    if (route.isPublic) {
      return true;
    }
    return this.canAccess({
      roles: route.requiredRoles,
      modules: route.requiredModules,
      features: route.requiredFeatures
    });
  }

  canAccessModule(moduleKey: ModuleKey): boolean {
    if (this._accessContext.activeModules.includes(moduleKey)) {
      return true;
    }
    return isModuleActive(moduleKey);
  }

  canAccessFeature(featureKey: FeatureFlagKey): boolean {
    if (this._accessContext.activeFeatures.includes(featureKey)) {
      return true;
    }
    return isFeatureFlagActive(featureKey);
  }

  canAccessComponent(componentName: string): boolean {
    // Default to true for now
    return true;
  }

  canRender(componentName: string): boolean {
    return this.canAccessComponent(componentName);
  }

  resolveAccess(tenant?: Tenant, permissions?: UserPermissions): AccessContext {
    return {
      ...this._accessContext,
      tenant: tenant || this._accessContext.tenant,
      permissions: permissions || this._accessContext.permissions
    };
  }

  getAccessContext(): AccessContext {
    return { ...this._accessContext };
  }

  getDefaultAccess(): AccessContext {
    return { ...DEFAULT_ACCESS_CONTEXT };
  }

  mergeAccess(additional: Partial<AccessContext>): AccessContext {
    this._accessContext = { ...this._accessContext, ...additional };
    return { ...this._accessContext };
  }

  createAccessSnapshot(): AccessContext {
    return { ...this._accessContext };
  }

  // Getters and Setters
  get accessContext(): AccessContext {
    return { ...this._accessContext };
  }

  set accessContext(ctx: Partial<AccessContext>) {
    this._accessContext = { ...DEFAULT_ACCESS_CONTEXT, ...ctx };
  }
}

// Hook-like factory
export function createAccessEngine(initialContext?: Partial<AccessContext>): AccessEngine {
  return new AccessEngine(initialContext);
}
