"use client";

import { useMemo } from "react";
import { createWhiteLabelRuntime, type RuntimeModules } from "@/lib/runtime";

export function useRuntimeModules(): RuntimeModules {
  return useMemo(() => {
    const runtime = createWhiteLabelRuntime();
    return runtime.getRuntimeModules();
  }, []);
}

