import { View } from "react-native";
import { useTheme } from "../../hooks/use-theme";
import { formatCurrency, formatRelativeDate } from "../../lib/format";
import { Transaction } from "../../types/transaction";
import { ThemedText } from "../ui/ThemedText";
import { ThemedPressable } from "../ui/ThemedView";

interface TransactionType {
  transaction: Transaction;
}

export default function RecentActivityBox({ transaction }: TransactionType) {
  const theme = useTheme();
  return (
    <View className="">
      <View>
        <ThemedPressable className="flex flex-row items-center justify-between px-3 py-3">
          <View className="flex flex-row items-center gap-4">
            {/* <Ionicons
              name="musical-notes-sharp"
              size={20}
              color={theme.colors.textMuted}
            /> */}
            <transaction.icon
              color={theme.colors.textMuted}
              strokeWidth={1.8}
              size={20}
            />

            <View className="flex flex-col gap-1">
              <ThemedText style={{ fontWeight: "600", fontSize: 15 }}>
                {transaction.title}
              </ThemedText>

              <ThemedText variant="muted" className="capitalize">
                {transaction.category}
              </ThemedText>
            </View>
          </View>

          <View className="flex flex-col gap-1 justify-end items-end">
            <ThemedText variant="card_body">
              {formatCurrency(transaction.amount)}
            </ThemedText>
            <ThemedText variant="muted">
              {formatRelativeDate(transaction.date)}
            </ThemedText>
          </View>
        </ThemedPressable>
      </View>
    </View>
  );
}
