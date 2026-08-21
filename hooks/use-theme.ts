import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "../lib/theme";
import { useThemeStore } from "../store/themeStore";
import { Theme } from "../types/theme";

export function useTheme(): Theme {
  const mode = useThemeStore((state) => state.mode);
  const systemScheme = useColorScheme();

  if (mode === "system") {
    return systemScheme === "dark" ? darkTheme : lightTheme;
  }
  return mode === "dark" ? darkTheme : lightTheme;
}
