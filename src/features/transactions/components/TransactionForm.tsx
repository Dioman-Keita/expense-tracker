"use client";

import { Input } from "@components/ui/input";
import { Select } from "@components/ui/select";
import Button from "@components/ui/button";
import categories from "@config/categories";
import { createTransaction } from "../actions/createTransaction";
import { toast } from "sonner";
import { TransactionType } from "../type";
import { Textarea } from "@components/ui/textarea";
import { useState } from "react";
import { Landmark } from "lucide-react";

export function TransactionForm({ onSuccess }: { onSuccess?: () => void }) {
  const [type, setType] = useState<TransactionType>("expense");
  async function handleSumbit(formData: FormData) {
    try {
      await createTransaction(formData);
      toast.success("Transaction enregistrée !");
    } catch (error) {
      toast.error("Erreur lors de l'enregistrement ");
      console.error(error);
    }
  }

  return (
    <form className="flex flex-col gap-5" action={handleSumbit}>
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

      <div className="space-y-1.5">
        <label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">
          Notes (Optionnel)
        </label>
        <Textarea
          name="description"
          placeholder="Ajoutez des détails sur cette opération..."
        />
      </div>

      <Button
        type="submit"
        className="w-full h-14 bg-zinc-900 text-white rounded-xl mt-2"
      >
        Enregistrer
      </Button>
    </form>
  );
}
