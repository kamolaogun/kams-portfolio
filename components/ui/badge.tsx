import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "blue";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-2.5 py-1",
        {
          "bg-zinc-800 text-zinc-300": variant === "default",
          "border border-zinc-700 text-zinc-400": variant === "outline",
          "bg-blue-950 text-blue-300 border border-blue-800": variant === "blue",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
