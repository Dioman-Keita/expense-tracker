"use client";

import { Input } from "@components/ui/input";
import { Select } from "@components/ui/select";
import Button from "@components/ui/button";
import { Card, CardContent } from "@components/ui/card";
import categories from "@config/categories";
import { createTransaction } from "../actions/createTransaction";
import { TransactionType } from "../type";
import { useState } from "react";
import { Landmark } from "lucide-react";

export function TransactionForm() {
  const [type, setType] = useState<TransactionType>("expense");

  return (
    <Card className="max-w-md mx-auto border border-zinc-200 shadow-2xl bg-white rounded-[2.5rem] overflow-hidden">
      <CardContent className="pt-10 pb-8 px-8">
        <form action={createTransaction} className="flex flex-col gap-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-zinc-900 rounded-2xl shadow-lg">
              <Landmark className="text-white" size={28} />
            </div>
            <h2 className="text-xl font-bold mt-4">Nouvelle opération</h2>
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">
              Libellé
            </label>
            <Input name="label" placeholder="Ex: Restaurant" required />
          </div>

          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">
                Montant
              </label>
              <Input
                name="amount"
                type="number"
                step="0.01"
                placeholder="0"
                required
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">
                Type
              </label>
              <Select
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value as TransactionType)}
              >
                <option value="expense">Dépense</option>
                <option value="income">Revenu</option>
              </Select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">
              Catégorie
            </label>
            <Select name="category">
              {categories[type].map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </Select>
          </div>

          <Button
            type="submit"
            className="w-full h-14 bg-zinc-900 text-white rounded-xl mt-2"
          >
            Enregistrer
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
