import { StyleSheet, Text, type TextProps } from "react-native";
import { useTheme } from "../../hooks/use-theme";
import { fontFamily } from "../../lib/typography";

type Variant = "body" | "title" | "subtitle" | "muted" | "card_body";

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
  body: { fontFamily: fontFamily.regular, fontSize: 16, fontWeight: "400" },
  card_body: {
    fontFamily: fontFamily.semibold,
    fontSize: 16,
    fontWeight: "600",
  },
  title: { fontFamily: fontFamily.bold, fontSize: 28, fontWeight: "700" },
  subtitle: {
    fontFamily: fontFamily.semibold,
    fontSize: 20,
    fontWeight: "500",
  },
  muted: { fontFamily: fontFamily.regular, fontSize: 14 },
});
