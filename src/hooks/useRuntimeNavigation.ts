"use client";

import { useMemo } from "react";
import { createWhiteLabelRuntime, type RuntimeNavigation } from "@/lib/runtime";

export function useRuntimeNavigation(): RuntimeNavigation {
  return useMemo(() => {
    const runtime = createWhiteLabelRuntime();
    return runtime.getRuntimeNavigation();
  }, []);
}

