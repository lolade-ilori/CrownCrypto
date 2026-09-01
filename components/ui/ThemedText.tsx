import { StyleSheet, Text, type TextProps } from "react-native";
import { useTheme } from "../../hooks/use-theme";
import { fontFamily } from "../../lib/typography";

type Variant =
  | "body"
  | "title"
  | "subtitle"
  | "midTitle"
  | "section_title"
  | "muted"
  | "card_body";

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
  body: { fontFamily: fontFamily.regular, fontSize: 16 },
  card_body: {
    fontFamily: fontFamily.semibold,
    fontSize: 16,
  },
  title: { fontFamily: fontFamily.bold, fontSize: 38 },
  subtitle: {
    fontFamily: fontFamily.semibold,
    fontSize: 28,
  },
  midTitle: {
    fontFamily: fontFamily.semibold,
    fontSize: 19,
  },
  section_title: {
    fontFamily: fontFamily.semibold,
    fontSize: 17,
  },
  muted: { fontFamily: fontFamily.regular, fontSize: 14 },
});
