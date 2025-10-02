// src/components/LinkButton.tsx
import Link from 'next/link';
import { Button, type buttonVariants } from '@/components/ui/button';

type Props = React.PropsWithChildren<{
  href: string;
  target?: string;
  rel?: string;
  variant?: React.ComponentProps<typeof Button>['variant'];
  size?: React.ComponentProps<typeof Button>['size'];
}>;

export default function LinkButton({
  href,
  target = '_blank',
  rel = 'noopener noreferrer',
  variant = 'outline',
  size = 'default',
  children,
}: Props) {
  return (
    <Button asChild variant={variant} size={size}>
      <Link href={href} target={target} rel={rel}>
        {children}
      </Link>
    </Button>
  );
}
