'use client';

import { Tenant } from './tenant';
import { Identity } from './identity';
import { ConfigurationEngine } from './configuration';

// Brand Assets Types
export interface BrandAssetItem {
  url: string | null;
  alt: string | null;
  width: number | null;
  height: number | null;
  mimeType: string | null;
}

export interface BrandAssets {
  logo: BrandAssetItem;
  logoLight: BrandAssetItem;
  logoDark: BrandAssetItem;
  favicon: BrandAssetItem;
  banner: BrandAssetItem;
  openGraph: BrandAssetItem;
  shareImage: BrandAssetItem;
  loginImage: BrandAssetItem;
  signupImage: BrandAssetItem;
  splashImage: BrandAssetItem;
  icons: Record<string, BrandAssetItem>;
}

interface BrandAssetsCache {
  [key: string]: BrandAssets;
}

// Default Brand Assets
export const DEFAULT_BRAND_ASSETS: BrandAssets = {
  logo: { url: null, alt: null, width: null, height: null, mimeType: null },
  logoLight: { url: null, alt: null, width: null, height: null, mimeType: null },
  logoDark: { url: null, alt: null, width: null, height: null, mimeType: null },
  favicon: { url: null, alt: null, width: null, height: null, mimeType: null },
  banner: { url: null, alt: null, width: null, height: null, mimeType: null },
  openGraph: { url: null, alt: null, width: null, height: null, mimeType: null },
  shareImage: { url: null, alt: null, width: null, height: null, mimeType: null },
  loginImage: { url: null, alt: null, width: null, height: null, mimeType: null },
  signupImage: { url: null, alt: null, width: null, height: null, mimeType: null },
  splashImage: { url: null, alt: null, width: null, height: null, mimeType: null },
  icons: {}
};

let _brandAssetsCache: BrandAssetsCache = {};

// Brand Assets Resolver Class
export class BrandAssetsResolver {
  private _currentBrandAssets: BrandAssets;

  constructor(initialTenant?: Tenant) {
    this._currentBrandAssets = this.resolveBrandAssetsFromTenant(initialTenant);
  }

  // Helpers
  getDefaultBrandAssets(): BrandAssets {
    return { ...DEFAULT_BRAND_ASSETS };
  }

  resolveBrandAssets(): BrandAssets {
    return { ...this._currentBrandAssets };
  }

  resolveBrandAssetsFromTenant(tenant?: Tenant): BrandAssets {
    const cacheKey = `tenant:${tenant?.id || 'default'}`;

    if (_brandAssetsCache[cacheKey]) {
      return _brandAssetsCache[cacheKey];
    }

    // For now, just return default with fallback from tenant settings if available
    const brandAssets: BrandAssets = {
      ...DEFAULT_BRAND_ASSETS,
      logo: {
        ...DEFAULT_BRAND_ASSETS.logo,
        url: tenant?.settings.logo_url || null
      },
      favicon: {
        ...DEFAULT_BRAND_ASSETS.favicon,
        url: tenant?.settings.favicon_url || null
      }
    };

    _brandAssetsCache[cacheKey] = brandAssets;
    return brandAssets;
  }

  resolveBrandAssetsFromIdentity(identity?: Identity): BrandAssets {
    if (!identity) {
      return this.getDefaultBrandAssets();
    }

    const cacheKey = `identity:${identity.tenant?.id || 'default'}`;

    if (_brandAssetsCache[cacheKey]) {
      return _brandAssetsCache[cacheKey];
    }

    const brandAssets: BrandAssets = {
      ...DEFAULT_BRAND_ASSETS,
      logo: {
        ...DEFAULT_BRAND_ASSETS.logo,
        url: identity.brandAssets.logoUrl || null
      },
      favicon: {
        ...DEFAULT_BRAND_ASSETS.favicon,
        url: identity.brandAssets.faviconUrl || null
      },
      banner: {
        ...DEFAULT_BRAND_ASSETS.banner,
        url: identity.brandAssets.bannerUrl || null
      },
      shareImage: {
        ...DEFAULT_BRAND_ASSETS.shareImage,
        url: identity.brandAssets.socialImageUrl || null
      }
    };

    _brandAssetsCache[cacheKey] = brandAssets;
    return brandAssets;
  }

  resolveBrandAssetsFromConfiguration(config?: ConfigurationEngine): BrandAssets {
    return this.getDefaultBrandAssets();
  }

  getLogo(preference: 'default' | 'light' | 'dark' = 'default'): BrandAssetItem {
    if (preference === 'light' && this._currentBrandAssets.logoLight.url) {
      return { ...this._currentBrandAssets.logoLight };
    }
    if (preference === 'dark' && this._currentBrandAssets.logoDark.url) {
      return { ...this._currentBrandAssets.logoDark };
    }
    return { ...this._currentBrandAssets.logo };
  }

  getFavicon(): BrandAssetItem {
    return { ...this._currentBrandAssets.favicon };
  }

  getBanner(): BrandAssetItem {
    return { ...this._currentBrandAssets.banner };
  }

  getOpenGraphImage(): BrandAssetItem {
    return { ...this._currentBrandAssets.openGraph };
  }

  getShareImage(): BrandAssetItem {
    return { ...this._currentBrandAssets.shareImage };
  }

  createBrandAssetsSnapshot(): BrandAssets {
    return { ...this._currentBrandAssets };
  }

  clearBrandAssetsCache(): void {
    _brandAssetsCache = {};
  }

  // Getters and Setters
  get currentBrandAssets(): BrandAssets {
    return { ...this._currentBrandAssets };
  }

  set currentBrandAssets(assets: Partial<BrandAssets>) {
    this._currentBrandAssets = { ...DEFAULT_BRAND_ASSETS, ...assets };
  }
}

// Hook-like factory
export function createBrandAssetsResolver(initialTenant?: Tenant): BrandAssetsResolver {
  return new BrandAssetsResolver(initialTenant);
}
