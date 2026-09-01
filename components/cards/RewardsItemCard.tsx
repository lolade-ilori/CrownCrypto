import { LockOpen } from "lucide-react-native";
import { Text, View } from "react-native";
import { useTheme } from "../../hooks/use-theme";
import { ThemedText } from "../ui/ThemedText";
import { ThemedSurfaceView, ThemedTouchableOpacity } from "../ui/ThemedView";

export default function RewardsItemCard() {
  const theme = useTheme();

  return (
    <ThemedSurfaceView className="rounded-3xl p-6">
      <View className="flex-row items-center gap-2 self-start rounded-full px-4 py-2 bg-[#a8ee8a]">
        <LockOpen color="#000000" size={20} strokeWidth={2} />
        <Text className="text-black font-medium">Reward unlocked</Text>
      </View>

      <View
        className="w-full mt-4 p-4 rounded-2xl"
        style={{
          borderWidth: 1,
          borderStyle: "dashed",
          borderColor: theme.colors.textMuted,
        }}
      >
        <View className="flex-row items-center justify-between">
          <View className="flex-1">
            <View className="flex-row items-center gap-3">
              <ThemedText variant="midTitle">The Weekend</ThemedText>
              <View className="flex-row items-center gap-1">
                <View className="w-2 h-2 rounded-full bg-[#EC4899] " />
                <Text className="text-[#EC4899] font-medium">Live</Text>
              </View>
            </View>

            <View className="flex-row items-center gap-3 mt-1">
              <ThemedText variant="muted">10 July</ThemedText>
              <View
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: theme.colors.textMuted }}
              />
              <ThemedText variant="muted">Toronto, ON</ThemedText>
            </View>
          </View>

          <ThemedTouchableOpacity
            inverse={true}
            className="rounded-full px-4 py-3"
          >
            <Text style={{ color: theme.colors.background, fontWeight: 600 }}>
              Claim
            </Text>
          </ThemedTouchableOpacity>
        </View>
      </View>
    </ThemedSurfaceView>
  );
}
