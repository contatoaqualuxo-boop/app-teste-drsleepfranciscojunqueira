'use client';

import { Tenant } from './tenant';
import { Identity } from './identity';
import { Theme } from './theme';
import { DesignTokensEngine } from './designTokens';

// Layout Types
export interface ContainerTokens {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  full: string;
}

export interface GridTokens {
  columns: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  gutter: string;
  margin: string;
}

export interface BreakpointLayout {
  container: keyof ContainerTokens;
  grid: GridTokens;
  maxWidth: string;
}

export interface LayoutPreset {
  mobile: BreakpointLayout;
  tablet: BreakpointLayout;
  desktop: BreakpointLayout;
}

export interface Layout {
  presets: {
    default: LayoutPreset;
    compact: LayoutPreset;
    comfortable: LayoutPreset;
    premium: LayoutPreset;
  };
  activePreset: keyof Layout['presets'];
  containers: ContainerTokens;
  grids: GridTokens;
  alignments: {
    start: string;
    center: string;
    end: string;
    between: string;
    around: string;
    evenly: string;
  };
}

interface LayoutCache {
  [key: string]: Layout;
}

// Default Layout Tokens
const DEFAULT_CONTAINER_TOKENS: ContainerTokens = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  full: '100%'
};

const DEFAULT_GRID_TOKENS: GridTokens = {
  columns: {
    mobile: 4,
    tablet: 8,
    desktop: 12
  },
  gutter: '1.5rem',
  margin: '1rem'
};

const DEFAULT_BREAKPOINT_LAYOUT: BreakpointLayout = {
  container: 'full',
  grid: DEFAULT_GRID_TOKENS,
  maxWidth: '100%'
};

const DEFAULT_LAYOUT_PRESET: LayoutPreset = {
  mobile: {
    container: 'full',
    grid: DEFAULT_GRID_TOKENS,
    maxWidth: '100%'
  },
  tablet: {
    container: 'md',
    grid: DEFAULT_GRID_TOKENS,
    maxWidth: DEFAULT_CONTAINER_TOKENS['md']
  },
  desktop: {
    container: 'xl',
    grid: DEFAULT_GRID_TOKENS,
    maxWidth: DEFAULT_CONTAINER_TOKENS['xl']
  }
};

const DEFAULT_LAYOUT: Layout = {
  presets: {
    default: DEFAULT_LAYOUT_PRESET,
    compact: {
      mobile: {
        container: 'full',
        grid: {
          ...DEFAULT_GRID_TOKENS,
          gutter: '1rem',
          margin: '0.75rem'
        },
        maxWidth: '100%'
      },
      tablet: {
        container: 'md',
        grid: {
          ...DEFAULT_GRID_TOKENS,
          gutter: '1rem',
          margin: '0.75rem'
        },
        maxWidth: DEFAULT_CONTAINER_TOKENS['md']
      },
      desktop: {
        container: 'xl',
        grid: {
          ...DEFAULT_GRID_TOKENS,
          gutter: '1rem',
          margin: '0.75rem'
        },
        maxWidth: DEFAULT_CONTAINER_TOKENS['xl']
      }
    },
    comfortable: {
      mobile: {
        container: 'full',
        grid: {
          ...DEFAULT_GRID_TOKENS,
          gutter: '2rem',
          margin: '1.5rem'
        },
        maxWidth: '100%'
      },
      tablet: {
        container: 'md',
        grid: {
          ...DEFAULT_GRID_TOKENS,
          gutter: '2rem',
          margin: '1.5rem'
        },
        maxWidth: DEFAULT_CONTAINER_TOKENS['md']
      },
      desktop: {
        container: 'xl',
        grid: {
          ...DEFAULT_GRID_TOKENS,
          gutter: '2rem',
          margin: '1.5rem'
        },
        maxWidth: DEFAULT_CONTAINER_TOKENS['xl']
      }
    },
    premium: {
      mobile: {
        container: 'full',
        grid: {
          ...DEFAULT_GRID_TOKENS,
          gutter: '2.5rem',
          margin: '2rem'
        },
        maxWidth: '100%'
      },
      tablet: {
        container: 'md',
        grid: {
          ...DEFAULT_GRID_TOKENS,
          gutter: '2.5rem',
          margin: '2rem'
        },
        maxWidth: DEFAULT_CONTAINER_TOKENS['md']
      },
      desktop: {
        container: 'xl',
        grid: {
          ...DEFAULT_GRID_TOKENS,
          gutter: '2.5rem',
          margin: '2rem'
        },
        maxWidth: DEFAULT_CONTAINER_TOKENS['xl']
      }
    }
  },
  activePreset: 'default',
  containers: DEFAULT_CONTAINER_TOKENS,
  grids: DEFAULT_GRID_TOKENS,
  alignments: {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly'
  }
};

