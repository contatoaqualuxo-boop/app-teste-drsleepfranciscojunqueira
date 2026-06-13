import { CompanySettings } from "./types";

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
}

export interface ThemeTypography {
  fontFamily: string;
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
  };
  fontWeight: {
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };
}

export interface ThemeSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
}

export interface ThemeBorderRadius {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  full: string;
}

export interface ThemeShadows {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface ThemeComponents {
  button: {
    padding: string;
    borderRadius: string;
    fontWeight: number;
  };
  card: {
    padding: string;
    borderRadius: string;
    borderWidth: string;
  };
}

export interface Theme {
  colors: ThemeColors;
  typography: ThemeTypography;
  spacing: ThemeSpacing;
  borderRadius: ThemeBorderRadius;
  shadows: ThemeShadows;
  components: ThemeComponents;
}

const DEFAULT_THEME: Theme = {
  colors: {
    primary: "#6366f1",
    secondary: "#8b5cf6",
    accent: "#f59e0b",
    background: "#020617",
    surface: "#020617",
    text: "#ffffff",
    textSecondary: "#9ca3af",
    border: "#1f2937",
  },
  typography: {
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
  },
  borderRadius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  },
  components: {
    button: {
      padding: "0.5rem 1rem",
      borderRadius: "0.5rem",
      fontWeight: 500,
    },
    card: {
      padding: "1.5rem",
      borderRadius: "0.75rem",
      borderWidth: "1px",
    },
  },
};

export function createTheme(settings?: Partial<CompanySettings>): Theme {
  return {
    ...DEFAULT_THEME,
    colors: {
      ...DEFAULT_THEME.colors,
      primary: settings?.primary_color || DEFAULT_THEME.colors.primary,
      secondary: settings?.secondary_color || DEFAULT_THEME.colors.secondary,
    },
  };
}

export function useTheme(settings?: Partial<CompanySettings>) {
  return createTheme(settings);
}
