'use client';

import { WhiteLabelResolver, createWhiteLabelResolver, WhiteLabel } from './whiteLabel';
import { Tenant } from './tenant';
import { Theme } from './theme';
import { ModuleKey } from './modules';
import { FeatureFlagKey } from './featureFlags';
import { NavItem } from './navigation';

// Identity Types
export interface BrandAssets {
  logoUrl: string | null;
  faviconUrl: string | null;
  bannerUrl: string | null;
  socialImageUrl: string | null;
}

export interface SocialLinks {
  whatsapp: string | null;
  instagram: string | null;
  facebook: string | null;
  youtube: string | null;
  website: string | null;
}

export interface CompanyInfo {
  companyName: string | null;
  slogan: string | null;
  previsitaUrl: string | null;
  customDomain: string | null;
}

export interface Identity {
  tenant: Tenant | null;
  whiteLabel: WhiteLabel;
  companyInfo: CompanyInfo;
  brandAssets: BrandAssets;
  socialLinks: SocialLinks;
  theme: Theme;
  activeModules: ModuleKey[];
  activeFeatures: FeatureFlagKey[];
  navigation: {
    superAdmin: NavItem[];
    empresa: NavItem[];
    cliente: NavItem[];
  };
}

interface IdentityCache {
  [key: string]: Identity;
}

// Default Identity
const DEFAULT_IDENTITY: Identity = {
  tenant: null,
  whiteLabel: createWhiteLabelResolver().currentWhiteLabel,
  companyInfo: {
    companyName: null,
    slogan: null,
    previsitaUrl: null,
    customDomain: null
  },
  brandAssets: {
    logoUrl: null,
    faviconUrl: null,
    bannerUrl: null,
    socialImageUrl: null
  },
  socialLinks: {
    whatsapp: null,
    instagram: null,
    facebook: null,
    youtube: null,
    website: null
  },
  theme: createWhiteLabelResolver().currentWhiteLabel.theme,
  activeModules: [],
  activeFeatures: [],
  navigation: createWhiteLabelResolver().currentWhiteLabel.navigation
};

let _identityCache: IdentityCache = {};

// Identity Resolver Class
export class IdentityResolver {
  private _currentIdentity: Identity;
  private _whiteLabelResolver: WhiteLabelResolver;

  constructor(initialTenant?: Tenant) {
    this._whiteLabelResolver = createWhiteLabelResolver(initialTenant);
    this._currentIdentity = this.resolveIdentityFromTenant(initialTenant);
  }

  // Helpers
  getIdentity(): Identity {
    return { ...this._currentIdentity };
  }

  resolveIdentity(): Identity {
    return this._currentIdentity;
  }

  resolveIdentityFromTenant(tenant?: Tenant): Identity {
    const finalTenant = tenant || this._whiteLabelResolver.currentWhiteLabel.tenant || createWhiteLabelResolver().currentWhiteLabel.tenant;
    const cacheKey = `tenant:${finalTenant?.id || 'default'}`;

    if (_identityCache[cacheKey]) {
      return _identityCache[cacheKey];
    }

    const wl = this._whiteLabelResolver.resolveWhiteLabelFromTenant(finalTenant);

    const identity: Identity = {
      tenant: finalTenant,
      whiteLabel: wl,
      companyInfo: {
        companyName: wl.brand.companyName,
        slogan: null,
        previsitaUrl: wl.brand.previsitaUrl,
        customDomain: wl.brand.customDomain
      },
      brandAssets: {
        logoUrl: wl.brand.logoUrl,
        faviconUrl: wl.brand.faviconUrl,
        bannerUrl: null,
        socialImageUrl: null
      },
      socialLinks: {
        whatsapp: wl.brand.whatsapp,
        instagram: wl.brand.instagram,
        facebook: wl.brand.facebook,
        youtube: wl.brand.youtube,
        website: wl.brand.website
      },
      theme: wl.theme,
      activeModules: wl.activeModules,
      activeFeatures: wl.activeFeatures,
      navigation: wl.navigation
    };

    _identityCache[cacheKey] = identity;
    return identity;
  }

  resolveIdentityFromConfiguration(config: WhiteLabelResolver): Identity {
    return {
      ...this._currentIdentity,
      whiteLabel: config.currentWhiteLabel,
      theme: config.currentWhiteLabel.theme
    };
  }

  getBrand(): CompanyInfo & BrandAssets & SocialLinks {
    return {
      ...this._currentIdentity.companyInfo,
      ...this._currentIdentity.brandAssets,
      ...this._currentIdentity.socialLinks
    };
  }

  getTheme(): Theme {
    return { ...this._currentIdentity.theme };
  }

  getAssets(): BrandAssets {
    return { ...this._currentIdentity.brandAssets };
  }

  getSocialLinks(): SocialLinks {
    return { ...this._currentIdentity.socialLinks };
  }

  createIdentitySnapshot(): Identity {
    return { ...this._currentIdentity };
  }

  clearIdentityCache(): void {
    _identityCache = {};
  }

  // Getters and Setters
  get currentIdentity(): Identity {
    return { ...this._currentIdentity };
  }

  set currentIdentity(identity: Partial<Identity>) {
    this._currentIdentity = { ...DEFAULT_IDENTITY, ...identity };
  }
}

// Hook-like factory
export function createIdentityResolver(initialTenant?: Tenant): IdentityResolver {
  return new IdentityResolver(initialTenant);
}
