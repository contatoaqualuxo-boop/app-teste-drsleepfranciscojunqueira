'use client';

import { Tenant } from './tenant';
import { Registry } from './registry';
import { Providers, DEFAULT_PROVIDERS } from './providers';
import { Subscription } from './subscription';
import { UsageLimits } from './usageLimits';
import { SupabaseSettings } from './supabaseSettingsConnector';
import { Identity, IdentityResolver, createIdentityResolver } from './identity';
import { Theme, createTheme } from './theme';
import { BrandAssets, BrandAssetsResolver, createBrandAssetsResolver } from './brandAssets';
import { DesignTokens, DesignTokensEngine, createDesignTokensEngine } from './designTokens';
import { Motion, MotionResolver, createMotionResolver } from './motion';
import { Fonts, FontResolver, createFontResolver } from './fonts';

// Runtime Types
export interface RuntimeIdentity {
  name: string;
  slug: string;
  logo: string;
  logoDark: string;
  logoLight: string;
}

export interface RuntimeTheme {
  mode: 'light' | 'dark' | 'system';
  colors: Record<string, any>;
  fonts: Record<string, any>;
  spacing: Record<string, any>;
  motion: Record<string, any>;
  layout: Record<string, any>;
}

export interface RuntimeBrandAssets {
  logo: { url: string | null; alt: string | null; width: number | null; height: number | null; mimeType: string | null };
  logoLight: { url: string | null; alt: string | null; width: number | null; height: number | null; mimeType: string | null };
  logoDark: { url: string | null; alt: string | null; width: number | null; height: number | null; mimeType: string | null };
  favicon: { url: string | null; alt: string | null; width: number | null; height: number | null; mimeType: string | null };
  banner: { url: string | null; alt: string | null; width: number | null; height: number | null; mimeType: string | null };
  openGraph: { url: string | null; alt: string | null; width: number | null; height: number | null; mimeType: string | null };
  shareImage: { url: string | null; alt: string | null; width: number | null; height: number | null; mimeType: string | null };
  loginImage: { url: string | null; alt: string | null; width: number | null; height: number | null; mimeType: string | null };
  signupImage: { url: string | null; alt: string | null; width: number | null; height: number | null; mimeType: string | null };
  splashImage: { url: string | null; alt: string | null; width: number | null; height: number | null; mimeType: string | null };
  icons: Record<string, { url: string | null; alt: string | null; width: number | null; height: number | null; mimeType: string | null }>;
}

export interface RuntimeDesignTokens {
  colors: {
    primary: Record<string, any>;
    secondary: Record<string, any>;
    neutral: Record<string, any>;
    success: Record<string, any>;
    warning: Record<string, any>;
    error: Record<string, any>;
    info: Record<string, any>;
    background: Record<string, any>;
    text: Record<string, any>;
    border: Record<string, any>;
  };
  typography: Record<string, any>;
  spacing: Record<string, any>;
  borders: Record<string, any>;
  radius: Record<string, any>;
  shadows: Record<string, any>;
  opacity: Record<string, any>;
  zIndex: Record<string, any>;
  breakpoints: Record<string, any>;
  motion: Record<string, any>;
  elevation: Record<string, any>;
  containers: Record<string, any>;
}

export interface RuntimeMotion {
  duration: Record<string, any>;
  easing: Record<string, any>;
  fade: Record<string, any>;
  slide: Record<string, any>;
  scale: Record<string, any>;
  hover: Record<string, any>;
  press: Record<string, any>;
  entrance: Record<string, any>;
  exit: Record<string, any>;
  microinteractions: Record<string, any>;
  reducedMotion: boolean;
  premiumMotion: boolean;
}

export interface RuntimeFonts {
  primary: Record<string, any>;
  heading: Record<string, any>;
  body: Record<string, any>;
  button: Record<string, any>;
  menu: Record<string, any>;
  premium: Record<string, any> | null;
  scale: Record<string, any>;
  weights: any[];
  fallbacks: string[];
}