let _layoutCache: LayoutCache = {};

// Layout Resolver Class
export class LayoutResolver {
  private _currentLayout: Layout;

  constructor(initialTenant?: Tenant) {
    this._currentLayout = this.resolveLayoutFromTenant(initialTenant);
  }

  // Helpers
  getDefaultLayout(): Layout {
    return this._getDeepCopy(DEFAULT_LAYOUT);
  }

  resolveLayout(): Layout {
    return this._getDeepCopy(this._currentLayout);
  }

  resolveLayoutFromTenant(tenant?: Tenant): Layout {
    const cacheKey = `tenant:${tenant?.id || 'default'}`;

    if (_layoutCache[cacheKey]) {
      return this._getDeepCopy(_layoutCache[cacheKey]);
    }

    const layout: Layout = this.getDefaultLayout();
    _layoutCache[cacheKey] = layout;
    return layout;
  }

  resolveLayoutFromTokens(tokens?: DesignTokensEngine): Layout {
    if (!tokens) {
      return this.getDefaultLayout();
    }

    const layout: Layout = this.getDefaultLayout();
    return layout;
  }

  resolveLayoutFromIdentity(identity?: Identity): Layout {
    if (!identity) {
      return this.getDefaultLayout();
    }

    const cacheKey = `identity:${identity.tenant?.id || 'default'}`;

    if (_layoutCache[cacheKey]) {
      return this._getDeepCopy(_layoutCache[cacheKey]);
    }

    const layout: Layout = this.resolveLayoutFromTenant(identity.tenant || undefined);
    _layoutCache[cacheKey] = layout;
    return layout;
  }

  resolveLayoutFromConfiguration(config?: any): Layout {
    return this.getDefaultLayout();
  }

  getContainer(size?: keyof ContainerTokens): string {
    return this._currentLayout.containers[size || 'full'];
  }

  getGrid(preset?: keyof Layout['presets']): GridTokens {
    const activePreset = preset || this._currentLayout.activePreset;
    return this._getDeepCopy(this._currentLayout.presets[activePreset].desktop.grid);
  }

  getColumns(breakpoint: 'mobile' | 'tablet' | 'desktop'): number {
    const activePreset = this._currentLayout.activePreset;
    return this._currentLayout.presets[activePreset][breakpoint].grid.columns[breakpoint];
  }

  getBreakpointLayout(breakpoint: 'mobile' | 'tablet' | 'desktop'): BreakpointLayout {
    const activePreset = this._currentLayout.activePreset;
    return this._getDeepCopy(this._currentLayout.presets[activePreset][breakpoint]);
  }

  createLayoutSnapshot(): Layout {
    return this._getDeepCopy(this._currentLayout);
  }

  clearLayoutCache(): void {
    _layoutCache = {};
  }

  // Helper to deep copy
  private _getDeepCopy(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }

  // Getters and Setters
  get currentLayout(): Layout {
    return this._getDeepCopy(this._currentLayout);
  }

  set currentLayout(layout: Partial<Layout>) {
    this._currentLayout = {
      ...DEFAULT_LAYOUT,
      ...layout,
      presets: layout.presets || DEFAULT_LAYOUT.presets,
      containers: layout.containers || DEFAULT_LAYOUT.containers,
      grids: layout.grids || DEFAULT_LAYOUT.grids,
      alignments: layout.alignments || DEFAULT_LAYOUT.alignments
    };
  }
}

// Hook-like factory
export function createLayoutResolver(initialTenant?: Tenant): LayoutResolver {
  return new LayoutResolver(initialTenant);
}
