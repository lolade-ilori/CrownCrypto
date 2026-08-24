export interface PaymentCard {
  id: string;
  last4: string;
  cardBalance: number;
  totalDue: number;
  currency: string;
  gradient: [string, string, ...string[]];
  textColor: string;
  mutedTextColor: string;
}