export interface RuntimeAccess {
  isAuthenticated: boolean;
  permissions: string[];
  roles: string[];
}

export interface RuntimePlan {
  id: string;
  name: string;
  features: string[];
}

export interface Runtime {
  tenant: Tenant | null;
  identity: RuntimeIdentity;
  theme: RuntimeTheme;
  brandAssets: RuntimeBrandAssets;
  designTokens: RuntimeDesignTokens;
  motion: RuntimeMotion;
  fonts: RuntimeFonts;
  domain: Record<string, any>;
  plan: RuntimePlan;
  subscription: Subscription | null;
  limits: UsageLimits;
  access: RuntimeAccess;
  modules: string[];
  features: string[];
  providers: Providers;
  registry: Registry;
}

interface RuntimeCache {
  [key: string]: Runtime;
}

// Default Runtime Config
const DEFAULT_RUNTIME: Runtime = {
  tenant: null,
  identity: {
    name: 'Plataforma Prévisita',
    slug: 'previsita',
    logo: '',
    logoDark: '',
    logoLight: ''
  },
  theme: {
    mode: 'light',
    colors: {},
    fonts: {},
    spacing: {},
    motion: {},
    layout: {}
  },
  brandAssets: {
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
  },
  designTokens: {
    colors: {
      primary: {},
      secondary: {},
      neutral: {},
      success: {},
      warning: {},
      error: {},
      info: {},
      background: {},
      text: {},
      border: {}
    },
    typography: {},
    spacing: {},
    borders: {},
    radius: {},
    shadows: {},
    opacity: {},
    zIndex: {},
    breakpoints: {},
    motion: {},
    elevation: {},
    containers: {}
  },
  motion: {
    duration: {},
    easing: {},
    fade: {},
    slide: {},
    scale: {},
    hover: {},
    press: {},
    entrance: {},
    exit: {},
    microinteractions: {},
    reducedMotion: false,
    premiumMotion: false
  },
  fonts: {
    primary: {},
    heading: {},
    body: {},
    button: {},
    menu: {},
    premium: null,
    scale: {},
    weights: [],
    fallbacks: []
  },
  domain: {},
  plan: {
    id: 'starter',
    name: 'Starter',
    features: []
  },
  subscription: null,
  limits: {
    users: null,
    clients: null,
    companies: null,
    stores: null,
    products: null,
    categories: null,
    documents: null,
    warranties: null,
    timeline: null,
    storage: null,
    modules: null,
    featureFlags: null,
    integrations: null,
    notifications: null,
    automations: null,
    partners: null,
    ai: null
  },
  access: {
    isAuthenticated: false,
    permissions: [],
    roles: []
  },
  modules: [],
  features: [],
  providers: { ...DEFAULT_PROVIDERS },
  registry: {}
};

let _runtimeCache: RuntimeCache = {};
let _runtimeIdentityCache: Record<string, RuntimeIdentity> = {};
let _runtimeThemeCache: Record<string, RuntimeTheme> = {};
let _runtimeBrandAssetsCache: Record<string, RuntimeBrandAssets> = {};
let _runtimeDesignTokensCache: Record<string, RuntimeDesignTokens> = {};
let _runtimeMotionCache: Record<string, RuntimeMotion> = {};
let _runtimeFontsCache: Record<string, RuntimeFonts> = {};

// White Label Runtime Class
export class WhiteLabelRuntime {
  private _currentRuntime: Runtime;
  private _identityResolver: IdentityResolver;
  private _brandAssetsResolver: BrandAssetsResolver;
  private _designTokensEngine: DesignTokensEngine;
  private _motionResolver: MotionResolver;
  private _fontResolver: FontResolver;

  constructor(initialTenant?: Tenant) {
    this._identityResolver = createIdentityResolver(initialTenant);
    this._brandAssetsResolver = createBrandAssetsResolver(initialTenant);
    this._designTokensEngine = createDesignTokensEngine(initialTenant);
    this._motionResolver = createMotionResolver(initialTenant);
    this._fontResolver = createFontResolver(initialTenant);
    this._currentRuntime = this.resolveRuntimeFromTenant(initialTenant);
  }

