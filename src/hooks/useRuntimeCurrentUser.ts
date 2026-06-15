'use client';

import { useMemo } from 'react';
import { createWhiteLabelRuntime, type RuntimeCurrentUser } from '@/lib/runtime';

export function useRuntimeCurrentUser(): RuntimeCurrentUser {
  return useMemo(() => {
    const runtime = createWhiteLabelRuntime();
    return runtime.getRuntimeCurrentUser();
  }, []);
}
