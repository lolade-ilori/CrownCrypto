import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  useWindowDimensions,
  View,
} from "react-native";
import Card from "../../../../components/cards/Card";
import RecentActivityBox from "../../../../components/cards/RecentActivityBox";

import AccountInfoCard from "../../../../components/accounts/Account-Info-Card";
import Header from "../../../../components/ui/Header";
import { ThemedText } from "../../../../components/ui/ThemedText";
import {
  SafeAreaThemedView,
  ThemedSurfaceView,
} from "../../../../components/ui/ThemedView";
import { ACCOUNTS } from "../../../../constants/accounts";
import { PAYMENT_CARDS } from "../../../../constants/card";
import { RECENT_ACTIVITY } from "../../../../constants/transaction";

export default function Wallet() {
  const isLoading = false;
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const { width: windowWidth } = useWindowDimensions();
  const { width: SCREEN_WIDTH } = Dimensions.get("window");

  // SafeAreaThemedView has px-6 (24px each side)
  const pageWidth = windowWidth - 38;
  // renderItem wraps Card in px-3 (12px each side)
  // const cardWidth = pageWidth - 24;
  const CARD_WIDTH = SCREEN_WIDTH * 0.85;

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / pageWidth);
    setActiveIndex(index);
  };

  return (
    <SafeAreaThemedView className="flex-1  bg-gray-50 px-6">
      <FlatList
        data={ACCOUNTS}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <View>
            {/* Header */}
            <View className="mb-5">
              <Header pageName="Wallet" />
            </View>
            <View className="flex-col gap-3">
              <ThemedText variant="section_title">My Balance</ThemedText>
              <ThemedText variant="title">$27,120.45</ThemedText>
            </View>

            {/* Card */}
            <View className="relative mb-8">
              <View className="mb-4">
                {isLoading ? (
                  <ActivityIndicator
                    size="small"
                    color="#2563EB"
                    className="py-10"
                  />
                ) : (
                  <FlatList
                    data={PAYMENT_CARDS}
                    keyExtractor={(item) => item.id}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={onScroll}
                    scrollEventThrottle={16}
                    horizontal
                    renderItem={({ item }) => (
                      <View className="" style={{ width: pageWidth }}>
                        <Card width={pageWidth - 16} cardItems={item} />
                      </View>
                    )}
                  />
                )}
              </View>

              {/* Dot indicators */}
              {PAYMENT_CARDS.length > 1 && (
                <View className="absolute -bottom-1 left-0 right-0 flex-row justify-center gap-1">
                  {PAYMENT_CARDS.map((_, i) => (
                    <View
                      key={i}
                      className={`h-1.5 rounded-full ${
                        i === activeIndex ? "w-4 bg-black" : "w-1.5 bg-gray-300"
                      }`}
                    />
                  ))}
                </View>
              )}
            </View>

            {/* Accounts Header */}
            <View className="flex-row items-center gap-1">
              <ThemedText variant="section_title">Accounts</ThemedText>
              <Ionicons name="chevron-forward-sharp" size={16} color="black" />
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <View className="w-full">
            <AccountInfoCard pillItems={item} />
          </View>
        )}
        ListFooterComponent={
          <View className="mt-8">
            <View className="flex-row items-center gap-1">
              <ThemedText variant="section_title">Recent activity</ThemedText>
            </View>

            <ThemedSurfaceView className="w-full rounded-3xl mt-4 p-4">
              <FlatList
                data={RECENT_ACTIVITY}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => (
                  <View
                    className="w-full border my-3"
                    style={{ borderColor: theme.colors.border }}
                  />
                )}
                renderItem={({ item }) => (
                  <RecentActivityBox transaction={item} />
                )}
              />
            </ThemedSurfaceView>
          </View>
        }
      />
    </SafeAreaThemedView>
  );
}