  // Helpers
  getDefaultRuntime(): Runtime {
    return this._getDeepCopy(DEFAULT_RUNTIME);
  }

  resolveRuntime(): Runtime {
    return this._getDeepCopy(this._currentRuntime);
  }

  resolveRuntimeFromTenant(tenant?: Tenant): Runtime {
    const cacheKey = `tenant:${tenant?.id || 'default'}`;

    if (_runtimeCache[cacheKey]) {
      return this._getDeepCopy(_runtimeCache[cacheKey]);
    }

    const runtime: Runtime = { ...this.getDefaultRuntime(), tenant: tenant || null };
    _runtimeCache[cacheKey] = runtime;
    return runtime;
  }

  resolveRuntimeFromConfiguration(config?: any): Runtime {
    const runtime: Runtime = this.getDefaultRuntime();
    return runtime;
  }

  resolveRuntimeFromSettings(settings?: SupabaseSettings): Runtime {
    const runtime: Runtime = this.getDefaultRuntime();

    // Safe merging with fallback
    if (settings?.identity) {
      runtime.identity = {
        ...runtime.identity,
        ...settings.identity
      };
    }

    if (settings?.theme) {
      runtime.theme = {
        ...runtime.theme,
        ...settings.theme
      };
    }

    if (settings?.plan) {
      runtime.plan = {
        ...runtime.plan,
        ...settings.plan
      };
    }

    if (settings?.provider) {
      runtime.providers = {
        ...runtime.providers,
        ...settings.provider
      };
    }

    return runtime;
  }

  getRuntimeIdentity(): RuntimeIdentity {
    return this._currentRuntime.identity;
  }

  getRuntimeTheme(): RuntimeTheme {
    return this._currentRuntime.theme;
  }

  getRuntimeAccess(): RuntimeAccess {
    return this._currentRuntime.access;
  }

  getRuntimePlan(): RuntimePlan {
    return this._currentRuntime.plan;
  }

  getRuntimeSubscription(): Subscription | null {
    return this._currentRuntime.subscription;
  }

  getRuntimeProviders(): Providers {
    return this._currentRuntime.providers;
  }

  // Identity Integration Helpers
  resolveRuntimeIdentity(tenant?: Tenant): RuntimeIdentity {
    const cacheKey = `tenant:${tenant?.id || 'default'}`;

    if (_runtimeIdentityCache[cacheKey]) {
      return this._getDeepCopy(_runtimeIdentityCache[cacheKey]);
    }

    const identity = this._identityResolver.resolveIdentityFromTenant(tenant);
    const runtimeIdentity: RuntimeIdentity = {
      name: identity.companyInfo.companyName || 'Plataforma Prévisita',
      slug: 'previsita',
      logo: identity.brandAssets.logoUrl || '',
      logoDark: '',
      logoLight: ''
    };

    _runtimeIdentityCache[cacheKey] = runtimeIdentity;
    return this._getDeepCopy(runtimeIdentity);
  }

  resolveIdentityFromRuntime(runtimeIdentity?: RuntimeIdentity): Partial<Identity> {
    return {
      companyInfo: {
        companyName: runtimeIdentity?.name || null,
        slogan: null,
        previsitaUrl: null,
        customDomain: null
      },
      brandAssets: {
        logoUrl: runtimeIdentity?.logo || null,
        faviconUrl: null,
        bannerUrl: null,
        socialImageUrl: null
      }
    };
  }

  hasRuntimeIdentity(): boolean {
    return !!this._currentRuntime.identity.name && this._currentRuntime.identity.name !== 'Plataforma Prévisita';
  }

  createRuntimeIdentitySnapshot(): RuntimeIdentity {
    return this._getDeepCopy(this._currentRuntime.identity);
  }

  clearRuntimeIdentityCache(): void {
    _runtimeIdentityCache = {};
  }

