"use client";

import { useMemo } from "react";
import { createWhiteLabelRuntime, type RuntimeFeatureFlags } from "@/lib/runtime";

export function useRuntimeFeatureFlags(): RuntimeFeatureFlags {
  return useMemo(() => {
    const runtime = createWhiteLabelRuntime();
    return runtime.getRuntimeFeatureFlags();
  }, []);
}

