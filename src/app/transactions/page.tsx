import { getAllTransactions } from "../../features/transactions/services/transaction.service";

export default async function TransactionsPage() {
  const transactions = await getAllTransactions();

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 p-8">
      <h1 className="text-2xl font-bold mb-6">Transactions</h1>
      <div className="space-y-4">
        {transactions.map((t) => (
          <div
            key={t.id}
            className="flex justify-between bg-white p-4 rounded-lg shadow"
          >
            <span>{t.label}</span>
            <span
              className={
                t.type === "income" ? "text-green-600" : "text-red-600"
              }
            >
              {t.amount} €
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
