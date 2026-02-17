import { TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@lib/utils";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-25 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm transition-all shadow-sm outline-one",
        "placeholder:text-zinc-400 hover:border-zinc-400 focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900",
        className,
      )}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";
