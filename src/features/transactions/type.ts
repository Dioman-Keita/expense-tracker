export type TransactionType = "income" | "expense";

export interface Transaction {
  id: string;
  label?: string;
  amount: number;
  type: TransactionType;
  category?: string;
  date: Date | string;
}
