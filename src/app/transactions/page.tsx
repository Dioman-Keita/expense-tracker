import Container from "@components/layout/container";
import {
  getAllTransactions,
  getPaginatedTransactions,
} from "@features/transactions/services/transaction.service";
import { TransactionList } from "@features/transactions/components/TransactionList";
import { Pagination } from "@components/ui/pagination";
import { Search } from "lucide-react";
import { Input } from "@components/ui/input";

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function AllTranscationsPage({ searchParams }: Props) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const limit = 5;

  const { data, totalPages } = await getPaginatedTransactions(
    currentPage,
    limit,
  );
  const transactions = await getAllTransactions();
  return (
    <Container className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold">Historique des opérations</h2>
          <p className="text-zinc-500 text-sm">
            {transactions.length} transactions au total
          </p>
        </div>
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
            size={18}
          />
          <Input className="pl-10" placeholder="Rechercher une dépense..." />
        </div>
      </div>

      <TransactionList transactions={data} />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </Container>
  );
}
