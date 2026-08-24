import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";
import { cardShadow } from "../../lib/shadow";
import { ThemedText } from "./ThemedText";
import { ThemedTouchableOpacity } from "./ThemedView";

export default function AccountInfoCard() {
  return (
    <ThemedTouchableOpacity
      className="mt-4 w-full rounded-full"
      style={[cardShadow]}
    >
      <View className="flex-row items-center justify-between py-4 px-4">
        <View className="flex flex-row items-center gap-3">
          <Ionicons name="card-sharp" size={23} color="#0A84FF" />
          <ThemedText variant="card_body">Chequing</ThemedText>
        </View>

        <View className="flex flex-row items-center gap-3">
          <ThemedText variant="card_body">$4756.67</ThemedText>

          <Ionicons name="chevron-forward" size={16} />
        </View>
      </View>
    </ThemedTouchableOpacity>
  );
}
