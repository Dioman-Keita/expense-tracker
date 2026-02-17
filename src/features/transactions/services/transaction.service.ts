import * as repository from "../repositories/transaction.repository";
import { TransactionType } from "../type";

export async function getAllTransactions() {
  return repository.getAll();
}

export async function getTransactionById(id: string) {
  return repository.findById(id);
}

export async function filterByCategory(category: string) {
  const transactions = await repository.getAll();
  return transactions.filter((t) => t.category === category);
}

export async function filterByType(type: TransactionType) {
  const transactions = await repository.getAll();
  return transactions.filter((t) => t.type === type);
}

export async function filterByLabel(label: string) {
  const transaction = await repository.getAll();
  return transaction.filter((t) => t.label === label);
}

export async function getTotalByCategory(category: string) {
  const transactions = await filterByCategory(category);
  return transactions.reduce((acc, curr) => acc + curr.amount, 0);
}

export async function getTotalIncome() {
  const transactions = await filterByType("income");
  return transactions.reduce((acc, curr) => acc + curr.amount, 0);
}

export async function getTotalExpense() {
  const transactions = await filterByType("expense");
  return transactions.reduce((acc, curr) => acc + curr.amount, 0);
}

export async function getPaginatedTransactions({
  page = 1,
  limit = 5,
  query = "",
  type = "all",
  category = "all",
}) {
  const all = await getAllTransactions();

  const filtered = all.filter((t) => {
    const matchesQuery = t.label
      ? t.label.toLowerCase().includes(query.toLowerCase())
      : "all";
    const matchesType = type === "all" || t.type === type;
    const matchesCategory = category === "all" || t.category === category;
    return matchesQuery && matchesType && matchesCategory;
  });

  filtered.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const startIndex = (page - 1) * limit;
  const totalPages = Math.ceil(filtered.length / limit);
  const data = filtered.slice(startIndex, startIndex + limit);

  return { data, totalPages, totalCount: filtered.length };
}
