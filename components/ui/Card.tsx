import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, View } from "react-native";
import { cardShadow } from "../../lib/shadow";

interface CardProps {
  colors?: [string, string, ...string[]];
}

export default function Card({ colors = ["#78fc40", "#dff3cc"] }: CardProps) {
  return (
    <TouchableOpacity
      className="w-full h-48 mt-8 bg-white rounded-3xl"
      style={[cardShadow]}
    >
      <View className="flex-1">
        <LinearGradient
          colors={colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{ flex: 1, padding: 24, borderRadius: 21 }}
        >
          <View className="flex-1 flex justify-center">
            <View className="flex flex-row items-center gap-2">
              <Ionicons name="radio-outline" size={20} />
              <Text className="font-semibold text-base ">
                **** **** **** 3090
              </Text>
            </View>
          </View>
          <View className="flex-row justify-between">
            <View className="flex flex-col gap-1">
              <Text className="font-instrument-medium font-medium text-sm text-gray-500">
                Total Due
              </Text>
              <Text className=" font-instrument-semibold text-base font-semibold">
                $140.99
              </Text>
            </View>

            <TouchableOpacity className="bg-black flex-row items-center justify-center px-3 py-2 rounded-3xl">
              <Text className="text-white text-base font-instrument-semibold font-semibold">
                Pay Now
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}
