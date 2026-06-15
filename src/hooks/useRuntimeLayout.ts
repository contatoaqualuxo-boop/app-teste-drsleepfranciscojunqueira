"use client";

import { useMemo } from "react";
import { createWhiteLabelRuntime, type RuntimeLayout } from "@/lib/runtime";

export function useRuntimeLayout(): RuntimeLayout {
  return useMemo(() => {
    const runtime = createWhiteLabelRuntime();
    return runtime.getRuntimeLayout();
  }, []);
}

