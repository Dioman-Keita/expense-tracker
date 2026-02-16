import Container from "./container";
import { AddButton } from "@components/ui/button";
import Link from "next/link";
import { Wallet } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        {/* Logo / Home link */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-zinc-900"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white">
            <Wallet size={18} />
          </div>
        </Link>
        {/* Navigation & Actions */}
        <nav className="flex items-center gap-4">
          <Link
            href="/transactions"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            History
          </Link>
          <AddButton size="sm">Ajouter une nouvelle transaction</AddButton>
        </nav>
      </Container>
    </header>
  );
}
