import { NextResponse } from "next/server";

// Ce GET permet de valider le fichier comme un module Next.js valide
export async function GET() {
  return NextResponse.json(
    { message: "Cette route API n'est pas encore implémentée." },
    { status: 501 },
  );
}

// Optionnel : Tu peux aussi mettre un POST si tu prévois d'en avoir un
export async function POST() {
  return NextResponse.json(
    { message: "Action non implémentée." },
    { status: 501 },
  );
}
