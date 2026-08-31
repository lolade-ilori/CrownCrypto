import { LinearGradient } from "expo-linear-gradient";
import { Wifi } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../hooks/use-theme";
import { formatCurrency } from "../../lib/format";
import { cardShadow } from "../../lib/shadow";
import { PaymentCard } from "../../types/card";

interface CardProps {
  width: number;
  cardItems: PaymentCard;
}

export default function Card({ width, cardItems }: CardProps) {
  const theme = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      className="h-56 mt-8 rounded-3xl"
      style={[cardShadow, { width }]}
    >
      {/* Inner clipper: overflow hidden lives here, NOT on the shadow view */}
      <View className="flex-1 rounded-3xl overflow-hidden">
        <LinearGradient
          colors={cardItems.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{ flex: 1, padding: 24 }}
        >
          <View className="flex-1 justify-center">
            <View className="flex-row items-center gap-2">
              <View className="rotate-90">
                <Wifi size={20} color={"#000000"} />
              </View>
              <Text className="font-semibold text-base">
                **** **** **** {cardItems.last4}
              </Text>
            </View>
          </View>

          <View className="flex-row justify-between">
            <View className="flex-col gap-1">
              <Text className="font-instrument-medium text-sm text-gray-500">
                Total Due
              </Text>
              <Text className="font-instrument-semibold text-base">
                {formatCurrency(cardItems.totalDue)}
              </Text>
            </View>

            <TouchableOpacity className="bg-black flex-row items-center justify-center px-5 py-2 rounded-3xl">
              <Text className="text-white text-base font-instrument-semibold">
                Pay Now
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}
