'use client';

import { useMemo } from 'react';
import { createWhiteLabelRuntime, type RuntimeUsageLimits } from '@/lib/runtime';

export function useRuntimeUsageLimits(): RuntimeUsageLimits {
  return useMemo(() => {
    const runtime = createWhiteLabelRuntime();
    return runtime.getRuntimeUsageLimits();
  }, []);
}
