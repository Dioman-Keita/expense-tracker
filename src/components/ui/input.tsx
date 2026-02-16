import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@lib/utils";

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={
        (cn(
          `flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 text-sm ring-offset-white 
                file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none 
                focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
        ),
        className)
      }
      {...props}
    />
  );
});

Input.displayName = "Input";
