"use client";

import { useAuth } from "@/components/AuthProvider";

export function useRBAC() {
  const {
    hasAnyRole,
    hasRole,
    isLoading,
    refreshAuthorization,
    roleAssignments,
    roleNames,
  } = useAuth();

  return {
    hasAnyRole,
    hasRole,
    isLoading,
    refreshAuthorization,
    roleAssignments,
    roleNames,
  };
}
