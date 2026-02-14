import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "data", "transactions.json");

export async function readFile(): Promise<any[]> {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function writeFile(data: any[]): Promise<void> {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}
