import { TextClassContext } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { Slot } from '@rn-primitives/slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Platform, View } from 'react-native';

const badgeVariants = cva(
  cn(
    'group shrink-0 flex-row items-center justify-center gap-1 overflow-hidden rounded-full px-4 py-1.5 border border-transparent',
    Platform.select({
      web: 'focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive w-fit whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3.5',
    })
  ),
  {
    variants: {
      variant: {
        default: cn(
          'bg-primary-container border-transparent',
          Platform.select({ web: '[a&]:hover:opacity-95' })
        ),
        secondary: cn(
          'bg-secondary-container border-transparent',
          Platform.select({ web: '[a&]:hover:opacity-95' })
        ),
        destructive: cn(
          'bg-error/10 border-error/25 border',
          Platform.select({ web: '[a&]:hover:bg-error/15' })
        ),
        outline: cn(
          'border-outline bg-surface text-on-surface dark:border-outline-variant/30',
          Platform.select({ web: '[a&]:hover:bg-accent [a&]:hover:text-accent-foreground' })
        ),
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const badgeTextVariants = cva('text-xs font-semibold uppercase tracking-wider', {
  variants: {
    variant: {
      default: 'text-on-primary-container',
      secondary: 'text-on-secondary-container',
      destructive: 'text-error dark:text-error',
      outline: 'text-on-surface dark:text-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type BadgeProps = React.ComponentProps<typeof View> & {
  asChild?: boolean;
} & VariantProps<typeof badgeVariants>;

function Badge({ className, variant, asChild, ...props }: BadgeProps) {
  const Component = asChild ? Slot : View;
  return (
    <TextClassContext.Provider value={badgeTextVariants({ variant })}>
      <Component className={cn(badgeVariants({ variant }), className)} {...props} />
    </TextClassContext.Provider>
  );
}

export { Badge, badgeTextVariants, badgeVariants };
export type { BadgeProps };

