import Container from "@components/layout/container";
import {
  getAllTransactions,
  getPaginatedTransactions,
} from "@features/transactions/services/transaction.service";
import { TransactionList } from "@features/transactions/components/TransactionList";
import { Pagination } from "@components/ui/pagination";
import { SearchBar } from "@features/transactions/components/SearchBar";
import ExportButton from "@components/ui/button";
import { TransactionFilters } from "@features/transactions/components/TransactionFilters";

interface Props {
  searchParams: Promise<{
    page?: string;
    q?: string;
    type?: string;
    category?: string;
  }>;
}

export default async function AllTranscationsPage({ searchParams }: Props) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  const { data, totalPages, totalCount } = await getPaginatedTransactions({
    page: currentPage,
    limit: 8,
    query: params.q,
    type: params.type,
    category: params.category,
  });

  return (
    <Container className="space-y-8 py-4">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">
            Historique des opérations
          </h2>
          <p className="text-zinc-500 text-sm font-medium">
            {totalCount} transaction{totalCount > 1 ? "s" : ""} enregistrée
            {totalCount > 1 ? "s" : ""}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <SearchBar />

          <a href="/api/export" download className="w-full sm:w-auto">
            <ExportButton
              className="w-full shadow-sm hover:shadow-md transition-shadow"
              children="Exporter les donnees"
            />
          </a>
        </div>
      </div>

      <TransactionFilters />

      <div className="space-y-6">
        <TransactionList transactions={data} />
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </Container>
  );
}
