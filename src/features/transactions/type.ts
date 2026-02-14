export type TransactionType = "income" | "expense";

export interface Transaction {
  id: string;
  label?: string;
  amount: number;
  description: string;
  type: TransactionType;
  category?: string;
  date: Date | string;
}
