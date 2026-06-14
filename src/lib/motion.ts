'use client';

import { Tenant } from './tenant';
import { Identity } from './identity';
import { Theme } from './theme';
import { DesignTokensEngine } from './designTokens';

// Motion Types
export interface DurationTokens {
  75: string;
  100: string;
  150: string;
  200: string;
  300: string;
  500: string;
  700: string;
  1000: string;
}

export interface EasingTokens {
  easeIn: string;
  easeOut: string;
  easeInOut: string;
  bounce: string;
  backIn: string;
  backOut: string;
  backInOut: string;
  elastic: string;
}

export interface FadeMotion {
  duration: string;
  easing: string;
  from: number;
  to: number;
}

export interface SlideMotion {
  duration: string;
  easing: string;
  from: number;
  to: number;
}

export interface ScaleMotion {
  duration: string;
  easing: string;
  from: number;
  to: number;
}

export interface HoverMotion {
  scale: number;
  duration: string;
  easing: string;
  translateY?: number;
}

export interface PressMotion {
  scale: number;
  duration: string;
  easing: string;
}

export interface EntranceMotion {
  fade: FadeMotion;
  slideUp: SlideMotion;
  slideDown: SlideMotion;
  slideLeft: SlideMotion;
  slideRight: SlideMotion;
  scale: ScaleMotion;
  staggerChildren: number;
}

export interface ExitMotion {
  fade: FadeMotion;
  slideUp: SlideMotion;
  slideDown: SlideMotion;
  slideLeft: SlideMotion;
  slideRight: SlideMotion;
  scale: ScaleMotion;
}

export interface Microinteractions {
  buttonHover: HoverMotion;
  buttonPress: PressMotion;
  cardHover: HoverMotion;
  linkHover: HoverMotion;
  inputFocus: {
    scale: number;
    duration: string;
    easing: string;
  };
}

export interface Motion {
  duration: DurationTokens;
  easing: EasingTokens;
  fade: FadeMotion;
  slide: SlideMotion;
  scale: ScaleMotion;
  hover: HoverMotion;
  press: PressMotion;
  entrance: EntranceMotion;
  exit: ExitMotion;
  microinteractions: Microinteractions;
  reducedMotion: boolean;
  premiumMotion: boolean;
}

interface MotionCache {
  [key: string]: Motion;
}

// Default Motion Tokens
const DEFAULT_DURATION_TOKENS: DurationTokens = {
  75: '75ms',
  100: '100ms',
  150: '150ms',
  200: '200ms',
  300: '300ms',
  500: '500ms',
  700: '700ms',
  1000: '1000ms'
};

const DEFAULT_EASING_TOKENS: EasingTokens = {
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  backIn: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
  backOut: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  backInOut: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  elastic: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)'
};

const DEFAULT_FADE_MOTION: FadeMotion = {
  duration: DEFAULT_DURATION_TOKENS['300'],
  easing: DEFAULT_EASING_TOKENS.easeOut,
  from: 0,
  to: 1
};

const DEFAULT_SLIDE_MOTION: SlideMotion = {
  duration: DEFAULT_DURATION_TOKENS['300'],
  easing: DEFAULT_EASING_TOKENS.easeOut,
  from: 20,
  to: 0
};

const DEFAULT_SCALE_MOTION: ScaleMotion = {
  duration: DEFAULT_DURATION_TOKENS['200'],
  easing: DEFAULT_EASING_TOKENS.easeOut,
  from: 0.95,
  to: 1
};

const DEFAULT_HOVER_MOTION: HoverMotion = {
  scale: 1.02,
  duration: DEFAULT_DURATION_TOKENS['150'],
  easing: DEFAULT_EASING_TOKENS.easeOut,
  translateY: -2
};

const DEFAULT_PRESS_MOTION: PressMotion = {
  scale: 0.98,
  duration: DEFAULT_DURATION_TOKENS['100'],
  easing: DEFAULT_EASING_TOKENS.easeInOut
};

const DEFAULT_ENTRANCE_MOTION: EntranceMotion = {
  fade: DEFAULT_FADE_MOTION,
  slideUp: { ...DEFAULT_SLIDE_MOTION, from: 20 },
  slideDown: { ...DEFAULT_SLIDE_MOTION, from: -20 },
  slideLeft: { ...DEFAULT_SLIDE_MOTION, from: 20 },
  slideRight: { ...DEFAULT_SLIDE_MOTION, from: -20 },
  scale: DEFAULT_SCALE_MOTION,
  staggerChildren: 50
};

const DEFAULT_EXIT_MOTION: ExitMotion = {
  fade: { ...DEFAULT_FADE_MOTION, from: 1, to: 0 },
  slideUp: { ...DEFAULT_SLIDE_MOTION, from: 0, to: 20 },
  slideDown: { ...DEFAULT_SLIDE_MOTION, from: 0, to: -20 },
  slideLeft: { ...DEFAULT_SLIDE_MOTION, from: 0, to: 20 },
  slideRight: { ...DEFAULT_SLIDE_MOTION, from: 0, to: -20 },
  scale: { ...DEFAULT_SCALE_MOTION, from: 1, to: 0.95 }
};

