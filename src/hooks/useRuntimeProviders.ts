'use client';

import { useMemo } from 'react';
import { createWhiteLabelRuntime, type Providers } from '@/lib/runtime';

export function useRuntimeProviders(): Providers {
  return useMemo(() => {
    const runtime = createWhiteLabelRuntime();
    return runtime.getRuntimeProviders();
  }, []);
}
