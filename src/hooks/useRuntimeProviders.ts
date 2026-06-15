'use client';

import { useMemo } from 'react';
import { createWhiteLabelRuntime } from '@/lib/runtime';

export function useRuntimeProviders() {
  return useMemo(() => {
    const runtime = createWhiteLabelRuntime();
    return runtime.getRuntimeProviders();
  }, []);
}
