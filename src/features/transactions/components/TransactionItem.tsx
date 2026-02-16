import Link from "next/link";
import { formatCurrency } from "@utils/formatCurrency";
import {
  ArrowUpCircle,
  ArrowDownCircle,
  Tag,
  ChevronRight,
} from "lucide-react";
import { DeleteButton } from "@components/ui/button";
import { deleteTransaction } from "../actions/deleteTransaction";
import { cn } from "@lib/utils";
import { Transaction } from "../type";

interface TransactionItemProps {
  transaction: Transaction;
}

export function TransactionItem({ transaction }: TransactionItemProps) {
  const isIncome = transaction.type === "income";

  return (
    <div className="group relative flex items-center justify-between p-4 hover:bg-zinc-50 transition-all border-b last:border-0">
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "p-2 rounded-full",
            isIncome
              ? "bg-emerald-50 text-emerald-600"
              : "bg-red-50 text-red-600",
          )}
        >
          {isIncome ? (
            <ArrowUpCircle size={20} />
          ) : (
            <ArrowDownCircle size={20} />
          )}
        </div>

        <div>
          <Link
            href={`/transactions/${transaction.id}`}
            className="font-semibold text-zinc-900 hover:text-emerald-600 transition-colors flex items-center gap-1 group/link"
          >
            {transaction.label}
            <ChevronRight
              size={14}
              className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all"
            />
          </Link>

          <div className="flex items-center gap-2 text-xs text-zinc-500 mt-0.5">
            <span className="flex items-center gap-1 capitalize">
              <Tag size={12} />
              {transaction.category}
            </span>
            <span>•</span>
            <span>
              {new Date(transaction.date).toLocaleDateString("fr-FR")}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <span
          className={cn(
            "font-mono font-bold text-sm",
            isIncome ? "text-emerald-600" : "text-red-600",
          )}
        >
          {isIncome ? "+" : "-"} {formatCurrency(transaction.amount)}
        </span>

        <form action={deleteTransaction.bind(null, transaction.id)}>
          <DeleteButton
            type="submit"
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </form>
      </div>
    </div>
  );
}
