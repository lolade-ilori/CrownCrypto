import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";
import { ProgressBar } from "../ui/ProgressBar";
import { ThemedText } from "../ui/ThemedText";
import { ThemedSurfaceView } from "../ui/ThemedView";

export default function RewardsProgressCard() {
  return (
    <ThemedSurfaceView className="w-full rounded-3xl p-8 flex-1">
      <View className="flex-row items-baseline ">
        <View className="flex-row items-center gap-2">
          <Ionicons name="ellipse" size={28} color="#f59e0b" />
          <ThemedText variant="title">560</ThemedText>
        </View>
        <ThemedText variant="body">pts</ThemedText>
      </View>

      <View className="flex-row justify-between items-center mt-4">
        <View className="flex-row gap-2">
          {/* <Book size={18} color="#b45309" strokeWidth={2} /> */}
          <Ionicons
            name="journal"
            size={20}
            color="#b45309"
            className="rotate-45"
          />
          <ThemedText>Lv. 4</ThemedText>
        </View>

        <View className="flex-row items-baseline">
          <ThemedText variant="subtitle">120</ThemedText>
          <ThemedText variant="muted">/150</ThemedText>
        </View>
      </View>

      <View className="mt-4">
        <ProgressBar current={120} total={150} />
      </View>
    </ThemedSurfaceView>
  );
}
