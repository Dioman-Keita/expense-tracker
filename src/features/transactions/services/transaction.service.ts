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

export async function getPaginatedTransactions(
  page: number = 1,
  limit: number = 5,
) {
  const allTransactions = await repository.getAll();
  const sorted = allTransactions.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const totalPages = Math.ceil(sorted.length / limit);
  const data = sorted.slice(startIndex, endIndex);

  return {
    data,
    totalPages,
    currentPage: page,
    totalCount: sorted.length,
  };
}
