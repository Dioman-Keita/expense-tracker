import Container from "@components/layout/container";
import { cn } from "@lib/utils";
import { getTransactionById } from "@features/transactions/services/transaction.service";
import { Card, CardContent } from "@components/ui/card";
import { formatCurrency } from "@utils/formatCurrency";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag, Wallet, FileText, Info } from "lucide-react";
import Link from "next/link";
import { Transaction } from "@features/transactions/type";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function TransactionDetailPage({ params }: Props) {
  const { id } = await params;
  const transaction = (await getTransactionById(id)) as Transaction;

  if (!transaction) {
    notFound();
  }

  const isIncome = transaction.type === "income";

  return (
    <Container className="max-w-2xl py-12">
      <Link
        href="/transactions"
        className="group inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 mb-8 transition-colors"
      >
        <ArrowLeft
          size={16}
          className="group-hover:-translate-x-1 transition-transform"
        />
        Retour à l'historique
      </Link>

      <Card
        className={cn(
          "overflow-hidden border-t-8 shadow-2xl rounded-4xl",
          isIncome
            ? "border-t-emerald-500 shadow-emerald-500/5"
            : "border-t-red-500 shadow-red-500/5",
        )}
      >
        <CardContent className="p-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
            <div>
              <span
                className={cn(
                  "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                  isIncome
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-red-100 text-red-700",
                )}
              >
                {isIncome ? "Revenu" : "Dépense"}
              </span>
              <h1 className="text-4xl font-extrabold text-zinc-900 mt-4 tracking-tight">
                {transaction.label}
              </h1>
            </div>

            <div className="text-right">
              <div
                className={cn(
                  "text-4xl font-mono font-black",
                  isIncome ? "text-emerald-600" : "text-red-600",
                )}
              >
                {isIncome ? "+" : "-"}
                {formatCurrency(transaction.amount)}
              </div>
              <p className="text-zinc-400 text-xs mt-1 uppercase font-bold tracking-tighter">
                Montant de l'opération
              </p>
            </div>
          </div>

          <div className="space-y-6 border-t border-zinc-100 pt-10">
            {/* Ligne : Date */}
            <div className="flex items-center justify-between group">
              <div className="flex items-center gap-3 text-zinc-500">
                <div className="p-2 bg-zinc-50 rounded-lg group-hover:bg-zinc-100 transition-colors">
                  <Calendar size={18} />
                </div>
                <span className="text-sm font-medium">Date de l'opération</span>
              </div>
              <span className="font-semibold text-zinc-900">
                {new Date(transaction.date).toLocaleDateString("fr-FR", {
                  dateStyle: "full",
                })}
              </span>
            </div>

            <div className="flex items-center justify-between group">
              <div className="flex items-center gap-3 text-zinc-500">
                <div className="p-2 bg-zinc-50 rounded-lg group-hover:bg-zinc-100 transition-colors">
                  <Tag size={18} />
                </div>
                <span className="text-sm font-medium">Catégorie</span>
              </div>
              <span className="px-3 py-1 bg-zinc-900 text-white text-xs rounded-lg font-medium capitalize">
                {transaction.category}
              </span>
            </div>

            {(transaction as any).description && (
              <div className="flex flex-col gap-3 pt-4 border-t border-zinc-50">
                <div className="flex items-center gap-3 text-zinc-500">
                  <FileText size={18} />
                  <span className="text-sm font-medium">
                    Notes / Description
                  </span>
                </div>
                <div className="p-4 bg-zinc-50 rounded-xl text-zinc-600 text-sm leading-relaxed italic">
                  "{(transaction as any).description}"
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-6 opacity-40 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-3 text-zinc-500">
                <Wallet size={16} />
                <span className="text-xs">ID Transaction</span>
              </div>
              <span className="font-mono text-[10px]">{transaction.id}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 flex items-center gap-2 justify-center text-zinc-400 text-xs">
        <Info size={14} />
        <p>
          Cette transaction est enregistrée localement dans votre coffre-fort
          JSON.
        </p>
      </div>
    </Container>
  );
}
