"use server";

import * as repository from "../repositories/transaction.repository";
import { revalidatePath } from "next/cache";

export async function deleteTransaction(id: string) {
  await repository.remove(id);

  revalidatePath("/");
  revalidatePath("/transactions");
}
