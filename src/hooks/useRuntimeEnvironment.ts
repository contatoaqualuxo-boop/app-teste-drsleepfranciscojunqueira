'use client';

import { useMemo } from 'react';
import { createWhiteLabelRuntime } from '@/lib/runtime';

export function useRuntimeEnvironment() {
  return useMemo(() => {
    const runtime = createWhiteLabelRuntime();
    return runtime.getRuntimeEnvironment();
  }, []);
}
