import { LucideIcon } from "lucide-react-native";

export type TransactionCategory =
  | "entertainment"
  | "groceries"
  | "transport"
  | "income"
  | "transfer"
  | "utilities";

export interface Transaction {
  id: string;
  title: string;
  category: TransactionCategory;
  amount: number;
  currency: string;
  date: string;
  icon: LucideIcon;
  iconColor: string;
  iconBackground: string;
}
