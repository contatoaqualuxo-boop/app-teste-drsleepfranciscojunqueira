'use client';

import { useEffect } from 'react';
import { createWhiteLabelRuntime } from '@/lib/runtime';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const runtime = createWhiteLabelRuntime();
    const theme = runtime.getRuntimeTheme();
    
    const root = document.documentElement;
    
    // Apply theme colors
    root.style.setProperty('--background', theme.colors.background || '#010309');
    root.style.setProperty('--foreground', theme.colors.text || '#ffffff');
    root.style.setProperty('--card-bg', 'rgba(255, 255, 255, 0.03)');
    root.style.setProperty('--card-border', 'rgba(255, 255, 255, 0.08)');
    root.style.setProperty('--text-muted', 'rgba(255, 255, 255, 0.55)');
    root.style.setProperty('--card-shadow', '0 2px 15px rgba(0, 0, 0, 0.5)');
  }, []);

  return <>{children}</>;
}
