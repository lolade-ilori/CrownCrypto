import { ThemedText } from "../../../../components/ThemedText";
import { SafeAreaThemedView } from "../../../../components/ThemedView";

export default function Cards() {
  return (
    <SafeAreaThemedView className="flex-1 justify-center items-center bg-gray-50">
      <ThemedText className="text-lg font-semibold">Cards</ThemedText>
    </SafeAreaThemedView>
  );
}
