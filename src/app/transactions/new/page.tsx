import Container from "@components/layout/container";
import { TransactionForm } from "@features/transactions/components/TransactionForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NewTransactionPage() {
  return (
    <Container className="py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 mb-8 transition-colors"
      >
        <ArrowLeft size={16} />
        Annuler et retourner
      </Link>
      <TransactionForm />
    </Container>
  );
}
