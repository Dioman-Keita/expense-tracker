import { readFile, writeFile } from "@/src/lib/storage/fileStorage";
import { Transaction } from "../type";

export async function getAll(): Promise<Transaction[]> {
  return readFile();
}

export async function create(transaction: Transaction): Promise<void> {
  const transactions = await readFile();
  transactions.push(transaction);
  await writeFile(transactions);
}

export async function remove(id: string): Promise<void> {
  const transactions = await readFile();
  const filtered = transactions.filter((t) => t.id !== id);
  await writeFile(filtered);
}

export async function update(
  id: string,
  data: Omit<Transaction, "id">,
): Promise<void> {
  const transactions = await readFile();

  const updated = transactions.map((t) =>
    t.id === id ? { ...t, ...data } : t,
  );

  await writeFile(updated);
}

export async function findById(id: string) {
  const transactions = await readFile();
  return transactions.find((t) => t.id === id);
}