  // Theme Integration Helpers
  resolveRuntimeTheme(tenant?: Tenant): RuntimeTheme {
    const cacheKey = `tenant:${tenant?.id || 'default'}`;

    if (_runtimeThemeCache[cacheKey]) {
      return this._getDeepCopy(_runtimeThemeCache[cacheKey]);
    }

    const theme = this._identityResolver.getTheme();
    const runtimeTheme: RuntimeTheme = {
      mode: 'light',
      colors: {
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        accent: theme.colors.accent,
        background: theme.colors.background,
        surface: theme.colors.surface,
        text: theme.colors.text,
        textSecondary: theme.colors.textSecondary,
        border: theme.colors.border
      },
      fonts: {},
      spacing: {},
      motion: {},
      layout: {}
    };

    _runtimeThemeCache[cacheKey] = runtimeTheme;
    return this._getDeepCopy(runtimeTheme);
  }

  resolveThemeFromRuntime(runtimeTheme?: RuntimeTheme): Partial<Theme> {
    return {
      colors: {
        primary: runtimeTheme?.colors?.primary || '#6366f1',
        secondary: runtimeTheme?.colors?.secondary || '#8b5cf6',
        accent: runtimeTheme?.colors?.accent || '#f59e0b',
        background: runtimeTheme?.colors?.background || '#020617',
        surface: runtimeTheme?.colors?.surface || '#020617',
        text: runtimeTheme?.colors?.text || '#ffffff',
        textSecondary: runtimeTheme?.colors?.textSecondary || '#9ca3af',
        border: runtimeTheme?.colors?.border || '#1f2937'
      }
    };
  }

  hasRuntimeTheme(): boolean {
    return !!this._currentRuntime.theme.colors.primary && this._currentRuntime.theme.colors.primary !== '#6366f1';
  }

  createRuntimeThemeSnapshot(): RuntimeTheme {
    return this._getDeepCopy(this._currentRuntime.theme);
  }

  clearRuntimeThemeCache(): void {
    _runtimeThemeCache = {};
  }

  getRuntimeBrandAssets(): RuntimeBrandAssets {
    return this._currentRuntime.brandAssets;
  }

  // Brand Assets Integration Helpers
  resolveRuntimeBrandAssets(tenant?: Tenant): RuntimeBrandAssets {
    const cacheKey = `tenant:${tenant?.id || 'default'}`;

    if (_runtimeBrandAssetsCache[cacheKey]) {
      return this._getDeepCopy(_runtimeBrandAssetsCache[cacheKey]);
    }

    const brandAssets = this._brandAssetsResolver.resolveBrandAssetsFromTenant(tenant);
    const runtimeBrandAssets: RuntimeBrandAssets = {
      logo: { ...brandAssets.logo },
      logoLight: { ...brandAssets.logoLight },
      logoDark: { ...brandAssets.logoDark },
      favicon: { ...brandAssets.favicon },
      banner: { ...brandAssets.banner },
      openGraph: { ...brandAssets.openGraph },
      shareImage: { ...brandAssets.shareImage },
      loginImage: { ...brandAssets.loginImage },
      signupImage: { ...brandAssets.signupImage },
      splashImage: { ...brandAssets.splashImage },
      icons: { ...brandAssets.icons }
    };

    _runtimeBrandAssetsCache[cacheKey] = runtimeBrandAssets;
    return this._getDeepCopy(runtimeBrandAssets);
  }

