import { ThemedText } from "../../../../components/ui/ThemedText";
import { SafeAreaThemedView } from "../../../../components/ui/ThemedView";

export default function Cards() {
  return (
    <SafeAreaThemedView className="flex-1 justify-center items-center bg-gray-50">
      <ThemedText variant="subtitle">Cards</ThemedText>
    </SafeAreaThemedView>
  );
}
