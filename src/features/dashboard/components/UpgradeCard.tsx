import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { Star } from "lucide-react-native";
import { View } from "react-native";

type UpgradeCardProps = {
  onUpgrade: () => void;
};

export function UpgradeCard({ onUpgrade }: UpgradeCardProps) {
  return (
    <View className="bg-surface-container-high dark:bg-surface-container rounded-[24px] p-6 items-center justify-center gap-3 border border-transparent dark:border-outline-variant/30">
      <Icon as={Star} size={32} className="text-primary dark:text-tertiary" />
      <Text variant="bodyMd" className="text-on-surface text-center">
        Upgrade to Pro for advanced features.
      </Text>
      <Button variant="outline" size="sm" onPress={onUpgrade}>
        <Text>Upgrade</Text>
      </Button>
    </View>
  );
}
