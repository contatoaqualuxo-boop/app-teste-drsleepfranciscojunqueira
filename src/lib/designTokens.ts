'use client';

import { Tenant } from './tenant';
import { Identity } from './identity';
import { Theme } from './theme';
import { ConfigurationEngine } from './configuration';

// Design Tokens Types
export interface ColorTokens {
  primary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  secondary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  neutral: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  success: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  warning: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  error: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  info: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  background: {
    default: string;
    subtle: string;
    surface: string;
    surfaceHover: string;
  };
  text: {
    default: string;
    muted: string;
    subtle: string;
    inverted: string;
  };
  border: {
    default: string;
    muted: string;
    subtle: string;
    focus: string;
  };
}

export interface TypographyTokens {
  fontFamily: {
    primary: string;
    heading: string;
    body: string;
    button: string;
    mono: string;
  };
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
  };
  fontWeight: {
    thin: number;
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
    extrabold: number;
    black: number;
  };
  lineHeight: {
    tighter: number;
    tight: number;
    normal: number;
    relaxed: number;
    loose: number;
  };
  letterSpacing: {
    tighter: string;
    tight: string;
    normal: string;
    wide: string;
    wider: string;
    widest: string;
  };
}

export interface SpacingTokens {
  0: string;
  0.5: string;
  1: string;
  1.5: string;
  2: string;
  2.5: string;
  3: string;
  3.5: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  12: string;
  14: string;
  16: string;
  20: string;
  24: string;
  28: string;
  32: string;
  36: string;
  40: string;
  44: string;
  48: string;
  52: string;
  56: string;
  60: string;
  64: string;
  72: string;
  80: string;
  96: string;
}

export interface BorderTokens {
  width: {
    0: string;
    1: string;
    2: string;
    4: string;
    8: string;
  };
  style: {
    solid: string;
    dashed: string;
    dotted: string;
    double: string;
  };
}

export interface RadiusTokens {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  full: string;
}

export interface ShadowTokens {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  inner: string;
}

export interface OpacityTokens {
  0: number;
  5: number;
  10: number;
  20: number;
  30: number;
  40: number;
  50: number;
  60: number;
  70: number;
  80: number;
  90: number;
  95: number;
  100: number;
}

export interface ZIndexTokens {
  auto: string;
  0: number;
  10: number;
  20: number;
  30: number;
  40: number;
  50: number;
}

export interface BreakpointTokens {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

export interface MotionTokens {
  duration: {
    75: string;
    100: string;
    150: string;
    200: string;
    300: string;
    500: string;
    700: string;
    1000: string;
  };
  easing: {
    easeIn: string;
    easeOut: string;
    easeInOut: string;
    bounce: string;
  };
}

export interface ElevationTokens {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}

export interface ContainerTokens {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  full: string;
}

export interface DesignTokens {
  colors: ColorTokens;
  typography: TypographyTokens;
  spacing: SpacingTokens;
  borders: BorderTokens;
  radius: RadiusTokens;
  shadows: ShadowTokens;
  opacity: OpacityTokens;
  zIndex: ZIndexTokens;
  breakpoints: BreakpointTokens;
  motion: MotionTokens;
  elevation: ElevationTokens;
  containers: ContainerTokens;
}

interface DesignTokensCache {
  [key: string]: DesignTokens;
}

// Default Design Tokens
export const DEFAULT_COLOR_TOKENS: ColorTokens = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554'
  },
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617'
  },
  neutral: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
    950: '#09090b'
  },
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16'
  },
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03'
  },
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a'
  },
  info: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
    950: '#083344'
  },
  background: {
    default: '#ffffff',
    subtle: '#f8fafc',
    surface: '#ffffff',
    surfaceHover: '#f1f5f9'
  },
  text: {
    default: '#0f172a',
    muted: '#64748b',
    subtle: '#94a3b8',
    inverted: '#ffffff'
  },
  border: {
    default: '#e2e8f0',
    muted: '#cbd5e1',
    subtle: '#f1f5f9',
    focus: '#3b82f6'
  }
};

export const DEFAULT_TYPOGRAPHY_TOKENS: TypographyTokens = {
  fontFamily: {
    primary: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heading: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    button: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem'
  },
  fontWeight: {
    thin: 100,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  lineHeight: {
    tighter: 1.25,
    tight: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  }
};

export const DEFAULT_SPACING_TOKENS: SpacingTokens = {
  0: '0rem',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem'
};

export const DEFAULT_BORDER_TOKENS: BorderTokens = {
  width: {
    0: '0px',
    1: '1px',
    2: '2px',
    4: '4px',
    8: '8px'
  },
  style: {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
    double: 'double'
  }
};

export const DEFAULT_RADIUS_TOKENS: RadiusTokens = {
  none: '0rem',
  sm: '0.125rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px'
};

export const DEFAULT_SHADOW_TOKENS: ShadowTokens = {
  none: 'none',
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)'
};

export const DEFAULT_OPACITY_TOKENS: OpacityTokens = {
  0: 0,
  5: 0.05,
  10: 0.1,
  20: 0.2,
  30: 0.3,
  40: 0.4,
  50: 0.5,
  60: 0.6,
  70: 0.7,
  80: 0.8,
  90: 0.9,
  95: 0.95,
  100: 1
};

export const DEFAULT_Z_INDEX_TOKENS: ZIndexTokens = {
  auto: 'auto',
  0: 0,
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50
};

export const DEFAULT_BREAKPOINT_TOKENS: BreakpointTokens = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