  resolveBrandAssetsFromRuntime(runtimeBrandAssets?: RuntimeBrandAssets): Partial<BrandAssets> {
    return {
      logo: {
        url: runtimeBrandAssets?.logo?.url || null,
        alt: runtimeBrandAssets?.logo?.alt || null,
        width: runtimeBrandAssets?.logo?.width || null,
        height: runtimeBrandAssets?.logo?.height || null,
        mimeType: runtimeBrandAssets?.logo?.mimeType || null
      },
      logoLight: {
        url: runtimeBrandAssets?.logoLight?.url || null,
        alt: runtimeBrandAssets?.logoLight?.alt || null,
        width: runtimeBrandAssets?.logoLight?.width || null,
        height: runtimeBrandAssets?.logoLight?.height || null,
        mimeType: runtimeBrandAssets?.logoLight?.mimeType || null
      },
      logoDark: {
        url: runtimeBrandAssets?.logoDark?.url || null,
        alt: runtimeBrandAssets?.logoDark?.alt || null,
        width: runtimeBrandAssets?.logoDark?.width || null,
        height: runtimeBrandAssets?.logoDark?.height || null,
        mimeType: runtimeBrandAssets?.logoDark?.mimeType || null
      },
      favicon: {
        url: runtimeBrandAssets?.favicon?.url || null,
        alt: runtimeBrandAssets?.favicon?.alt || null,
        width: runtimeBrandAssets?.favicon?.width || null,
        height: runtimeBrandAssets?.favicon?.height || null,
        mimeType: runtimeBrandAssets?.favicon?.mimeType || null
      },
      banner: {
        url: runtimeBrandAssets?.banner?.url || null,
        alt: runtimeBrandAssets?.banner?.alt || null,
        width: runtimeBrandAssets?.banner?.width || null,
        height: runtimeBrandAssets?.banner?.height || null,
        mimeType: runtimeBrandAssets?.banner?.mimeType || null
      },
      openGraph: {
        url: runtimeBrandAssets?.openGraph?.url || null,
        alt: runtimeBrandAssets?.openGraph?.alt || null,
        width: runtimeBrandAssets?.openGraph?.width || null,
        height: runtimeBrandAssets?.openGraph?.height || null,
        mimeType: runtimeBrandAssets?.openGraph?.mimeType || null
      },
      shareImage: {
        url: runtimeBrandAssets?.shareImage?.url || null,
        alt: runtimeBrandAssets?.shareImage?.alt || null,
        width: runtimeBrandAssets?.shareImage?.width || null,
        height: runtimeBrandAssets?.shareImage?.height || null,
        mimeType: runtimeBrandAssets?.shareImage?.mimeType || null
      },
      loginImage: {
        url: runtimeBrandAssets?.loginImage?.url || null,
        alt: runtimeBrandAssets?.loginImage?.alt || null,
        width: runtimeBrandAssets?.loginImage?.width || null,
        height: runtimeBrandAssets?.loginImage?.height || null,
        mimeType: runtimeBrandAssets?.loginImage?.mimeType || null
      },
      signupImage: {
        url: runtimeBrandAssets?.signupImage?.url || null,
        alt: runtimeBrandAssets?.signupImage?.alt || null,
        width: runtimeBrandAssets?.signupImage?.width || null,
        height: runtimeBrandAssets?.signupImage?.height || null,
        mimeType: runtimeBrandAssets?.signupImage?.mimeType || null
      },
      splashImage: {
        url: runtimeBrandAssets?.splashImage?.url || null,
        alt: runtimeBrandAssets?.splashImage?.alt || null,
        width: runtimeBrandAssets?.splashImage?.width || null,
        height: runtimeBrandAssets?.splashImage?.height || null,
        mimeType: runtimeBrandAssets?.splashImage?.mimeType || null
      },
      icons: runtimeBrandAssets?.icons || {}
    };
  }

  hasRuntimeBrandAssets(): boolean {
    return !!this._currentRuntime.brandAssets.logo.url;
  }

  createRuntimeBrandAssetsSnapshot(): RuntimeBrandAssets {
    return this._getDeepCopy(this._currentRuntime.brandAssets);
  }

  clearRuntimeBrandAssetsCache(): void {
    _runtimeBrandAssetsCache = {};
  }

  getRuntimeDesignTokens(): RuntimeDesignTokens {
    return this._currentRuntime.designTokens;
  }

