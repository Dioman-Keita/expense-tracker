import Container from "./container";
import { AddButton } from "@components/ui/button";

export default function Header() {
  return (
    <header className="sticky top z-50 bg-white/80 backdrop-blur-md mt-6 ml-20">
      <Container className="flex items-center justify-between gap-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
            Tableau de bord
          </h1>
          <p className="text-zinc-500">Gérez vos finances simplement.</p>
        </div>
        <div>
          <AddButton>Ajouter une transaction</AddButton>
        </div>
      </Container>
    </header>
  );
}
