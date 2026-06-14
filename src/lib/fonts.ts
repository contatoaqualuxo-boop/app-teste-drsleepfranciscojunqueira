'use client';

import { Tenant } from './tenant';
import { Identity } from './identity';
import { ConfigurationEngine } from './configuration';

// Font Types
export interface FontItem {
  fontFamily: string;
  fontWeight?: number;
  fontStyle?: 'normal' | 'italic';
  url?: string | null;
  mimeType?: string | null;
}

export interface FontScale {
  xs: number;
  sm: number;
  base: number;
  lg: number;
  xl: number;
  '2xl': number;
  '3xl': number;
  '4xl': number;
  '5xl': number;
  '6xl': number;
}

export interface Fonts {
  primary: FontItem;
  heading: FontItem;
  body: FontItem;
  button: FontItem;
  menu: FontItem;
  premium: FontItem | null;
  scale: FontScale;
  weights: number[];
  fallbacks: string[];
}

interface FontCache {
  [key: string]: Fonts;
}

// Default Font Scale
const DEFAULT_FONT_SCALE: FontScale = {
  xs: 0.75,
  sm: 0.875,
  base: 1,
  lg: 1.125,
  xl: 1.25,
  '2xl': 1.5,
  '3xl': 1.875,
  '4xl': 2.25,
  '5xl': 3,
  '6xl': 3.75
};

// Default Fonts
const DEFAULT_FONTS: Fonts = {
  primary: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  heading: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  body: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  button: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  menu: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  premium: null,
  scale: DEFAULT_FONT_SCALE,
  weights: [300, 400, 500, 600, 700],
  fallbacks: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
};

let _fontCache: FontCache = {};

// Font Resolver Class
export class FontResolver {
  private _currentFonts: Fonts;

  constructor(initialTenant?: Tenant) {
    this._currentFonts = this.resolveFontsFromTenant(initialTenant);
  }

  // Helpers
  getDefaultFonts(): Fonts {
    return { 
      ...DEFAULT_FONTS,
      scale: { ...DEFAULT_FONTS.scale }
    };
  }

  resolveFonts(): Fonts {
    return {
      ...this._currentFonts,
      scale: { ...this._currentFonts.scale }
    };
  }

  resolveFontsFromTenant(tenant?: Tenant): Fonts {
    const cacheKey = `tenant:${tenant?.id || 'default'}`;

    if (_fontCache[cacheKey]) {
      return _fontCache[cacheKey];
    }

    // For now, just return default
    const fonts: Fonts = { ...this.getDefaultFonts() };

    _fontCache[cacheKey] = fonts;
    return fonts;
  }

  resolveFontsFromIdentity(identity?: Identity): Fonts {
    if (!identity) {
      return this.getDefaultFonts();
    }

    const cacheKey = `identity:${identity.tenant?.id || 'default'}`;

    if (_fontCache[cacheKey]) {
      return _fontCache[cacheKey];
    }

    const fonts: Fonts = { ...this.getDefaultFonts() };

    _fontCache[cacheKey] = fonts;
    return fonts;
  }

  resolveFontsFromConfiguration(config?: ConfigurationEngine): Fonts {
    return this.getDefaultFonts();
  }

  getPrimaryFont(): FontItem {
    return { ...this._currentFonts.primary };
  }

  getHeadingFont(): FontItem {
    return { ...this._currentFonts.heading };
  }

  getBodyFont(): FontItem {
    return { ...this._currentFonts.body };
  }

  getButtonFont(): FontItem {
    return { ...this._currentFonts.button };
  }

  getFontScale(): FontScale {
    return { ...this._currentFonts.scale };
  }

  createFontSnapshot(): Fonts {
    return {
      ...this._currentFonts,
      scale: { ...this._currentFonts.scale }
    };
  }

  clearFontCache(): void {
    _fontCache = {};
  }

  // Getters and Setters
  get currentFonts(): Fonts {
    return {
      ...this._currentFonts,
      scale: { ...this._currentFonts.scale }
    };
  }

  set currentFonts(fonts: Partial<Fonts>) {
    this._currentFonts = {
      ...DEFAULT_FONTS,
      ...fonts,
      scale: fonts.scale ? { ...DEFAULT_FONT_SCALE, ...fonts.scale } : DEFAULT_FONT_SCALE
    };
  }
}

// Hook-like factory
export function createFontResolver(initialTenant?: Tenant): FontResolver {
  return new FontResolver(initialTenant);
}
