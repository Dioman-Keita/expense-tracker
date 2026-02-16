import Container from "@components/layout/container";
import Button from "@components/ui/button";
import Link from "next/link";
import { FileQuestion, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full" />
        <div className="relative bg-zinc-300 p-6 rounded-3xl border border-zinc-800 shadow-2xl">
          <FileQuestion size={48} className="text-emeral-400" />
        </div>
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 mb-2">
        404 Page introuvable
      </h1>
      <p className="text-zinc-500 max-w-md mb-8">
        Désolé, nous n'avons pas trouvé la page ou la transaction que vous
        recherchez. Elle a peut-être été déplacée ou supprimée.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/">
          <Button variant="default" leftIcon={<ArrowLeft size={18} />}>
            Retour à l'accueil
          </Button>
        </Link>
        <Link href="/transactions">
          <Button variant="ghost">Voir l'historique</Button>
        </Link>
      </div>
    </Container>
  );
}
