"use client";

import { useMemo } from "react";
import { createWhiteLabelRuntime, type RuntimePermissions } from "@/lib/runtime";

export function useRuntimePermissions(): RuntimePermissions {
  return useMemo(() => {
    const runtime = createWhiteLabelRuntime();
    return runtime.getRuntimePermissions();
  }, []);
}

