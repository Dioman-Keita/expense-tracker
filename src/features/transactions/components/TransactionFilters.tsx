"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Select } from "@components/ui/select";
import categories from "@config/categories";
import { Search, X } from "lucide-react";
import Button from "@components/ui/button";

export function TransactionFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function updateFilter(name: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "all") {
      params.set(name, value);
    } else {
      params.delete(name);
    }
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`);
  }

  function clearFilters() {
    router.push(pathname);
  }

  const currentType = searchParams.get("type") || "all";
  const currentCategory = searchParams.get("category") || "all";

  return (
    <div className="flex flex-wrap items-center gap-4 bg-white p-4 rounded-2xl border border-zinc-100 shadow-sm">
      <div className="flex items-center gap-2">
        <Search size={18} className="text-zinc-400" />
        <span className="text-sm font-medium text-zinc-700">Filtrer :</span>
      </div>

      <Select
        className="w-40 h-9 text-xs"
        value={currentType}
        onChange={(e) => updateFilter("type", e.target.value)}
      >
        <option value="all">Tous les types</option>
        <option value="expense">Dépenses</option>
        <option value="income">Revenus</option>
      </Select>

      <Select
        className="w-48 h-9 text-xs"
        value={currentCategory}
        onChange={(e) => updateFilter("category", e.target.value)}
      >
        <option value="all">Toutes les catégories</option>
        {[...categories.expense, ...categories.income].map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </Select>

      {(currentType !== "all" || currentCategory !== "all") && (
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          className="text-xs"
        >
          <X size={14} className="mr-1" /> Effacer
        </Button>
      )}
    </div>
  );
}
