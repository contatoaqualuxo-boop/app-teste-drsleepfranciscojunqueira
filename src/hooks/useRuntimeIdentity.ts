"use client";

import { useMemo } from "react";
import { createWhiteLabelRuntime, type RuntimeIdentity } from "@/lib/runtime";

export function useRuntimeIdentity(): RuntimeIdentity {
  return useMemo(() => {
    const runtime = createWhiteLabelRuntime();
    return runtime.getRuntimeIdentity();
  }, []);
}

