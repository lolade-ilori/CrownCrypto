export type ThemeMode = "light" | "dark" | "system";

export interface ThemeColors {
  background: string;
  surface: string;
  surfaceElevated: string;
  text: string;
  textMuted: string;
  primary: string;
  primaryMuted: string;
  border: string;
  success: string;
  danger: string;
  warning: string;
}

export interface Theme {
  colors: ThemeColors;
  isDark: boolean;
}
