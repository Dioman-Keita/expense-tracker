import Container from "@components/layout/container";
import { cn } from "@lib/utils";
import { getTransactionById } from "@features/transactions/services/transaction.service";
import { Card, CardContent } from "@components/ui/card";
import { formatCurrency } from "@utils/formatCurrency";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag, Wallet } from "lucide-react";
import Link from "next/link";
import { Transaction } from "@features/transactions/type";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function TransactionDetailPage({ params }: Props) {
  const { id } = await params;
  const transaction: Transaction = await getTransactionById(id);

  if (!transaction) {
    notFound();
  }

  const isIncome = transaction.type === "income";
  return (
    <Container className="max-w-2xl py-10">
      <Link
        href="/transactions"
        className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 mb-6 transition-colors"
      >
        <ArrowLeft size={16} />
        Retour à l'historique
      </Link>
      <Card className="overflow-hidden border-t-4 border-t-zinc-900">
        <CardContent className="p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <span
                className={cn(
                  "px-2 py-1 rounded-100 text-xs font-bold uppercase tracking-wider",
                  isIncome
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-red-100 text-red-700",
                )}
              >
                {isIncome ? "Revenu" : "Dépense"}
              </span>
              <h1 className="text-3xl font-bold mt-2">{transaction.label}</h1>
            </div>
            <div
              className={cn(
                "text-3xl font-mono font-bold",
                isIncome ? "text-emerald-600" : "text-red-600",
              )}
            >
              {isIncome ? "+" : "-"}
              {formatCurrency(transaction.amount)}
            </div>
          </div>
          <div className="grid gap-6 border-t pt-8 text-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-zinc-500">
                <Calendar size={18} />
                <span>Date de l'opération</span>
                <span className="font-medium">
                  {new Date(transaction.date).toLocaleDateString("fr-FR", {
                    dateStyle: "full",
                  })}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-zinc-500">
                  <Tag size={18} />
                  <span className="font-medium capitalize">
                    {transaction.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-zinc-500">
                  <Wallet size={18} />
                  <span>ID de transaction</span>
                </div>
                <span className="font-mono text-xs text-zinc-400">
                  {transaction.id}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
