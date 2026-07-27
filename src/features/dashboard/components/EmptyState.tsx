import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { SearchX } from "lucide-react-native";
import { View } from "react-native";

type EmptyStateProps = {
  query: string;
};

export function EmptyState({ query }: EmptyStateProps) {
  return (
    <View className="flex-1 items-center justify-center py-20 gap-4">
      <Icon as={SearchX} size={48} className="text-outline" />
      <Text variant="titleLg" className="text-on-surface text-center">
        No results found
      </Text>
      <Text variant="bodyMd" className="text-on-surface-variant text-center">
        No tools match &quot;{query}&quot;. Try a different search term.
      </Text>
    </View>
  );
}
