import { View } from "react-native";
import { ThemedText } from "../../../../components/ThemedText";
import { SafeAreaThemedView } from "../../../../components/ThemedView";
import { ThemeToggle } from "../../../../components/ui/Toggle";

export default function Profile() {
  return (
    <SafeAreaThemedView className="flex-1 bg-gray-50">
      <View className="px-6 flex-row flex justify-between items-center">
        <ThemedText variant="title">Profile</ThemedText>
        <ThemeToggle />
      </View>
    </SafeAreaThemedView>
  );
}
