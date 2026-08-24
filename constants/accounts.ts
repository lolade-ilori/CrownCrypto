import { Bitcoin, CreditCard, Landmark, PiggyBank } from "lucide-react-native";
import { Account } from "../types/accounts";

export const ACCOUNTS: Account[] = [
  {
    id: "acc_chequing",
    type: "chequing",
    label: "Chequing",
    balance: 4756.67,
    currency: "USD",
    icon: CreditCard,
    iconColor: "#4F6EF7",
    iconBackground: "#E8ECFE",
  },
  {
    id: "acc_savings",
    type: "savings",
    label: "Savings",
    balance: 12300.18,
    currency: "USD",
    icon: PiggyBank,
    iconColor: "#22C55E",
    iconBackground: "#DCFCE7",
  },
  {
    id: "acc_current",
    type: "current",
    label: "Current",
    balance: 8420.5,
    currency: "USD",
    icon: Landmark,
    iconColor: "#F59E0B",
    iconBackground: "#FEF3C7",
  },
  {
    id: "acc_crypto",
    type: "crypto",
    label: "Crypto",
    balance: 4756.67,
    currency: "USD",
    icon: Bitcoin,
    iconColor: "#EC4899",
    iconBackground: "#FCE7F3",
  },
];
