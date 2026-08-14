import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const btnVariants = cva(
  "relative inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        hero: "bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-elegant)] hover:-translate-y-0.5 hover:brightness-110",
        ghostGlass:
          "glass text-foreground hover:border-primary/50 hover:-translate-y-0.5 hover:shadow-[var(--glow-red)]",
        outline:
          "border border-primary/50 text-foreground hover:bg-primary/10 hover:-translate-y-0.5",
        subtle: "bg-secondary text-secondary-foreground hover:bg-accent",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-7 text-sm",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: { variant: "hero", size: "md" },
  },
);

export function Btn({
  className,
  variant,
  size,
  asChild,
  ...props
}: ComponentProps<"button"> & VariantProps<typeof btnVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(btnVariants({ variant, size }), className)} {...props} />;
}