import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, View } from "react-native";
import { useTheme } from "../../hooks/use-theme";
import { ThemedText } from "./ThemedText";

interface HeaderProps {
  pageName: string;
}

export default function Header({ pageName }: HeaderProps) {
  const theme = useTheme();

  return (
    <View className="flex-row items-center justify-between">
      <Image className="w-18 h-18 rounded-full " />
      <ThemedText variant="section_title">{pageName}</ThemedText>
      <Ionicons
        name="notifications-outline"
        size={20}
        color={theme.colors.text}
      />
    </View>
  );
}
