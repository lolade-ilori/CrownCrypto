// components/cards/PaymentCard.tsx
import { LinearGradient } from "expo-linear-gradient";
import { Platform, Text, View } from "react-native";

type PaymentCardProps = {
  cardholderName: string;
  last4: string;
  expiry: string;
  gradientColors: [string, string, ...string[]];
};

const CARD_ASPECT_RATIO = 1.586; // ISO/IEC 7810 ID-1, real card ratio

export function PaymentCard({
  cardholderName,
  last4,
  expiry,
  gradientColors,
}: PaymentCardProps) {
  return (
    <View style={cardShadow} className="rounded-3xl bg-white">
      <View className="overflow-hidden rounded-3xl">
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ aspectRatio: CARD_ASPECT_RATIO }}
          className="justify-between p-6"
        >
          <Text className="text-lg font-semibold text-white">CrownCrypto</Text>

          <Text className="text-xl tracking-widest text-white">
            •••• •••• •••• {last4}
          </Text>

          <View className="flex-row justify-between">
            <View>
              <Text className="text-xs text-white/70">CARD HOLDER</Text>
              <Text className="text-sm text-white">{cardholderName}</Text>
            </View>
            <View>
              <Text className="text-xs text-white/70">EXPIRES</Text>
              <Text className="text-sm text-white">{expiry}</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}

const cardShadow = Platform.select({
  ios: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
  },
  android: {
    elevation: 8,
  },
});
