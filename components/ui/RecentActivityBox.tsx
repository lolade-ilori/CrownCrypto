import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";
import { useTheme } from "../../hooks/use-theme";
import { ThemedText } from "./ThemedText";
import { ThemedPressable, ThemedSurfaceView } from "./ThemedView";

export default function RecentActivityBox() {
  const theme = useTheme();
  return (
    <ThemedSurfaceView className="w-full rounded-3xl mt-4 p-4">
      <View className="">
        <View>
          <ThemedPressable className="flex flex-row items-center justify-between px-4 py-3">
            <View className="flex flex-row items-center gap-3">
              <Ionicons
                name="musical-notes-sharp"
                size={20}
                color={theme.colors.textMuted}
              />
              <View className="flex flex-col gap-1">
                <ThemedText style={{ fontWeight: "600", fontSize: 15 }}>
                  Apple Music
                </ThemedText>

                <ThemedText variant="muted">Entertainment</ThemedText>
              </View>
            </View>

            <View className="flex flex-col gap-1 justify-end items-end">
              <ThemedText variant="card_body">-$32.50</ThemedText>
              <ThemedText variant="muted">Today</ThemedText>
            </View>
          </ThemedPressable>
          <View
            className="w-full border my-3"
            style={{ borderColor: theme.colors.border }}
          />
        </View>

        <View>
          <ThemedPressable className="flex flex-row items-center justify-between px-4 py-3">
            <View className="flex flex-row items-center gap-3">
              <Ionicons
                name="musical-notes-sharp"
                size={20}
                color={theme.colors.textMuted}
              />
              <View className="flex flex-col gap-1">
                <ThemedText style={{ fontWeight: "600", fontSize: 15 }}>
                  Apple Music
                </ThemedText>

                <ThemedText variant="muted">Entertainment</ThemedText>
              </View>
            </View>

            <View className="flex flex-col gap-1 justify-end items-end">
              <ThemedText variant="card_body">-$32.50</ThemedText>
              <ThemedText variant="muted">Today</ThemedText>
            </View>
          </ThemedPressable>
          <View
            className="w-full border my-3"
            style={{ borderColor: theme.colors.border }}
          />
        </View>

        <View>
          <ThemedPressable className="flex flex-row items-center justify-between px-4 py-3">
            <View className="flex flex-row items-center gap-3">
              <Ionicons
                name="musical-notes-sharp"
                size={20}
                color={theme.colors.textMuted}
              />
              <View className="flex flex-col gap-1">
                <ThemedText style={{ fontWeight: "600", fontSize: 15 }}>
                  Apple Music
                </ThemedText>

                <ThemedText variant="muted">Entertainment</ThemedText>
              </View>
            </View>

            <View className="flex flex-col gap-1 justify-end items-end">
              <ThemedText variant="card_body">-$32.50</ThemedText>
              <ThemedText variant="muted">Today</ThemedText>
            </View>
          </ThemedPressable>
          {/* <View
            className="w-full border my-3"
            style={{ borderColor: theme.colors.border }}
          /> */}
        </View>
      </View>
    </ThemedSurfaceView>
  );
}
