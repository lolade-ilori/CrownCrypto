import { LucideIcon } from "lucide-react-native";

export type AccountType = "chequing" | "savings" | "current" | "crypto";

export interface Account {
  id: string;
  type: AccountType;
  label: string;
  balance: number;
  currency: string;
  icon: LucideIcon;
  iconColor: string;
  iconBackground: string;
}
