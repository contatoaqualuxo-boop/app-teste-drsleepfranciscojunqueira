'use client';

import { useMemo } from 'react';
import { createWhiteLabelRuntime } from '@/lib/runtime';

export function useRuntimeConfiguration() {
  return useMemo(() => {
    const runtime = createWhiteLabelRuntime();
    return runtime.getRuntimeConfiguration();
  }, []);
}
