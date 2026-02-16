import { Card, CardContent } from "@components/ui/card";
import { formatCurrency } from "@utils/formatCurrency";
import { Wallet, TrendingUp, TrendingDown } from "lucide-react";
import {
  getTotalExpense,
  getTotalIncome,
} from "../services/transaction.service";
import { Transaction } from "../type";

interface SummaryProps {
  transactions: Transaction[];
}

export async function TransactionSummaryCard({ transactions }: SummaryProps) {
  const income = await getTotalIncome();
  const expenses = await getTotalExpense();
  const total = income - expenses;

  return (
    <div className="flex justify-between items-center gap-2">
      <Card className="bg-zinc-900 text-white border-none w-full">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium opacity-80">Solde Total</span>
            <Wallet size={20} className="opacity-80" />
          </div>
          <div className="text-2xl font-bold">{formatCurrency(total)}</div>
        </CardContent>
      </Card>
      <Card className="bg-zinc-900 text-white border-none w-full">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-2 text-emerald-600">
            <span className="text-sm font-medium">Revenus</span>
            <TrendingUp size={20} />
          </div>
          <div className="text-2xl font-bold">{formatCurrency(income)}</div>
        </CardContent>
      </Card>
      <Card className="bg-zinc-900 text-white border-none w-full">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-2 text-red-600">
            <span className="text-sm font-medium">Dépenses</span>
            <TrendingDown size={20} />
          </div>
          <div className="text-2xl font-bold text-red-600">
            {formatCurrency(expenses)}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
