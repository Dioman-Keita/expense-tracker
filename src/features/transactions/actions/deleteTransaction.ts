"use server";

import * as repository from "../repositories/transaction.repository";

export async function deleteTransaction(id: string) {
  await repository.remove(id);
}
