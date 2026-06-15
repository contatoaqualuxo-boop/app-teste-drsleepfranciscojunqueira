"use client";

import { useMemo } from "react";
import { createWhiteLabelRuntime, type RuntimeBrandAssets } from "@/lib/runtime";

export function useRuntimeBrandAssets(): RuntimeBrandAssets {
  return useMemo(() => {
    const runtime = createWhiteLabelRuntime();
    return runtime.getRuntimeBrandAssets();
  }, []);
}

