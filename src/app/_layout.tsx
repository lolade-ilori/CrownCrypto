import { ThemeProvider } from "expo-router/react-navigation";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { useTheme } from "../../hooks/use-theme";
import { navDarkTheme, navLightTheme } from "../../lib/theme";
import "../global.css";

export default function RootLayout() {
  const theme = useTheme();

  return (
    <ThemeProvider value={theme.isDark ? navDarkTheme : navLightTheme}>
      <StatusBar style={theme.isDark ? "light" : "dark"} />
      <Slot />
    </ThemeProvider>
  );
}
