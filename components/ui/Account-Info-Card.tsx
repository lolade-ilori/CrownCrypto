import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";
import { formatCurrency } from "../../lib/format";
import { cardShadow } from "../../lib/shadow";
import { Account } from "../../types/accounts";
import { ThemedText } from "./ThemedText";
import { ThemedTouchableOpacity } from "./ThemedView";

interface Properties {
  pillItems: Account;
}

export default function AccountInfoCard({ pillItems }: Properties) {
  const { icon: Icon, iconColor, iconBackground, balance } = pillItems;
  return (
    <ThemedTouchableOpacity
      className="mt-3 w-full rounded-full"
      style={[cardShadow]}
    >
      <View className="flex-row items-center justify-between py-4 px-4">
        <View className="flex flex-row items-center gap-3">
          {/* <Ionicons name="card-sharp" size={23} color="#0A84FF" /> */}
          <Icon size={20} color={iconColor} strokeWidth={1.8} />
          <ThemedText variant="card_body">{pillItems.label}</ThemedText>
        </View>

        <View className="flex flex-row items-center gap-3">
          <ThemedText variant="card_body">{formatCurrency(balance)}</ThemedText>

          <Ionicons name="chevron-forward" size={16} />
        </View>
      </View>
    </ThemedTouchableOpacity>
  );
}
