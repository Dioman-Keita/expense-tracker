"use server";

import * as repository from "../repositories/transaction.repository";
import { TransactionType } from "../type";
import { revalidatePath } from "next/cache";

export async function createTransaction(data: FormData) {
  const labelEntry = data.get("label");
  const label = typeof labelEntry === "string" ? labelEntry : "";

  const amountEntry = data.get("amount");
  const amount = typeof amountEntry === "string" ? Number(amountEntry) || 0 : 0;

  const categoryEntry = data.get("category");
  const category = typeof categoryEntry === "string" ? categoryEntry : "";

  const typeEntry = data.get("type");
  const transactionType: TransactionType =
    typeEntry === "expense" || typeEntry === "income" ? typeEntry : "expense";

  const descriptionEntry = data.get("description");
  const description =
    typeof descriptionEntry === "string" ? descriptionEntry : "";

  const toDay = new Date();

  await repository.create({
    id: crypto.randomUUID(),
    label,
    amount,
    type: transactionType,
    category,
    date: toDay,
    description,
  });
}

revalidatePath("/");
revalidatePath("/transactions");
