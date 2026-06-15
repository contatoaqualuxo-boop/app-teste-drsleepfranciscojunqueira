"use client";

import { useMemo } from "react";
import { createWhiteLabelRuntime, type RuntimeSpacing } from "@/lib/runtime";

export function useRuntimeSpacing(): RuntimeSpacing {
  return useMemo(() => {
    const runtime = createWhiteLabelRuntime();
    return runtime.getRuntimeSpacing();
  }, []);
}

