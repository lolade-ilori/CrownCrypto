import {
  DarkTheme as NavDark,
  DefaultTheme as NavLight,
  type Theme as NavTheme,
} from "expo-router/react-navigation";
import { Theme } from "../types/theme";

const lightColors = {
  background: "#EEF1F6",
  surface: "#F7F9FC",
  surfaceElevated: "#FFFFFF",
  surfacePressed: "#E1E6EE", // Darker than surface, for pressed feedback on light backgrounds
  text: "#0B1220",
  textMuted: "#5B6B82",
  primary: "#0B5FFF",
  primaryMuted: "#E5EDFF",
  border: "#E3E8F0",
  success: "#0E9F6E",
  danger: "#E02424",
  warning: "#C27803",
  overlay: "rgba(11, 18, 32, 0.45)",
  shadow: "rgba(11, 18, 32, 0.08)",
};

const darkColors = {
  background: "#0A0E17",
  surface: "#121826", // Cards and panels, one step lighter than background
  surfaceElevated: "#1A2234",
  surfacePressed: "#232C3D", // Lighter than surface, for pressed feedback on dark backgrounds
  text: "#F2F5FA",
  textMuted: "#8A97AC",
  primary: "#3B82F6",
  primaryMuted: "#1A2E52",
  border: "#232C3D",
  success: "#31C48D",
  danger: "#F05252",
  warning: "#E3A008",
  overlay: "rgba(0, 0, 0, 0.6)",
  shadow: "rgba(0, 0, 0, 0.4)",
};

// Resolved theme objects your own components consume via the useTheme hook.
// isDark lets consumers branch quickly (e.g. status bar icon color).
export const lightTheme: Theme = { colors: lightColors, isDark: false };
export const darkTheme: Theme = { colors: darkColors, isDark: true };

// ============================================================================
// React Navigation theme objects.
// The navigator draws its own chrome (headers, screen backgrounds, transition
// gaps, tab tint) from ITS theme, separate from the tokens above. We rebuild
// its themes from our own colors so the framework chrome matches our brand and
// there are no seams between navigator chrome and screen content.
// ============================================================================

// Light navigation theme: spread the stock theme to inherit fields we don't
// override (fonts, and color keys like `notification`), then replace the
// colors that must match our brand.
export const navLightTheme: NavTheme = {
  ...NavLight,
  colors: {
    ...NavLight.colors,
    primary: lightColors.primary, // Header tint, back arrows, active tabs
    background: lightColors.background, // Screen background behind content
    card: lightColors.surface, // Header and tab bar background
    text: lightColors.text, // Header title and tab label text
    border: lightColors.border, // Header bottom border, tab bar top border
  },
};

// Dark navigation theme: same pattern, dark tokens.
export const navDarkTheme: NavTheme = {
  ...NavDark,
  colors: {
    ...NavDark.colors,
    primary: darkColors.primary, // Header tint, back arrows, active tabs
    background: darkColors.background, // Screen background behind content
    card: darkColors.surface, // Header and tab bar background
    text: darkColors.text, // Header title and tab label text
    border: darkColors.border, // Header bottom border, tab bar top border
  },
};