const DEFAULT_MICROINTERACTIONS: Microinteractions = {
  buttonHover: DEFAULT_HOVER_MOTION,
  buttonPress: DEFAULT_PRESS_MOTION,
  cardHover: { ...DEFAULT_HOVER_MOTION, translateY: -4, scale: 1.01 },
  linkHover: { ...DEFAULT_HOVER_MOTION, scale: 1 },
  inputFocus: {
    scale: 1,
    duration: DEFAULT_DURATION_TOKENS['200'],
    easing: DEFAULT_EASING_TOKENS.easeOut
  }
};

const DEFAULT_MOTION: Motion = {
  duration: DEFAULT_DURATION_TOKENS,
  easing: DEFAULT_EASING_TOKENS,
  fade: DEFAULT_FADE_MOTION,
  slide: DEFAULT_SLIDE_MOTION,
  scale: DEFAULT_SCALE_MOTION,
  hover: DEFAULT_HOVER_MOTION,
  press: DEFAULT_PRESS_MOTION,
  entrance: DEFAULT_ENTRANCE_MOTION,
  exit: DEFAULT_EXIT_MOTION,
  microinteractions: DEFAULT_MICROINTERACTIONS,
  reducedMotion: false,
  premiumMotion: false
};

let _motionCache: MotionCache = {};

// Motion Resolver Class
export class MotionResolver {
  private _currentMotion: Motion;

  constructor(initialTenant?: Tenant) {
    this._currentMotion = this.resolveMotionFromTenant(initialTenant);
  }

  // Helpers
  getDefaultMotion(): Motion {
    return this._getDeepCopy(DEFAULT_MOTION);
  }

  resolveMotion(): Motion {
    return this._getDeepCopy(this._currentMotion);
  }

  resolveMotionFromTenant(tenant?: Tenant): Motion {
    const cacheKey = `tenant:${tenant?.id || 'default'}`;

    if (_motionCache[cacheKey]) {
      return this._getDeepCopy(_motionCache[cacheKey]);
    }

    const motion: Motion = this.getDefaultMotion();
    _motionCache[cacheKey] = motion;
    return motion;
  }

  resolveMotionFromTokens(tokens?: DesignTokensEngine): Motion {
    if (!tokens) {
      return this.getDefaultMotion();
    }

    const motion: Motion = this.getDefaultMotion();
    return motion;
  }

  resolveMotionFromTheme(theme?: Theme): Motion {
    if (!theme) {
      return this.getDefaultMotion();
    }

    const motion: Motion = this.getDefaultMotion();
    return motion;
  }

  resolveMotionFromIdentity(identity?: Identity): Motion {
    if (!identity) {
      return this.getDefaultMotion();
    }

    const cacheKey = `identity:${identity.tenant?.id || 'default'}`;

    if (_motionCache[cacheKey]) {
      return this._getDeepCopy(_motionCache[cacheKey]);
    }

    const motion: Motion = this.resolveMotionFromTenant(identity.tenant || undefined);
    _motionCache[cacheKey] = motion;
    return motion;
  }

  getTransition(
    property: string | string[] = 'all',
    duration: string = DEFAULT_DURATION_TOKENS['200'],
    easing: string = DEFAULT_EASING_TOKENS.easeInOut
  ): string {
    const props = Array.isArray(property) ? property : [property];
    return props.map(p => `${p} ${duration} ${easing}`).join(', ');
  }

  getDuration(key: keyof DurationTokens = '200'): string {
    return this._currentMotion.duration[key];
  }

  getEasing(key: keyof EasingTokens = 'easeOut'): string {
    return this._currentMotion.easing[key];
  }

  getHoverMotion(): HoverMotion {
    return this._getDeepCopy(this._currentMotion.hover);
  }

  getEntranceMotion(): EntranceMotion {
    return this._getDeepCopy(this._currentMotion.entrance);
  }

  createMotionSnapshot(): Motion {
    return this._getDeepCopy(this._currentMotion);
  }

  clearMotionCache(): void {
    _motionCache = {};
  }

  // Helper to deep copy
  private _getDeepCopy(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }

  // Getters and Setters
  get currentMotion(): Motion {
    return this._getDeepCopy(this._currentMotion);
  }

  set currentMotion(motion: Partial<Motion>) {
    this._currentMotion = {
      ...DEFAULT_MOTION,
      ...motion,
      duration: motion.duration || DEFAULT_DURATION_TOKENS,
      easing: motion.easing || DEFAULT_EASING_TOKENS,
      fade: motion.fade || DEFAULT_FADE_MOTION,
      slide: motion.slide || DEFAULT_SLIDE_MOTION,
      scale: motion.scale || DEFAULT_SCALE_MOTION,
      hover: motion.hover || DEFAULT_HOVER_MOTION,
      press: motion.press || DEFAULT_PRESS_MOTION,
      entrance: motion.entrance || DEFAULT_ENTRANCE_MOTION,
      exit: motion.exit || DEFAULT_EXIT_MOTION,
      microinteractions: motion.microinteractions || DEFAULT_MICROINTERACTIONS
    };
  }
}

// Hook-like factory
export function createMotionResolver(initialTenant?: Tenant): MotionResolver {
  return new MotionResolver(initialTenant);
}
