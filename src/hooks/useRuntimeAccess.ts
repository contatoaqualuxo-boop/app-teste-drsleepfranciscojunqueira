'use client';

import { useMemo } from 'react';
import { createWhiteLabelRuntime, type RuntimeAccess } from '@/lib/runtime';

export function useRuntimeAccess(): RuntimeAccess {
  return useMemo(() => {
    const runtime = createWhiteLabelRuntime();
    return runtime.getRuntimeAccess();
  }, []);
}