  // Design Tokens Integration Helpers
  resolveRuntimeDesignTokens(tenant?: Tenant): RuntimeDesignTokens {
    const cacheKey = `tenant:${tenant?.id || 'default'}`;

    if (_runtimeDesignTokensCache[cacheKey]) {
      return this._getDeepCopy(_runtimeDesignTokensCache[cacheKey]);
    }

    const designTokens = this._designTokensEngine.resolveTokensFromTenant(tenant);
    const runtimeDesignTokens: RuntimeDesignTokens = {
      colors: { ...designTokens.colors },
      typography: { ...designTokens.typography },
      spacing: { ...designTokens.spacing },
      borders: { ...designTokens.borders },
      radius: { ...designTokens.radius },
      shadows: { ...designTokens.shadows },
      opacity: { ...designTokens.opacity },
      zIndex: { ...designTokens.zIndex },
      breakpoints: { ...designTokens.breakpoints },
      motion: { ...designTokens.motion },
      elevation: { ...designTokens.elevation },
      containers: { ...designTokens.containers }
    };

    _runtimeDesignTokensCache[cacheKey] = runtimeDesignTokens;
    return this._getDeepCopy(runtimeDesignTokens);
  }

  resolveDesignTokensFromRuntime(runtimeDesignTokens?: RuntimeDesignTokens): Partial<DesignTokens> {
    return {
      colors: undefined,
      typography: runtimeDesignTokens?.typography as DesignTokens["typography"] | undefined,
      spacing: runtimeDesignTokens?.spacing as DesignTokens["spacing"] | undefined,
      borders: runtimeDesignTokens?.borders as DesignTokens["borders"] | undefined,
      radius: runtimeDesignTokens?.radius as DesignTokens["radius"] | undefined,
      shadows: runtimeDesignTokens?.shadows as DesignTokens["shadows"] | undefined,
      opacity: runtimeDesignTokens?.opacity as DesignTokens["opacity"] | undefined,
      zIndex: runtimeDesignTokens?.zIndex as DesignTokens["zIndex"] | undefined,
      breakpoints: runtimeDesignTokens?.breakpoints as DesignTokens["breakpoints"] | undefined,
      motion: runtimeDesignTokens?.motion as DesignTokens["motion"] | undefined,
      elevation: runtimeDesignTokens?.elevation as DesignTokens["elevation"] | undefined,
      containers: runtimeDesignTokens?.containers as DesignTokens["containers"] | undefined
    };
  }

  hasRuntimeDesignTokens(): boolean {
    return !!this._currentRuntime.designTokens.colors.primary['500'];
  }

  createRuntimeDesignTokensSnapshot(): RuntimeDesignTokens {
    return this._getDeepCopy(this._currentRuntime.designTokens);
  }

  clearRuntimeDesignTokensCache(): void {
    _runtimeDesignTokensCache = {};
  }

  getRuntimeMotion(): RuntimeMotion {
    return this._currentRuntime.motion;
  }

  // Motion Integration Helpers
  resolveRuntimeMotion(tenant?: Tenant): RuntimeMotion {
    const cacheKey = `tenant:${tenant?.id || 'default'}`;

    if (_runtimeMotionCache[cacheKey]) {
      return this._getDeepCopy(_runtimeMotionCache[cacheKey]);
    }

    const motion = this._motionResolver.resolveMotionFromTenant(tenant);
    const runtimeMotion: RuntimeMotion = {
      duration: { ...motion.duration },
      easing: { ...motion.easing },
      fade: { ...motion.fade },
      slide: { ...motion.slide },
      scale: { ...motion.scale },
      hover: { ...motion.hover },
      press: { ...motion.press },
      entrance: { ...motion.entrance },
      exit: { ...motion.exit },
      microinteractions: { ...motion.microinteractions },
      reducedMotion: motion.reducedMotion,
      premiumMotion: motion.premiumMotion
    };

    _runtimeMotionCache[cacheKey] = runtimeMotion;
    return this._getDeepCopy(runtimeMotion);
  }

