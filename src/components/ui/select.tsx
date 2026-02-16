import { SelectHTMLAttributes, forwardRef } from "react";
import { cn } from "@lib/utils";

export const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => {
  return (
    <select
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-xl border border-zinc-300 bg-white px-4 py-2 txt-sm transiion-all",
        "focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900 outline-none cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
});

Select.displayName = "Select";
