import Link from "next/link";
import Button from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  if (totalPages <= 1) return null;
  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      <Link
        href={`/transactions?page=${currentPage - 1}`}
        className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}
      >
        <Button variant="ghost" size="sm" leftIcon={<ChevronLeft size={16} />}>
          Précédent
        </Button>
      </Link>
      <Link
        href={`/transactions?page=${currentPage + 1}`}
        className={currentPage >= totalPages ? "pointer-events-none" : ""}
      >
        <Button
          variant="ghost"
          size="sm"
          rightIcon={<ChevronRight size={16} />}
        >
          Suivant
        </Button>
      </Link>
    </div>
  );
}
