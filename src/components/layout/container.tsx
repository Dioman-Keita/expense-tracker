import { ReactNode } from "react";
import { cn } from "@lib/utils";

interface ContainerProps {
  children: ReactNode;
  className: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-5xl px-4 md:px-6")}>
      {children}
    </div>
  );
}
