import { formatCurrency } from "@utils/formatCurrency";
import { ArrowUpCircle, ArrowDownCircle, Tag, Link } from "lucide-react";
import { DeleteButton } from "@components/ui/button";
import { deleteTransaction } from "../actions/deleteTransaction";
import { cn } from "@lib/utils";
import { Transaction } from "../type";

interface TransactionItemProps {
  transaction: Transaction;
}

export function TransactionItem({ transaction }: TransactionItemProps) {
  const isIcome = transaction.type === "income";
  return (
    <div className="flex items-center justify-between p-4 hover:bg-zinc-50 transition-colors border-b last:border-0">
      <div className="flex items-center gap-4">
        <div className={isIcome ? "text-emerald-500" : "text-red-500"}>
          {isIcome ? (
            <ArrowUpCircle size={24} />
          ) : (
            <ArrowDownCircle size={24} />
          )}
        </div>
        <div>
          <Link
            href={`/transactions/${transaction.id}`}
            className="hover:underline"
          >
            <p className="font-medium text-zinc-900">{transaction.label}</p>
          </Link>
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <Tag size={12} />
            <span>.</span>
            <span>
              {new Date(transaction.date).toLocaleDateString("fr-FR")}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span
            className={cn(
              "font-semibold",
              isIcome ? "text-emerald-600" : "text-red-600",
            )}
          >
            {isIcome ? "+" : "-"}
            {formatCurrency(transaction.amount)}
          </span>

          <form action={deleteTransaction.bind(null, transaction.id)}>
            <DeleteButton type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
