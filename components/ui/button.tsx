import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:pointer-events-none disabled:opacity-50 rounded-lg",
          {
            "bg-zinc-50 text-zinc-900 hover:bg-white": variant === "primary",
            "bg-transparent text-zinc-300 border border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600 hover:text-zinc-100":
              variant === "secondary",
            "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800":
              variant === "ghost",
            "border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100":
              variant === "outline",
          },
          {
            "text-sm px-3.5 py-2": size === "sm",
            "text-sm px-5 py-2.5": size === "md",
            "text-base px-6 py-3": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
