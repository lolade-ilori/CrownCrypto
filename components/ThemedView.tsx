import { View, type ViewProps } from "react-native";
import {
  SafeAreaView,
  type SafeAreaViewProps,
} from "react-native-safe-area-context";
import { useTheme } from "../hooks/use-theme";

interface ThemedViewProps extends ViewProps {
  className?: string;
}

export function ThemedView({ className, style, ...rest }: ViewProps) {
  const theme = useTheme();
  return (
    <View
      style={[{ backgroundColor: theme.colors.background }, style]}
      {...rest}
    />
  );
}

export function SafeAreaThemedView({ style, ...rest }: SafeAreaViewProps) {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={[{ backgroundColor: theme.colors.background }, style]}
      {...rest}
    />
  );
}
