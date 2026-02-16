import { Card } from "@components/ui/card";
import type { Transaction } from "../type";
import { TransactionItem } from "./TransactionItem";
import { Inbox } from "lucide-react";

export function TransactionList({
  transactions,
}: {
  transactions: Transaction[];
}) {
  if (transactions.length === 0) {
    return (
      <Card className="p-12 flex flex-col items-center justify-center text-zinc-500 border-dashed">
        <Inbox size={40} className="mb-4 opacity-20" />
        <p>Aucune transaction enregistrée </p>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <div className="divide-y">
        {transactions.map((t) => (
          <TransactionItem key={t.id} transaction={t} />
        ))}
      </div>
    </Card>
  );
}
