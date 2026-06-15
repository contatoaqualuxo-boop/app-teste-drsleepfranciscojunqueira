'use client';

import { useMemo } from 'react';
import { createWhiteLabelRuntime, type RuntimeBilling } from '@/lib/runtime';

export function useRuntimeBilling(): RuntimeBilling {
  return useMemo(() => {
    const runtime = createWhiteLabelRuntime();
    return runtime.getRuntimeBilling();
  }, []);
}
