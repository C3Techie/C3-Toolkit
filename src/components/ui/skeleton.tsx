import { cn } from '@/lib/utils';
import { View } from 'react-native';

function Skeleton({ className, ...props }: React.ComponentProps<typeof View>) {
  return (
    <View
      className={cn(
        'bg-surface-container-high dark:bg-surface-container-highest animate-pulse rounded-lg',
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };

