'use client';

import { Tenant } from './tenant';

// Settings Adapter Types
export interface RawSettings {
  company?: Record<string, any>;
  tenant?: Record<string, any>;
  identity?: Record<string, any>;
  brandAssets?: Record<string, any>;
  colors?: Record<string, any>;
  fonts?: Record<string, any>;
  spacing?: Record<string, any>;
  motion?: Record<string, any>;
  layout?: Record<string, any>;
  domain?: Record<string, any>;
  modules?: Record<string, any>;
  featureFlags?: Record<string, any>;
  permissions?: Record<string, any>;
  access?: Record<string, any>;
  plans?: Record<string, any>;
  billing?: Record<string, any>;
  subscription?: Record<string, any>;
  usageLimits?: Record<string, any>;
  providers?: Record<string, any>;
}

export interface SettingsAdapter {
  rawSettings: RawSettings;
  normalizedSettings: RawSettings;
  adaptedSettings: Record<string, any>;
}

interface SettingsAdapterCache {
  [key: string]: SettingsAdapter;
}

// Default Settings Adapter Config
const DEFAULT_SETTINGS_ADAPTER: SettingsAdapter = {
  rawSettings: {},
  normalizedSettings: {},
  adaptedSettings: {}
};

let _settingsAdapterCache: SettingsAdapterCache = {};

// White Label Settings Adapter Class
export class WhiteLabelSettingsAdapter {
  private _currentSettingsAdapter: SettingsAdapter;

  constructor(initialTenant?: Tenant) {
    this._currentSettingsAdapter = this.getDefaultSettingsAdapter();
  }

  // Helpers
  getDefaultSettingsAdapter(): SettingsAdapter {
    return this._getDeepCopy(DEFAULT_SETTINGS_ADAPTER);
  }

  normalizeSettings(rawSettings?: RawSettings): RawSettings {
    const normalized: RawSettings = {
      ...(rawSettings || {})
    };
    return normalized;
  }

  adaptSettingsToRuntime(rawSettings?: RawSettings): Record<string, any> {
    return {};
  }

  adaptSettingsToIdentity(rawSettings?: RawSettings): Record<string, any> {
    return {};
  }

  adaptSettingsToTheme(rawSettings?: RawSettings): Record<string, any> {
    return {};
  }

  adaptSettingsToBrandAssets(rawSettings?: RawSettings): Record<string, any> {
    return {};
  }

  adaptSettingsToModules(rawSettings?: RawSettings): Record<string, any> {
    return {};
  }

  adaptSettingsToFeatures(rawSettings?: RawSettings): Record<string, any> {
    return {};
  }

  adaptSettingsToAccess(rawSettings?: RawSettings): Record<string, any> {
    return {};
  }

  createSettingsAdapterSnapshot(): SettingsAdapter {
    return this._getDeepCopy(this._currentSettingsAdapter);
  }

  clearSettingsAdapterCache(): void {
    _settingsAdapterCache = {};
  }

  // Helper to deep copy
  private _getDeepCopy(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }

  // Getters and Setters
  get currentSettingsAdapter(): SettingsAdapter {
    return this._getDeepCopy(this._currentSettingsAdapter);
  }

  set currentSettingsAdapter(adapter: Partial<SettingsAdapter>) {
    this._currentSettingsAdapter = {
      ...DEFAULT_SETTINGS_ADAPTER,
      ...adapter
    };
  }
}

// Hook-like factory
export function createWhiteLabelSettingsAdapter(initialTenant?: Tenant): WhiteLabelSettingsAdapter {
  return new WhiteLabelSettingsAdapter(initialTenant);
}
