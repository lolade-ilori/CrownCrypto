import PaymentCard from "@/components/cards/PaymentCard";
import { SafeAreaThemedView } from "../../../../components/ui/ThemedView";

export default function Cards() {
  return (
    <SafeAreaThemedView className="flex-1 px-5">
      <PaymentCard />
    </SafeAreaThemedView>
  );
}
