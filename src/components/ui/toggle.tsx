import { Icon } from '@/components/ui/icon';
import { TextClassContext } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import * as TogglePrimitive from '@rn-primitives/toggle';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Platform } from 'react-native';

const toggleVariants = cva(
  cn(
    'group flex flex-row items-center justify-center gap-2 rounded-xl transition-all',
    Platform.select({
      web: 'focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex cursor-default whitespace-nowrap outline-none transition-[color,box-shadow] focus-visible:ring-[3px] disabled:pointer-events-none [&_svg]:pointer-events-none',
    })
  ),
  {
    variants: {
      variant: {
        default: 'bg-transparent active:bg-muted dark:active:bg-surface-container',
        outline: cn(
          'border-outline active:bg-accent border bg-transparent shadow-none',
          Platform.select({
            web: 'hover:bg-accent hover:text-accent-foreground',
          })
        ),
      },
      size: {
        default: 'h-12 min-w-12 px-4',
        sm: 'h-9 min-w-9 px-3 rounded-lg',
        lg: 'h-14 min-w-14 px-6 rounded-2xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>) {
  return (
    <TextClassContext.Provider
      value={cn(
        'text-sm font-semibold transition-colors',
        props.pressed ? 'text-on-primary-container' : 'text-on-surface-variant group-active:text-on-surface'
      )}>
      <TogglePrimitive.Root
        className={cn(
          toggleVariants({ variant, size }),
          props.disabled && 'opacity-50',
          props.pressed
            ? 'bg-primary-container shadow-sm'
            : 'bg-surface-container-low dark:bg-surface-container',
          className
        )}
        {...props}
      />
    </TextClassContext.Provider>
  );
}

function ToggleIcon({ className, ...props }: React.ComponentProps<typeof Icon>) {
  const textClass = React.useContext(TextClassContext);
  return <Icon className={cn('size-4 shrink-0', textClass, className)} {...props} />;
}

export { Toggle, ToggleIcon, toggleVariants };

