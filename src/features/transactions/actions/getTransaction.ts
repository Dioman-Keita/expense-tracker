"use server";

import { getTransactionById } from "../services/transaction.service";
import { Transaction } from "../type";

export async function getTransaction(id: string): Promise<Transaction | null> {
  if (!id || id.trim() === "") return null;

  const uuidRegex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  if (!uuidRegex.test(id)) return null;

  try {
    const transaction = await getTransactionById(id);
    return transaction;
  } catch (error) {
    console.error("getTransaction error:", error);
    return null;
  }
}
