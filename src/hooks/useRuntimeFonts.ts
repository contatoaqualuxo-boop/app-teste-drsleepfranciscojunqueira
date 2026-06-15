"use client";

import { useMemo } from "react";
import { createWhiteLabelRuntime, type RuntimeFonts } from "@/lib/runtime";

export function useRuntimeFonts(): RuntimeFonts {
  return useMemo(() => {
    const runtime = createWhiteLabelRuntime();
    return runtime.getRuntimeFonts();
  }, []);
}

