"use client";

import { useMemo } from "react";
import { createWhiteLabelRuntime, type RuntimeMotion } from "@/lib/runtime";

export function useRuntimeMotion(): RuntimeMotion {
  return useMemo(() => {
    const runtime = createWhiteLabelRuntime();
    return runtime.getRuntimeMotion();
  }, []);
}

