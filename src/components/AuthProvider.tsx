"use client";

import type { Session, User } from "@supabase/supabase-js";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  getRoleNames,
  hasAnyRole as checkHasAnyRole,
  hasRole as checkHasRole,
  mapRoleAssignments,
  type PlatformRoleName,
  type RBACScope,
  type RoleAssignment,
  type UserRoleQueryRow,
} from "@/lib/rbac";
import { createClient } from "@/lib/supabase";

type AuthContextValue = {
  hasAnyRole: (roleNames: PlatformRoleName[], scope?: RBACScope) => boolean;
  hasRole: (roleName: PlatformRoleName, scope?: RBACScope) => boolean;
  isLoading: boolean;
  refreshAuthorization: () => Promise<void>;
  refreshSession: () => Promise<void>;
  roleAssignments: RoleAssignment[];
  roleNames: string[];
  session: Session | null;
  signOut: () => Promise<void>;
  user: User | null;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const supabase = useMemo(() => createClient(), []);
  const [session, setSession] = useState<Session | null>(null);
  const [roleAssignments, setRoleAssignments] = useState<RoleAssignment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const lastSyncKeyRef = useRef<string | null>(null);

  const refreshAuthorization = useCallback(async () => {
    const userId = session?.user.id;

    if (!userId) {
      setRoleAssignments([]);
      return;
    }

    const { data, error } = await supabase
      .from("user_roles")
      .select("id, role_id, company_id, store_id, is_active, roles(id, name, description, company_id)")
      .eq("user_id", userId)
      .eq("is_active", true);

    if (error) {
      setRoleAssignments([]);
      return;
    }

    setRoleAssignments(mapRoleAssignments((data ?? []) as UserRoleQueryRow[]));
  }, [session?.user.id, supabase]);

  const syncSessionState = useCallback(
    async (nextSession: Session | null, forceRefreshRoles = false) => {
      const nextSyncKey = nextSession?.access_token ?? "anonymous";
      const shouldRefreshRoles =
        forceRefreshRoles || lastSyncKeyRef.current !== nextSyncKey;

      setSession(nextSession);
      lastSyncKeyRef.current = nextSyncKey;

      if (!nextSession?.user) {
        setRoleAssignments([]);
        setIsLoading(false);
        return;
      }

      if (shouldRefreshRoles) {
        const { data, error } = await supabase
          .from("user_roles")
          .select("id, role_id, company_id, store_id, is_active, roles(id, name, description, company_id)")
          .eq("user_id", nextSession.user.id)
          .eq("is_active", true);

        if (error) {
          setRoleAssignments([]);
        } else {
          setRoleAssignments(mapRoleAssignments((data ?? []) as UserRoleQueryRow[]));
        }
      }

      setIsLoading(false);
    },
    [supabase],
  );

  const refreshSession = useCallback(async () => {
    setIsLoading(true);

    const {
      data: { session: currentSession },
    } = await supabase.auth.getSession();

    await syncSessionState(currentSession, true);
  }, [supabase, syncSessionState]);

  const signOut = useCallback(async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw error;
    }
  }, [supabase]);

  useEffect(() => {
    void refreshSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      void syncSessionState(nextSession);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [refreshSession, supabase, syncSessionState]);

  const roleNames = useMemo(() => getRoleNames(roleAssignments), [roleAssignments]);

  const hasRole = useCallback(
    (roleName: PlatformRoleName, scope?: RBACScope) =>
      checkHasRole(roleAssignments, roleName, scope),
    [roleAssignments],
  );

  const hasAnyRole = useCallback(
    (roleNamesToCheck: PlatformRoleName[], scope?: RBACScope) =>
      checkHasAnyRole(roleAssignments, roleNamesToCheck, scope),
    [roleAssignments],
  );

  const value = useMemo<AuthContextValue>(
    () => ({
      hasAnyRole,
      hasRole,
      isLoading,
      refreshAuthorization,
      refreshSession,
      roleAssignments,
      roleNames,
      session,
      signOut,
      user: session?.user ?? null,
    }),
    [
      hasAnyRole,
      hasRole,
      isLoading,
      refreshAuthorization,
      refreshSession,
      roleAssignments,
      roleNames,
      session,
      signOut,
    ],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}
