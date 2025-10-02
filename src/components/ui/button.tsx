// src/components/ui/button.tsx
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-ring)]/50',
  {
    variants: {
      variant: {
        // Primary = Midnight
        default:
          'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:brightness-110',
        // Destructive (kept)
        destructive:
          'bg-[var(--color-destructive)] text-[var(--color-destructive-foreground)] hover:brightness-110',
        // Outline (neutral)
        outline:
          'border border-[--color-border] bg-[var(--color-background)] text-[var(--color-foreground)] hover:bg-ink/5',
        // Secondary = **Slate**
        slate:
          'bg-[var(--color-slate)] text-[var(--color-porcelain)] hover:brightness-110',
        // Ghost (minimal)
        ghost: 'bg-transparent hover:bg-ink/5 text-[var(--color-foreground)]',
        // Link style (text-only)
        link: 'text-[var(--color-primary)] underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-lg px-3',
        lg: 'h-10 rounded-xl px-6',
        icon: 'size-9 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
