'use client';

import { Tenant } from './tenant';
import { ModuleKey, isModuleActive } from './modules';
import { FeatureFlagKey, isFeatureFlagActive } from './featureFlags';

// Permission Types
export type Action = 'view' | 'create' | 'update' | 'delete';

export interface ResourcePermission {
  resource: string;
  actions: Action[];
}

export interface Role {
  id: string;
  name: string;
  permissions: ResourcePermission[];
  isDefault?: boolean;
}

export interface UserPermissions {
  roles: Role[];
  modulePermissions: ModuleKey[];
  featurePermissions: FeatureFlagKey[];
  customPermissions: ResourcePermission[];
}

// Default Roles
const DEFAULT_ROLES: Role[] = [
  {
    id: 'super_admin',
    name: 'Super Admin',
    permissions: [],
    isDefault: false
  },
  {
    id: 'company_admin',
    name: 'Admin da Empresa',
    permissions: [],
    isDefault: true
  },
  {
    id: 'client',
    name: 'Cliente',
    permissions: [],
    isDefault: true
  }
];

// Default Permissions
const DEFAULT_PERMISSIONS: UserPermissions = {
  roles: [DEFAULT_ROLES[1]],
  modulePermissions: [],
  featurePermissions: [],
  customPermissions: []
};

// Permission Engine Class
export class PermissionEngine {
  private _permissions: UserPermissions;
  private _tenant: Tenant | null;

  constructor(initialPermissions?: Partial<UserPermissions>, tenant?: Tenant) {
    this._permissions = { ...DEFAULT_PERMISSIONS, ...initialPermissions };
    this._tenant = tenant || null;
  }

  // Helpers
  hasPermission(resource: string, action: Action): boolean {
    // Check custom permissions first
    const customPerm = this._permissions.customPermissions.find(p => p.resource === resource);
    if (customPerm?.actions.includes(action)) {
      return true;
    }

    // Check role permissions
    for (const role of this._permissions.roles) {
      const rolePerm = role.permissions.find(p => p.resource === resource);
      if (rolePerm?.actions.includes(action)) {
        return true;
      }
    }

    // Super admin has all permissions
    if (this.hasRole('super_admin')) {
      return true;
    }

    return false;
  }

  hasRole(roleId: string): boolean {
    return this._permissions.roles.some(r => r.id === roleId);
  }

  canAccessModule(moduleKey: ModuleKey): boolean {
    if (this._permissions.modulePermissions.includes(moduleKey)) {
      return true;
    }
    // Fallback to module's default active state
    return isModuleActive(moduleKey);
  }

  canUseFeature(featureKey: FeatureFlagKey): boolean {
    if (this._permissions.featurePermissions.includes(featureKey)) {
      return true;
    }
    // Fallback to feature flag's default active state
    return isFeatureFlagActive(featureKey);
  }

  canView(resource: string): boolean {
    return this.hasPermission(resource, 'view');
  }

  canCreate(resource: string): boolean {
    return this.hasPermission(resource, 'create');
  }

  canUpdate(resource: string): boolean {
    return this.hasPermission(resource, 'update');
  }

  canDelete(resource: string): boolean {
    return this.hasPermission(resource, 'delete');
  }

  resolvePermissions(tenant?: Tenant): UserPermissions {
    this._tenant = tenant || this._tenant;
    return { ...this._permissions };
  }

  getDefaultPermissions(): UserPermissions {
    return { ...DEFAULT_PERMISSIONS };
  }

  mergePermissions(additional: Partial<UserPermissions>): UserPermissions {
    this._permissions = {
      ...this._permissions,
      ...additional,
      roles: [...new Set([...this._permissions.roles, ...(additional.roles || [])])],
      modulePermissions: [...new Set([...this._permissions.modulePermissions, ...(additional.modulePermissions || [])])],
      featurePermissions: [...new Set([...this._permissions.featurePermissions, ...(additional.featurePermissions || [])])],
      customPermissions: [...this._permissions.customPermissions, ...(additional.customPermissions || [])]
    };
    return { ...this._permissions };
  }

  // Getters and Setters
  get permissions(): UserPermissions {
    return { ...this._permissions };
  }

  set permissions(perms: Partial<UserPermissions>) {
    this._permissions = { ...DEFAULT_PERMISSIONS, ...perms };
  }
}

// Hook-like factory
export function createPermissionEngine(
  initialPermissions?: Partial<UserPermissions>,
  tenant?: Tenant
): PermissionEngine {
  return new PermissionEngine(initialPermissions, tenant);
}
