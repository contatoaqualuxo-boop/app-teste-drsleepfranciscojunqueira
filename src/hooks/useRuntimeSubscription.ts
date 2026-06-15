'use client';

import { useMemo } from 'react';
import { createWhiteLabelRuntime, type RuntimeSubscription } from '@/lib/runtime';

export function useRuntimeSubscription(): RuntimeSubscription {
  return useMemo(() => {
    const runtime = createWhiteLabelRuntime();
    return runtime.getRuntimeSubscription();
  }, []);
}
