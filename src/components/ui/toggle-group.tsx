import { Icon } from '@/components/ui/icon';
import { TextClassContext } from '@/components/ui/text';
import { toggleVariants } from '@/components/ui/toggle';
import { cn } from '@/lib/utils';
import * as ToggleGroupPrimitive from '@rn-primitives/toggle-group';
import type { VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Platform } from 'react-native';

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({});

function ToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <ToggleGroupPrimitive.Root
      className={cn(
        'flex flex-row items-center rounded-xl shadow-none',
        Platform.select({ web: 'w-fit' }),
        variant === 'outline' && 'shadow-sm shadow-black/5',
        className
      )}
      {...props}>
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
}

function useToggleGroupContext() {
  return React.useContext(ToggleGroupContext);
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  isFirst,
  isLast,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants> & {
    isFirst?: boolean;
    isLast?: boolean;
  }) {
  const context = useToggleGroupContext();
  const { value } = ToggleGroupPrimitive.useRootContext();

  return (
    <TextClassContext.Provider
      value={cn(
        'text-sm text-foreground font-medium',
        ToggleGroupPrimitive.utils.getIsSelected(value, props.value)
          ? 'text-accent-foreground'
          : Platform.select({ web: 'group-hover:text-on-surface-variant' })
      )}>
      <ToggleGroupPrimitive.Item
        className={cn(
          toggleVariants({
            variant: context.variant ?? variant,
            size: context.size ?? size,
          }),
          props.disabled && 'opacity-50',
          ToggleGroupPrimitive.utils.getIsSelected(value, props.value) && 'bg-surface-container-high dark:bg-surface-container-highest',
          'min-w-0 shrink-0 rounded-none shadow-none',
          isFirst && 'rounded-l-xl',
          isLast && 'rounded-r-xl',
          (context.variant === 'outline' || variant === 'outline') && 'border-l-0',
          (context.variant === 'outline' || variant === 'outline') && isFirst && 'border-l',
          Platform.select({
            web: 'flex-1 focus:z-10 focus-visible:z-10',
          }),
          className
        )}
        {...props}>
        {children}
      </ToggleGroupPrimitive.Item>
    </TextClassContext.Provider>
  );
}

function ToggleGroupIcon({ className, ...props }: React.ComponentProps<typeof Icon>) {
  const textClass = React.useContext(TextClassContext);
  return <Icon className={cn('size-4 shrink-0', textClass, className)} {...props} />;
}

export { ToggleGroup, ToggleGroupIcon, ToggleGroupItem };

