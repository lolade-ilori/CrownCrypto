import { View } from "react-native";
import { ThemedText } from "../../../../components/ui/ThemedText";
import { SafeAreaThemedView } from "../../../../components/ui/ThemedView";
import { ThemeToggle } from "../../../../components/ui/Toggle";

export default function Profile() {
  return (
    <SafeAreaThemedView className="flex-1 bg-gray-50">
      <View className="px-6 flex-row flex justify-between items-center">
        <ThemedText variant="title" className="">
          Profile
        </ThemedText>
        <ThemeToggle />
      </View>
    </SafeAreaThemedView>
  );
}
