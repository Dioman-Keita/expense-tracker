"use client";

import { Input } from "@components/ui/input";
import { Select } from "@components/ui/select";
import Button from "@components/ui/button";
import { Card, CardContent } from "@components/ui/card";
import categories from "@config/categories";
import { createTransaction } from "../actions/createTransaction";
import { TransactionType } from "../type";
import { useState } from "react";

export function Transaction() {
  const [type, setType] = useState<TransactionType>("expense");
  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="pt-6">
        <form action={createTransaction} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Libellé</label>
            <Input name="label" placeholder="Ex: Courses Carrefour" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Montant (fcfa)</label>
              <Input
                name="amount"
                type="number"
                step={0.01}
                placeholder="0.00"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Type</label>
              <select
                name="type"
                onChange={(e) => setType(e.target.value as TransactionType)}
              >
                <option value="expense">Dépense</option>
                <option value="income">Revenu</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Catégorie de depense</label>
            <Select name="list_of_types">
              {type === "expense"
                ? categories.expense.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))
                : categories.income.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
            </Select>
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-amber-700"
          >
            Enregister la transaction
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
