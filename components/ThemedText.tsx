import { StyleSheet, Text, type TextProps } from "react-native";
import { useTheme } from "../hooks/use-theme";

type Variant = "body" | "title" | "subtitle" | "muted";

interface ThemedTextProps extends TextProps {
  variant?: Variant;
}

export function ThemedText({
  style,
  variant = "body",
  ...rest
}: ThemedTextProps) {
  const theme = useTheme();
  const color =
    variant === "muted" ? theme.colors.textMuted : theme.colors.text;

  return <Text style={[styles[variant], { color }, style]} {...rest} />;
}

const styles = StyleSheet.create({
  body: { fontSize: 16 },
  title: { fontSize: 28, fontWeight: "700" },
  subtitle: { fontSize: 20, fontWeight: "600" },
  muted: { fontSize: 14 },
});
