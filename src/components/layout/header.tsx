"use client";

import Container from "./container";
import { AddButton } from "@components/ui/button";
import { useState } from "react";
import { Dialog } from "@components/ui/dialog";
import { TransactionForm } from "@features/transactions/components/TransactionForm";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <header className="sticky top z-40 bg-white/80 backdrop-blur-md py-6">
      <Container className="flex items-center justify-between gap-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
            Tableau de bord
          </h1>
          <p className="text-zinc-500 text-sm">
            Gérez vos finances simplement.
          </p>
        </div>
        <div>
          <AddButton onClick={() => setIsModalOpen(true)}>
            Ajouter une transaction
          </AddButton>
        </div>
      </Container>
      <Dialog
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Nouvelle opération"
      >
        <TransactionForm onSuccess={() => setIsModalOpen(false)} />
      </Dialog>
    </header>
  );
}
