import EventsCard from "@/components/cards/EventsCard";
import RewardsItemCard from "@/components/cards/RewardsItemCard";
import RewardsProgressCard from "@/components/cards/RewardsProgressCard";
import Header from "@/components/ui/Header";
import { ThemedText } from "@/components/ui/ThemedText";
import { CATEGORIES } from "@/constants/categories";
import { EVENTS } from "@/constants/events";
import { useTheme } from "@/hooks/use-theme";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Rewards() {
  const theme = useTheme();
  return (
    <LinearGradient
      colors={theme.isDark ? ["#96fa6b", "#0A0E17"] : ["#96fa6b", "#EEF1F6"]}
      locations={[0, 0.4]}
      style={{ flex: 1 }}
    >
      <SafeAreaView className="flex-1">
        <ScrollView
          className="flex-1"
          contentContainerClassName="px-5 pb-8 gap-4"
        >
          <Header pageName="Rewards" />
          <RewardsProgressCard />
          <RewardsItemCard />

          <FlatList
            horizontal
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerClassName="gap-12 px-4 mt-5"
            renderItem={({ item: { label, Icon } }) => (
              <Pressable className="items-center gap-2">
                <Icon width={48} height={48} />
                <ThemedText variant="section_title">{label}</ThemedText>
              </Pressable>
            )}
          />

          <FlatList
            data={EVENTS}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerClassName="gap-4 mt-6"
            renderItem={({ item }) => <EventsCard event={item} />}
          />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
