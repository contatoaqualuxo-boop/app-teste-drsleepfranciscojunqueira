'use client';

import { useMemo } from 'react';
import { createWhiteLabelRuntime, type RuntimePlans } from '@/lib/runtime';

export function useRuntimePlans(): RuntimePlans {
  return useMemo(() => {
    const runtime = createWhiteLabelRuntime();
    return runtime.getRuntimePlans();
  }, []);
}
