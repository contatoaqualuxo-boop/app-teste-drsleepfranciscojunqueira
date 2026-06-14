'use client';

import { Tenant } from './tenant';
import { Identity } from './identity';
import { ConfigurationEngine } from './configuration';

// Spacing Types
export interface SpacingScale {
  0: number;
  0.5: number;
  1: number;
  1.5: number;
  2: number;
  2.5: number;
  3: number;
  3.5: number;
  4: number;
  5: number;
  6: number;
  7: number;
  8: number;
  9: number;
  10: number;
  12: number;
  14: number;
  16: number;
  20: number;
  24: number;
  28: number;
  32: number;
  36: number;
  40: number;
  44: number;
  48: number;
  52: number;
  56: number;
  60: number;
  64: number;
  72: number;
  80: number;
  96: number;
}

export interface SpacingPreset {
  scale: SpacingScale;
  section: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  card: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  button: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  input: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  mobile: {
    section: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
    card: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  };
  desktop: {
    section: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
    card: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  };
}

export interface Spacing {
  base: SpacingPreset;
  compact: SpacingPreset;
  comfortable: SpacingPreset;
  premium: SpacingPreset;
  activePreset: 'base' | 'compact' | 'comfortable' | 'premium';
}

interface SpacingCache {
  [key: string]: Spacing;
}

// Default Spacing Scale
const DEFAULT_SPACING_SCALE: SpacingScale = {
  0: 0,
  0.5: 0.125,
  1: 0.25,
  1.5: 0.375,
  2: 0.5,
  2.5: 0.625,
  3: 0.75,
  3.5: 0.875,
  4: 1,
  5: 1.25,
  6: 1.5,
  7: 1.75,
  8: 2,
  9: 2.25,
  10: 2.5,
  12: 3,
  14: 3.5,
  16: 4,
  20: 5,
  24: 6,
  28: 7,
  32: 8,
  36: 9,
  40: 10,
  44: 11,
  48: 12,
  52: 13,
  56: 14,
  60: 15,
  64: 16,
  72: 18,
  80: 20,
  96: 24
};

// Create default preset helper
function createDefaultPreset(): SpacingPreset {
  return {
    scale: { ...DEFAULT_SPACING_SCALE },
    section: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32
    },
    card: {
      xs: 4,
      sm: 8,
      md: 12,
      lg: 16,
      xl: 20
    },
    button: {
      xs: 4,
      sm: 6,
      md: 8,
      lg: 12,
      xl: 16
    },
    input: {
      xs: 4,
      sm: 6,
      md: 8,
      lg: 12,
      xl: 16
    },
    mobile: {
      section: {
        xs: 4,
        sm: 6,
        md: 12,
        lg: 16,
        xl: 24
      },
      card: {
        xs: 4,
        sm: 6,
        md: 10,
        lg: 14,
        xl: 18
      }
    },
    desktop: {
      section: {
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
        xl: 40
      },
      card: {
        xs: 8,
        sm: 12,
        md: 16,
        lg: 20,
        xl: 24
      }
    }
  };
}

// Default Spacing
const DEFAULT_SPACING: Spacing = {
  base: createDefaultPreset(),
  compact: createDefaultPreset(),
  comfortable: createDefaultPreset(),
  premium: createDefaultPreset(),
  activePreset: 'base'
};

let _spacingCache: SpacingCache = {};

// Spacing Resolver Class
export class SpacingResolver {
  private _currentSpacing: Spacing;

  constructor(initialTenant?: Tenant) {
    this._currentSpacing = this.resolveSpacingFromTenant(initialTenant);
  }

  // Helpers
  getDefaultSpacing(): Spacing {
    return {
      ...DEFAULT_SPACING,
      base: createDefaultPreset(),
      compact: createDefaultPreset(),
      comfortable: createDefaultPreset(),
      premium: createDefaultPreset()
    };
  }

  resolveSpacing(): Spacing {
    return this._getDeepCopy(this._currentSpacing);
  }

  resolveSpacingFromTenant(tenant?: Tenant): Spacing {
    const cacheKey = `tenant:${tenant?.id || 'default'}`;

    if (_spacingCache[cacheKey]) {
      return this._getDeepCopy(_spacingCache[cacheKey]);
    }

    // For now, just return default
    const spacing: Spacing = this.getDefaultSpacing();

    _spacingCache[cacheKey] = spacing;
    return spacing;
  }

  resolveSpacingFromIdentity(identity?: Identity): Spacing {
    if (!identity) {
      return this.getDefaultSpacing();
    }

    const cacheKey = `identity:${identity.tenant?.id || 'default'}`;

    if (_spacingCache[cacheKey]) {
      return this._getDeepCopy(_spacingCache[cacheKey]);
    }

    const spacing: Spacing = this.getDefaultSpacing();

    _spacingCache[cacheKey] = spacing;
    return spacing;
  }

  resolveSpacingFromConfiguration(config?: ConfigurationEngine): Spacing {
    return this.getDefaultSpacing();
  }

  getActivePreset(): SpacingPreset {
    return this._getDeepCopy(this._currentSpacing[this._currentSpacing.activePreset]);
  }

  getSectionSpacing(size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md'): number {
    return this.getActivePreset().section[size];
  }

  getCardSpacing(size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md'): number {
    return this.getActivePreset().card[size];
  }

  getButtonSpacing(size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md'): number {
    return this.getActivePreset().button[size];
  }

  getInputSpacing(size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md'): number {
    return this.getActivePreset().input[size];
  }

  createSpacingSnapshot(): Spacing {
    return this._getDeepCopy(this._currentSpacing);
  }

  clearSpacingCache(): void {
    _spacingCache = {};
  }

  // Helper to deep copy
  private _getDeepCopy(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }

  // Getters and Setters
  get currentSpacing(): Spacing {
    return this._getDeepCopy(this._currentSpacing);
  }

  set currentSpacing(spacing: Partial<Spacing>) {
    this._currentSpacing = {
      ...DEFAULT_SPACING,
      ...spacing,
      base: spacing.base || createDefaultPreset(),
      compact: spacing.compact || createDefaultPreset(),
      comfortable: spacing.comfortable || createDefaultPreset(),
      premium: spacing.premium || createDefaultPreset()
    };
  }
}

// Hook-like factory
export function createSpacingResolver(initialTenant?: Tenant): SpacingResolver {
  return new SpacingResolver(initialTenant);
}
