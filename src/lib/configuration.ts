'use client';

import { createTheme, Theme } from './theme';
import { defaultNavigation, getNavigation, NavItem, NavigationContext } from './navigation';
import { defaultModules, getModules, isModuleActive, Module, ModuleKey } from './modules';
import { defaultFeatureFlags, getFeatureFlags, isFeatureFlagActive, FeatureFlag, FeatureFlagKey } from './featureFlags';
import { CompanySettings } from './types';

// Configuration Types
export interface GlobalConfig {
  appName: string;
  supportEmail: string;
  supportPhone: string;
  privacyPolicyUrl: string | null;
  termsUrl: string | null;
}

export interface CompanyConfig {
  id: string;
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
  activeModules: ModuleKey[];
  activeFeatureFlags: FeatureFlagKey[];
}

export interface ConfigEngineState {
  globalConfig: GlobalConfig;
  companyConfig: CompanyConfig | null;
  isLoading: boolean;
}

// Default Values
const DEFAULT_GLOBAL_CONFIG: GlobalConfig = {
  appName: 'Plataforma Prévisita',
  supportEmail: 'suporte@previsita.com',
  supportPhone: '(11) 99999-9999',
  privacyPolicyUrl: null,
  termsUrl: null
};

const DEFAULT_COMPANY_CONFIG: CompanyConfig = {
  id: '',
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
  customDomain: null,
  activeModules: [],
  activeFeatureFlags: []
};

// Configuration Engine Class
export class ConfigurationEngine {
  private _state: ConfigEngineState;
  private _companySettings: Partial<CompanySettings> | null;

  constructor(initialSettings?: Partial<CompanySettings>) {
    this._companySettings = initialSettings || null;
    this._state = {
      globalConfig: { ...DEFAULT_GLOBAL_CONFIG },
      companyConfig: initialSettings ? this._buildCompanyConfig(initialSettings) : null,
      isLoading: !initialSettings
    };
  }

  // Build Company Config from Settings
  private _buildCompanyConfig(settings: Partial<CompanySettings>): CompanyConfig {
    return {
      ...DEFAULT_COMPANY_CONFIG,
      id: settings.id || '',
      companyName: settings.company_name || null,
      logoUrl: settings.logo_url || null,
      faviconUrl: settings.favicon_url || null,
      primaryColor: settings.primary_color || null,
      secondaryColor: settings.secondary_color || null,
      whatsapp: settings.whatsapp || null,
      instagram: settings.instagram || null,
      facebook: settings.facebook || null,
      youtube: settings.youtube || null,
      website: settings.website || null,
      previsitaUrl: settings.previsita_url || null
    };
  }

  // Getters
  get state(): ConfigEngineState {
    return { ...this._state };
  }

  get theme(): Theme {
    const settings = this._companySettings;
    return createTheme(settings ?? undefined);
  }

  get navigation(): {
    superAdmin: NavItem[];
    empresa: NavItem[];
    cliente: NavItem[];
  } {
    return {
      superAdmin: getNavigation('super_admin'),
      empresa: getNavigation('empresa'),
      cliente: getNavigation('cliente')
    };
  }

  get modules(): Module[] {
    return getModules();
  }

  get featureFlags(): FeatureFlag[] {
    return getFeatureFlags();
  }

  // Methods
  setCompanySettings(settings: Partial<CompanySettings>): void {
    this._companySettings = settings;
    this._state = {
      ...this._state,
      companyConfig: this._buildCompanyConfig(settings),
      isLoading: false
    };
  }

  isModuleActive(key: ModuleKey): boolean {
    const activeModules = this._state.companyConfig?.activeModules || [];
    return isModuleActive(key, activeModules);
  }

  isFeatureFlagActive(key: FeatureFlagKey): boolean {
    const activeFlags = this._state.companyConfig?.activeFeatureFlags || [];
    return isFeatureFlagActive(key, activeFlags);
  }

  resetToDefaults(): void {
    this._companySettings = null;
    this._state = {
      globalConfig: { ...DEFAULT_GLOBAL_CONFIG },
      companyConfig: null,
      isLoading: true
    };
  }
}

// Hook-like factory
export function createConfigEngine(initialSettings?: Partial<CompanySettings>): ConfigurationEngine {
  return new ConfigurationEngine(initialSettings);
}
