export type PlatformRoleName =
  | "super_admin"
  | "admin_empresa"
  | "gerente_loja"
  | "vendedor"
  | "cliente"
  | (string & {});

export type RBACScope = {
  companyId?: string | null;
  storeId?: string | null;
};

export type RoleDefinition = {
  companyId: string | null;
  description: string | null;
  id: string;
  name: PlatformRoleName;
};

export type RoleAssignment = {
  companyId: string | null;
  id: string;
  isActive: boolean;
  role: RoleDefinition;
  roleId: string;
  storeId: string | null;
};

type RoleQueryRow = {
  company_id: string | null;
  description: string | null;
  id: string;
  name: string;
};

export type UserRoleQueryRow = {
  company_id: string | null;
  id: string;
  is_active: boolean;
  role_id: string;
  roles: RoleQueryRow | RoleQueryRow[] | null;
  store_id: string | null;
};

export function normalizeRoleName(roleName: string) {
  return roleName.trim().toLowerCase();
}

function matchesScope(assignment: RoleAssignment, scope?: RBACScope) {
  if (!scope) {
    return true;
  }

  if (scope.companyId !== undefined && assignment.companyId !== scope.companyId) {
    return false;
  }

  if (scope.storeId !== undefined && assignment.storeId !== scope.storeId) {
    return false;
  }

  return true;
}

export function mapRoleAssignments(rows: UserRoleQueryRow[]): RoleAssignment[] {
  return rows.flatMap((row) => {
    const roleRow = Array.isArray(row.roles) ? row.roles[0] : row.roles;

    if (!roleRow) {
      return [];
    }

    return [
      {
        companyId: row.company_id,
        id: row.id,
        isActive: row.is_active,
        role: {
          companyId: roleRow.company_id,
          description: roleRow.description,
          id: roleRow.id,
          name: roleRow.name,
        },
        roleId: row.role_id,
        storeId: row.store_id,
      },
    ];
  });
}

export function getRoleNames(assignments: RoleAssignment[]) {
  return Array.from(
    new Set(assignments.map((assignment) => normalizeRoleName(assignment.role.name))),
  );
}

export function hasRole(
  assignments: RoleAssignment[],
  roleName: PlatformRoleName,
  scope?: RBACScope,
) {
  const normalizedRoleName = normalizeRoleName(roleName);

  return assignments.some(
    (assignment) =>
      assignment.isActive &&
      normalizeRoleName(assignment.role.name) === normalizedRoleName &&
      matchesScope(assignment, scope),
  );
}

export function hasAnyRole(
  assignments: RoleAssignment[],
  roleNames: PlatformRoleName[],
  scope?: RBACScope,
) {
  return roleNames.some((roleName) => hasRole(assignments, roleName, scope));
}
