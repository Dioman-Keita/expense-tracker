import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@lib/utils";

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-xl border border-solid border-zinc-300 bg-white px-4 py-2 text-sm transition-all",
        "placeholder:text-zinc-400 hover:border-zinc-400",
        "focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900 outline-none",
        className,
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";
