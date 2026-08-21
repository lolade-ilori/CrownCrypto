import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-gray-50">
      <Text className="text-red-500">SignIn</Text>

      <Link href="/(auth)/sign-up">
        <Text>Sign up</Text>
      </Link>

      <View className="mt-20">
        <Link href="/(root)/(tabs)">
          <Text>Go Home</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
