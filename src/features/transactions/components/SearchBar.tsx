"use client";

import { Input } from "@components/ui/input";
import { Search } from "lucide-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useTransition } from "react";

export function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }
    params.set("page", "1");
    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  }

  return (
    <div className="relative w-full sm:w-72">
      <Search
        className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${
          isPending ? "text-emerald-500 animate-pulse" : "text-zinc-400"
        }`}
        size={18}
      />
      <Input
        className="pl-10"
        placeholder="Rechercher une opération..."
        defaultValue={searchParams.get("q")?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
