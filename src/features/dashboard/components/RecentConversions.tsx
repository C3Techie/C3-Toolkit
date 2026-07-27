import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { View } from "react-native";

type RecentConversionsProps = {
  onViewHistory: () => void;
};

export function RecentConversions({ onViewHistory }: RecentConversionsProps) {
  return (
    <View className="bg-surface-container-low dark:bg-surface-container border border-outline-variant/30 dark:border-outline-variant/40 rounded-[24px] p-6 flex-row items-center justify-between gap-4">
      <View className="flex-1">
        <Text variant="sectionHeading" className="text-on-surface">
          Recent Conversions
        </Text>
        <Text variant="bodyMd" className="text-on-surface-variant mt-1">
          Pick up where you left off
        </Text>
      </View>
      <Button variant="default" size="sm" onPress={onViewHistory}>
        <Text>View History</Text>
      </Button>
    </View>
  );
}
