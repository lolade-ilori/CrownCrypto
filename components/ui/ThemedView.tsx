import { useState } from "react";
import {
  Pressable,
  PressableProps,
  TouchableOpacity,
  type TouchableOpacityProps,
  View,
  type ViewProps,
} from "react-native";
import {
  SafeAreaView,
  type SafeAreaViewProps,
} from "react-native-safe-area-context";
import { useTheme } from "../../hooks/use-theme";

interface ThemedViewProps extends ViewProps {
  className?: string;
}

export function ThemedView({ style, ...rest }: ViewProps) {
  const theme = useTheme();
  return (
    <View
      style={[{ backgroundColor: theme.colors.background }, style]}
      {...rest}
    />
  );
}

export function ThemedSurfaceView({ style, ...rest }: ViewProps) {
  const theme = useTheme();
  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.surface,
          shadowColor: theme.colors.surfaceElevated,
        },
        style,
      ]}
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

export function ThemedTouchableOpacity({
  style,
  ...rest
}: TouchableOpacityProps) {
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: theme.colors.surface,
          shadowColor: theme.colors.surfaceElevated,
        },
        style,
      ]}
      {...rest}
    />
  );
}

export function ThemedPressable({
  style,
  className,
  onPressIn,
  onPressOut,
  ...rest
}: PressableProps & { className?: string }) {
  const theme = useTheme();
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      className={`rounded-2xl ${className ?? ""}`}
      style={[
        {
          backgroundColor: pressed
            ? theme.colors.surfacePressed
            : theme.colors.surface,
        },
        typeof style === "function" ? undefined : style,
      ]}
      onPressIn={(e) => {
        setPressed(true);
        onPressIn?.(e);
      }}
      onPressOut={(e) => {
        setPressed(false);
        onPressOut?.(e);
      }}
      {...rest}
    />
  );
}
