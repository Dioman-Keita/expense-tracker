import Container from "@components/layout/container";
import { getAllTransactions } from "@features/transactions/services/transaction.service";
import { TransactionSummaryCard } from "@features/transactions/components/TransactionSummaryCard";
import { TransactionList } from "@features/transactions/components/TransactionList";
import { AddButton } from "@components/ui/button";

export default async function HomePage() {
  const transactions = await getAllTransactions();

  return (
    <Container className="space-y-4">
      <div className="mt-6 mb-1 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
            Trableau de bord
          </h1>
          <p className="text-zinc-500">Gérez vos finances simplement.</p>
        </div>
        <div>
          <AddButton>Ajouter une transaction</AddButton>
        </div>
      </div>
      <TransactionSummaryCard transactions={transactions} />
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Dernières opérations</h2>
        <TransactionList transactions={transactions} />
      </div>
    </Container>
  );
}
