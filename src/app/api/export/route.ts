import { NextResponse } from "next/server";
import { getAllTransactions } from "@features/transactions/services/transaction.service";

export async function GET() {
  try {
    const transactions = await getAllTransactions();

    // 1. Définir les colonnes
    const headers = [
      "Date",
      "Libelle",
      "Montant",
      "Type",
      "Categorie",
      "Description",
    ];

    // 2. Transformer les données en lignes CSV
    const rows = transactions.map((t) => [
      new Date(t.date).toLocaleDateString("fr-FR"),
      `"${t.label ? t.label.replace(/"/g, '""') : ""}"`, // On échappe les guillemets
      t.amount,
      t.type === "income" ? "Revenu" : "Depense",
      t.category,
      `"${(t as any).description?.replace(/"/g, '""') || ""}"`,
    ]);

    // 3. Assembler le contenu
    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");

    // 4. Retourner le fichier avec les bons headers pour le navigateur
    return new NextResponse(csvContent, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": 'attachment; filename="export_transactions.csv"',
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de l'export" },
      { status: 500 },
    );
  }
}
