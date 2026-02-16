import { getAllTransactions } from "@features/transactions/services/transaction.service";
import { TransactionSummaryCard } from "@features/transactions/components/TransactionSummaryCard";
import { TransactionList } from "@features/transactions/components/TransactionList";
import Container from "@components/layout/container";

export default async function HomePage() {
  const transactions = await getAllTransactions();

  return (
    <Container>
      <TransactionSummaryCard transactions={transactions} />
      <div>
        <h2 className="text-xl font-semibold">Dernières opérations</h2>
        <TransactionList transactions={transactions} />
      </div>
    </Container>
  );
}