  resolveMotionFromRuntime(runtimeMotion?: RuntimeMotion): Partial<Motion> {
    return {
      duration: runtimeMotion?.duration as Motion["duration"] | undefined,
      easing: runtimeMotion?.easing as Motion["easing"] | undefined,
      fade: runtimeMotion?.fade as Motion["fade"] | undefined,
      slide: runtimeMotion?.slide as Motion["slide"] | undefined,
      scale: runtimeMotion?.scale as Motion["scale"] | undefined,
      hover: runtimeMotion?.hover as Motion["hover"] | undefined,
      press: runtimeMotion?.press as Motion["press"] | undefined,
      entrance: runtimeMotion?.entrance as Motion["entrance"] | undefined,
      exit: runtimeMotion?.exit as Motion["exit"] | undefined,
      microinteractions: runtimeMotion?.microinteractions as Motion["microinteractions"] | undefined,
      reducedMotion: runtimeMotion?.reducedMotion,
      premiumMotion: runtimeMotion?.premiumMotion
    };
  }

  hasRuntimeMotion(): boolean {
    return !!this._currentRuntime.motion.duration['200'];
  }

  createRuntimeMotionSnapshot(): RuntimeMotion {
    return this._getDeepCopy(this._currentRuntime.motion);
  }

  clearRuntimeMotionCache(): void {
    _runtimeMotionCache = {};
  }

  getRuntimeFonts(): RuntimeFonts {
    return this._currentRuntime.fonts;
  }

  // Fonts Integration Helpers
  resolveRuntimeFonts(tenant?: Tenant): RuntimeFonts {
    const cacheKey = `tenant:${tenant?.id || 'default'}`;

    if (_runtimeFontsCache[cacheKey]) {
      return this._getDeepCopy(_runtimeFontsCache[cacheKey]);
    }

    const fonts = this._fontResolver.resolveFontsFromTenant(tenant);
    const runtimeFonts: RuntimeFonts = {
      primary: { ...fonts.primary },
      heading: { ...fonts.heading },
      body: { ...fonts.body },
      button: { ...fonts.button },
      menu: { ...fonts.menu },
      premium: fonts.premium ? { ...fonts.premium } : null,
      scale: { ...fonts.scale },
      weights: [...fonts.weights],
      fallbacks: [...fonts.fallbacks]
    };

    _runtimeFontsCache[cacheKey] = runtimeFonts;
    return this._getDeepCopy(runtimeFonts);
  }

  resolveFontsFromRuntime(runtimeFonts?: RuntimeFonts): Partial<Fonts> {
    return {
      primary: runtimeFonts?.primary as Fonts["primary"] | undefined,
      heading: runtimeFonts?.heading as Fonts["heading"] | undefined,
      body: runtimeFonts?.body as Fonts["body"] | undefined,
      button: runtimeFonts?.button as Fonts["button"] | undefined,
      menu: runtimeFonts?.menu as Fonts["menu"] | undefined,
      premium: runtimeFonts?.premium as Fonts["premium"] | undefined,
      scale: runtimeFonts?.scale as Fonts["scale"] | undefined,
      weights: runtimeFonts?.weights as Fonts["weights"] | undefined,
      fallbacks: runtimeFonts?.fallbacks as Fonts["fallbacks"] | undefined
    };
  }

  hasRuntimeFonts(): boolean {
    return !!this._currentRuntime.fonts.primary.fontFamily;
  }

  createRuntimeFontsSnapshot(): RuntimeFonts {
    return this._getDeepCopy(this._currentRuntime.fonts);
  }

  clearRuntimeFontsCache(): void {
    _runtimeFontsCache = {};
  }

  createRuntimeSnapshot(): Runtime {
    return this._getDeepCopy(this._currentRuntime);
  }

  clearRuntimeCache(): void {
    _runtimeCache = {};
  }

  // Helper to deep copy
  private _getDeepCopy(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }

  // Getters and Setters
  get currentRuntime(): Runtime {
    return this._getDeepCopy(this._currentRuntime);
  }

  set currentRuntime(runtime: Partial<Runtime>) {
    this._currentRuntime = {
      ...DEFAULT_RUNTIME,
      ...runtime
    };
  }
}

// Hook-like factory
export function createWhiteLabelRuntime(initialTenant?: Tenant): WhiteLabelRuntime {
  return new WhiteLabelRuntime(initialTenant);
}