export const DEFAULT_MOTION_TOKENS: MotionTokens = {
  duration: {
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms'
  },
  easing: {
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  }
};

export const DEFAULT_ELEVATION_TOKENS: ElevationTokens = {
  0: 'none',
  1: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  2: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  3: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  4: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  5: '0 25px 50px -12px rgb(0 0 0 / 0.25)'
};

export const DEFAULT_CONTAINER_TOKENS: ContainerTokens = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  full: '100%'
};

export const DEFAULT_DESIGN_TOKENS: DesignTokens = {
  colors: DEFAULT_COLOR_TOKENS,
  typography: DEFAULT_TYPOGRAPHY_TOKENS,
  spacing: DEFAULT_SPACING_TOKENS,
  borders: DEFAULT_BORDER_TOKENS,
  radius: DEFAULT_RADIUS_TOKENS,
  shadows: DEFAULT_SHADOW_TOKENS,
  opacity: DEFAULT_OPACITY_TOKENS,
  zIndex: DEFAULT_Z_INDEX_TOKENS,
  breakpoints: DEFAULT_BREAKPOINT_TOKENS,
  motion: DEFAULT_MOTION_TOKENS,
  elevation: DEFAULT_ELEVATION_TOKENS,
  containers: DEFAULT_CONTAINER_TOKENS
};

let _designTokensCache: DesignTokensCache = {};

// Design Tokens Engine Class
export class DesignTokensEngine {
  private _currentTokens: DesignTokens;

  constructor(initialTenant?: Tenant) {
    this._currentTokens = this.resolveTokensFromTenant(initialTenant);
  }

  // Helpers
  getDefaultTokens(): DesignTokens {
    return this._getDeepCopy(DEFAULT_DESIGN_TOKENS);
  }

  resolveTokens(): DesignTokens {
    return this._getDeepCopy(this._currentTokens);
  }

  resolveTokensFromTenant(tenant?: Tenant): DesignTokens {
    const cacheKey = `tenant:${tenant?.id || 'default'}`;

    if (_designTokensCache[cacheKey]) {
      return this._getDeepCopy(_designTokensCache[cacheKey]);
    }

    const tokens: DesignTokens = this.getDefaultTokens();

    // Apply theme colors from tenant settings if available
    if (tenant?.settings.primary_color) {
      tokens.colors.primary['500'] = tenant.settings.primary_color;
    }
    if (tenant?.settings.secondary_color) {
      tokens.colors.secondary['500'] = tenant.settings.secondary_color;
    }

    _designTokensCache[cacheKey] = tokens;
    return tokens;
  }

  resolveTokensFromTheme(theme?: Theme): DesignTokens {
    if (!theme) {
      return this.getDefaultTokens();
    }

    const tokens: DesignTokens = this.getDefaultTokens();
    return tokens;
  }

  resolveTokensFromIdentity(identity?: Identity): DesignTokens {
    if (!identity) {
      return this.getDefaultTokens();
    }

    const cacheKey = `identity:${identity.tenant?.id || 'default'}`;

    if (_designTokensCache[cacheKey]) {
      return this._getDeepCopy(_designTokensCache[cacheKey]);
    }

    const tokens: DesignTokens = this.resolveTokensFromTenant(identity.tenant || undefined);
    _designTokensCache[cacheKey] = tokens;
    return tokens;
  }

  getColorTokens(): ColorTokens {
    return this._getDeepCopy(this._currentTokens.colors);
  }

  getSpacingTokens(): SpacingTokens {
    return this._getDeepCopy(this._currentTokens.spacing);
  }

  getTypographyTokens(): TypographyTokens {
    return this._getDeepCopy(this._currentTokens.typography);
  }

  getShadowTokens(): ShadowTokens {
    return this._getDeepCopy(this._currentTokens.shadows);
  }

  getRadiusTokens(): RadiusTokens {
    return this._getDeepCopy(this._currentTokens.radius);
  }

  createTokensSnapshot(): DesignTokens {
    return this._getDeepCopy(this._currentTokens);
  }

  clearTokensCache(): void {
    _designTokensCache = {};
  }

  // Helper to deep copy
  private _getDeepCopy(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }

  // Getters and Setters
  get currentTokens(): DesignTokens {
    return this._getDeepCopy(this._currentTokens);
  }

  set currentTokens(tokens: Partial<DesignTokens>) {
    this._currentTokens = {
      ...DEFAULT_DESIGN_TOKENS,
      ...tokens,
      colors: tokens.colors || DEFAULT_COLOR_TOKENS,
      typography: tokens.typography || DEFAULT_TYPOGRAPHY_TOKENS,
      spacing: tokens.spacing || DEFAULT_SPACING_TOKENS,
      borders: tokens.borders || DEFAULT_BORDER_TOKENS,
      radius: tokens.radius || DEFAULT_RADIUS_TOKENS,
      shadows: tokens.shadows || DEFAULT_SHADOW_TOKENS,
      opacity: tokens.opacity || DEFAULT_OPACITY_TOKENS,
      zIndex: tokens.zIndex || DEFAULT_Z_INDEX_TOKENS,
      breakpoints: tokens.breakpoints || DEFAULT_BREAKPOINT_TOKENS,
      motion: tokens.motion || DEFAULT_MOTION_TOKENS,
      elevation: tokens.elevation || DEFAULT_ELEVATION_TOKENS,
      containers: tokens.containers || DEFAULT_CONTAINER_TOKENS
    };
  }
}

// Hook-like factory
export function createDesignTokensEngine(initialTenant?: Tenant): DesignTokensEngine {
  return new DesignTokensEngine(initialTenant);
}
