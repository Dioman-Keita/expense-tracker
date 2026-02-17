"use client";

import { useFormStatus } from "react-dom";
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import { cn } from "@lib/utils";
import {
  Loader2,
  Plus,
  Trash2,
  ArrowUpCircle,
  ArrowDownCircle,
  Download,
} from "lucide-react";

type Variant = "default" | "expense" | "income" | "ghost" | "danger";
type Size = "sm" | "md" | "lg" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      size = "md",
      className,
      isLoading,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const { pending } = useFormStatus();
    const activeLoading = isLoading || pending;
    const baseStyles =
      "inline-flex items-center justify-center rounded-md transition-all font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variants: Record<Variant, string> = {
      default: "bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-zinc-400",
      expense:
        "bg-red-50 text-red-600 border boder-red-200 hover:bg-red-100 focus:ring-red-400",
      income:
        "bg-emerald-600 text-emerald-600 border border-emerald-200 hover:bg-emerald-100 focus:ring-emerald-500 focus:ring-emerald-500 focus:ring-emerald-400",
      danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",

      ghost:
        "bg-transparent hover:bg-zinc-100 text-zinc-600 focus:ring-zinc-200",
    };

    const sizes: Record<Size, string> = {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 text-sm",
      lg: "h-12 px-6 text-base",
      icon: "h-10 w-10", // For buttons with just an icon
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={activeLoading || disabled}
        {...props}
      >
        {activeLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            {leftIcon && <span className="flex-shirnk-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="flex-shirnk-0">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export const AddButton = (props: ButtonProps) => (
  <Button variant="default" leftIcon={<Plus size={18} />} {...props}>
    {props.children || "Add"}
  </Button>
);

export const DeleteButton = (props: ButtonProps) => (
  <Button
    variant="ghost"
    className="text-red-500 hover:bg-red-50"
    size="sm"
    {...props}
  >
    <Trash2 size={16} />
  </Button>
);

export const IncomeButton = (props: ButtonProps) => (
  <Button variant="income" leftIcon={<ArrowUpCircle size={18} />} {...props} />
);

export const ExpenseButton = (props: ButtonProps) => (
  <Button
    variant="expense"
    leftIcon={<ArrowDownCircle size={18} />}
    {...props}
  />
);

export const ExportButton = (props: ButtonProps) => (
  <Button variant="ghost" leftIcon={<Download size={18} />} {...props}>
    Export
  </Button>
);

export default Button;
