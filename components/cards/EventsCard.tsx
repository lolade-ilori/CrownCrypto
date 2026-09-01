// src/components/events/EventsCard.tsx
import { ThemedText } from "@/components/ui/ThemedText";
import { ThemedSurfaceView } from "@/components/ui/ThemedView";
import { Image } from "expo-image";
import { Text, View } from "react-native";

import { formatPoints } from "@/lib/format";
import { EventItem } from "@/types/event";

interface EventsCardProps {
  event: EventItem;
}

export default function EventsCard({ event }: EventsCardProps) {
  const { title, imageUrl, points, friendsGoing, friendAvatars } = event;

  return (
    <ThemedSurfaceView className="rounded-3xl overflow-hidden p-1">
      {/* Image */}
      <Image
        source={{ uri: imageUrl }}
        style={{
          width: "100%",
          aspectRatio: 16 / 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
        contentFit="cover"
        transition={200}
      />

      {/* Body */}
      <View className="p-4 gap-3">
        {/* Title + points */}
        <View className="flex-row items-center justify-between">
          <ThemedText
            className="text-2xl font-semibold flex-1"
            numberOfLines={1}
          >
            {title}
          </ThemedText>

          <View className="flex-row items-center gap-1.5 rounded-full bg-lime-200 px-3 py-1.5">
            <View className="h-4 w-4 rounded-full bg-amber-400" />
            <Text className="text-sm font-semibold text-lime-900">
              {formatPoints(points)} pts
            </Text>
          </View>
        </View>

        {/* Friends going */}
        <View className="flex-row items-center gap-2">
          <View className="flex-row">
            {friendAvatars.slice(0, 2).map((uri, index) => (
              <Image
                key={uri}
                source={{ uri }}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 14,
                  marginLeft: index === 0 ? 0 : -10,
                }}
                contentFit="cover"
              />
            ))}
          </View>

          <ThemedText className="text-base text-muted">
            {friendsGoing} friends are going
          </ThemedText>
        </View>
      </View>
    </ThemedSurfaceView>
  );
}
