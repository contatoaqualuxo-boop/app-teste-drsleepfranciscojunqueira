"use client";

import { useMemo } from "react";
import { createWhiteLabelRuntime, type RuntimeDesignTokens } from "@/lib/runtime";

export function useRuntimeDesignTokens(): RuntimeDesignTokens {
  return useMemo(() => {
    const runtime = createWhiteLabelRuntime();
    return runtime.getRuntimeDesignTokens();
  }, []);
}

