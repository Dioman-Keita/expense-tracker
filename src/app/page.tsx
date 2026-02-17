import { getAllTransactions } from "@features/transactions/services/transaction.service";
import { TransactionSummaryCard } from "@features/transactions/components/TransactionSummaryCard";
import { TransactionList } from "@features/transactions/components/TransactionList";
import Container from "@components/layout/container";
import Link from "next/link";
import Button from "@components/ui/button";
import { ArrowRight } from "lucide-react";

export default async function HomePage() {
  const allTransactions = await getAllTransactions();
  const sortedTransactions = [...allTransactions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const recentTransactions = sortedTransactions.slice(0, 5);

  return (
    <Container>
      <TransactionSummaryCard transactions={allTransactions} />
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-zinc-900 mt-6">
            Dernières opérations
          </h2>
          <Link href="/transactions">
            <Button variant="ghost" size="sm" className="text-zinc-500">
              Voir tout <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
        <TransactionList transactions={recentTransactions} />
        {allTransactions.length === 0 && (
          <p className="text-center text-zinc-500 py-10">
            Aucune transaction pour le moment.
          </p>
        )}
      </div>
    </Container>
  );
}
