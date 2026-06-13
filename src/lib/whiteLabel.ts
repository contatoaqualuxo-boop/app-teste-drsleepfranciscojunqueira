'use client';

import { Tenant, createTenantEngine } from './tenant';
import { ConfigurationEngine, createConfigEngine } from './configuration';
import { Theme } from './theme';
import { ModuleKey, defaultModules } from './modules';
import { FeatureFlagKey, defaultFeatureFlags } from './featureFlags';
import { UserPermissions, createPermissionEngine } from './permissions';
import { AccessContext, createAccessEngine } from './access';
import { NavItem, getNavigation } from './navigation';

// White Label Types
export interface WhiteLabelBrand {
  companyName: string | null;
  logoUrl: string | null;
  faviconUrl: string | null;
  primaryColor: string | null;
  secondaryColor: string | null;
  whatsapp: string | null;
  instagram: string | null;
  facebook: string | null;
  youtube: string | null;
  website: string | null;
  previsitaUrl: string | null;
  customDomain: string | null;
}

export interface WhiteLabel {
  tenant: Tenant | null;
  configEngine: ConfigurationEngine;
  brand: WhiteLabelBrand;
  theme: Theme;
  activeModules: ModuleKey[];
  activeFeatures: FeatureFlagKey[];
  permissions: UserPermissions;
  access: AccessContext;
  navigation: {
    superAdmin: NavItem[];
    empresa: NavItem[];
    cliente: NavItem[];
  };
}

interface WhiteLabelCache {
  [key: string]: WhiteLabel;
}

// Default White Label
const DEFAULT_WHITE_LABEL: WhiteLabel = {
  tenant: null,
  configEngine: createConfigEngine(),
  brand: {
    companyName: null,
    logoUrl: null,
    faviconUrl: null,
    primaryColor: null,
    secondaryColor: null,
    whatsapp: null,
    instagram: null,
    facebook: null,
    youtube: null,
    website: null,
    previsitaUrl: null,
    customDomain: null
  },
  theme: createConfigEngine().theme,
  activeModules: [],
  activeFeatures: [],
  permissions: {
    roles: [],
    modulePermissions: [],
    featurePermissions: [],
    customPermissions: []
  },
  access: {
    tenant: null,
    permissions: {
      roles: [],
      modulePermissions: [],
      featurePermissions: [],
      customPermissions: []
    },
    activeModules: [],
    activeFeatures: [],
    navigation: {
      superAdmin: getNavigation('superAdmin'),
      empresa: getNavigation('empresa'),
      cliente: getNavigation('cliente')
    }
  },
  navigation: {
    superAdmin: getNavigation('superAdmin'),
    empresa: getNavigation('empresa'),
    cliente: getNavigation('cliente')
  }
};

let _whiteLabelCache: WhiteLabelCache = {};

// White Label Resolver Class
export class WhiteLabelResolver {
  private _currentWhiteLabel: WhiteLabel;
  private _tenantEngine: ReturnType<typeof createTenantEngine>;
  private _configEngine: ConfigurationEngine;
  private _permissionEngine: ReturnType<typeof createPermissionEngine>;
  private _accessEngine: ReturnType<typeof createAccessEngine>;

  constructor(initialTenant?: Tenant) {
    this._tenantEngine = createTenantEngine(initialTenant);
    this._configEngine = createConfigEngine(initialTenant?.settings);
    this._permissionEngine = createPermissionEngine();
    this._accessEngine = createAccessEngine();
    this._currentWhiteLabel = this.resolveWhiteLabelFromTenant(initialTenant);
  }

  // Helpers
  getDefaultWhiteLabel(): WhiteLabel {
    return { ...DEFAULT_WHITE_LABEL };
  }

  resolveWhiteLabel(): WhiteLabel {
    return this._currentWhiteLabel;
  }

  resolveWhiteLabelFromTenant(tenant?: Tenant): WhiteLabel {
    const finalTenant = tenant || this._tenantEngine.getDefaultTenant();
    const cacheKey = `tenant:${finalTenant.id}`;

    if (_whiteLabelCache[cacheKey]) {
      return _whiteLabelCache[cacheKey];
    }

    const config = createConfigEngine(finalTenant.settings);
    const whiteLabel: WhiteLabel = {
      tenant: finalTenant,
      configEngine: config,
      brand: {
        companyName: finalTenant.settings.company_name || null,
        logoUrl: finalTenant.settings.logo_url || null,
        faviconUrl: finalTenant.settings.favicon_url || null,
        primaryColor: finalTenant.settings.primary_color || null,
        secondaryColor: finalTenant.settings.secondary_color || null,
        whatsapp: finalTenant.settings.whatsapp || null,
        instagram: finalTenant.settings.instagram || null,
        facebook: finalTenant.settings.facebook || null,
        youtube: finalTenant.settings.youtube || null,
        website: finalTenant.settings.website || null,
        previsitaUrl: finalTenant.settings.previsita_url || null,
        customDomain: finalTenant.customDomain || null
      },
      theme: config.theme,
      activeModules: [],
      activeFeatures: [],
      permissions: this._permissionEngine.permissions,
      access: this._accessEngine.accessContext,
      navigation: {
        superAdmin: getNavigation('superAdmin'),
        empresa: getNavigation('empresa'),
        cliente: getNavigation('cliente')
      }
    };

    _whiteLabelCache[cacheKey] = whiteLabel;
    return whiteLabel;
  }

  resolveWhiteLabelFromConfiguration(config: ConfigurationEngine): WhiteLabel {
    return {
      ...this._currentWhiteLabel,
      configEngine: config,
      theme: config.theme
    };
  }

  getWhiteLabelBrand(): WhiteLabelBrand {
    return { ...this._currentWhiteLabel.brand };
  }

  getWhiteLabelTheme(): Theme {
    return { ...this._currentWhiteLabel.theme };
  }

  getWhiteLabelModules(): ModuleKey[] {
    return [...this._currentWhiteLabel.activeModules];
  }

  getWhiteLabelFeatures(): FeatureFlagKey[] {
    return [...this._currentWhiteLabel.activeFeatures];
  }

  getWhiteLabelNavigation(): WhiteLabel['navigation'] {
    return { ...this._currentWhiteLabel.navigation };
  }

  getWhiteLabelAccess(): AccessContext {
    return { ...this._currentWhiteLabel.access };
  }

  createWhiteLabelSnapshot(): WhiteLabel {
    return { ...this._currentWhiteLabel };
  }

  // Getters and Setters
  get currentWhiteLabel(): WhiteLabel {
    return { ...this._currentWhiteLabel };
  }

  set currentWhiteLabel(wl: Partial<WhiteLabel>) {
    this._currentWhiteLabel = { ...DEFAULT_WHITE_LABEL, ...wl };
  }
}

// Hook-like factory
export function createWhiteLabelResolver(initialTenant?: Tenant): WhiteLabelResolver {
  return new WhiteLabelResolver(initialTenant);
}
