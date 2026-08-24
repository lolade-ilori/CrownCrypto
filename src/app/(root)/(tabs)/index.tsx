import { FlatList, View } from "react-native";
import AccountInfoCard from "../../../../components/ui/Account-Info-Card";
import { ThemedText } from "../../../../components/ui/ThemedText";
import { SafeAreaThemedView } from "../../../../components/ui/ThemedView";
import { ACCOUNTS } from "../../../../constants/accounts";

export default function Wallet() {
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
            <View>
              <ThemedText variant="subtitle">My Balance</ThemedText>
              <ThemedText variant="title">$27,120.45</ThemedText>
            </View>

            {/* Card */}
          </View>
        }
        renderItem={({ item }) => (
          <View className="w-full">
            <AccountInfoCard />
          </View>
        )}
      />
      {/* <ThemedText variant="subtitle">Wallet</ThemedText>
      <Card />
      <AccountInfoCard />
      <RecentActivityBox /> */}
    </SafeAreaThemedView>
  );
}
