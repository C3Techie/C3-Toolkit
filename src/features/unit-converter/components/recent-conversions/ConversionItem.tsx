import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { colors } from "@/theme";
import {
    ChevronRight,
    FlaskConical,
    Ruler,
    Scale,
    Thermometer,
} from "lucide-react-native";
import { Pressable, View, useColorScheme } from "react-native";
import type { CategoryId, RecentConversion } from "../../types";
import { formatResult } from "../../utils/conversions";

const CATEGORY_ICON: Record<CategoryId, typeof Ruler> = {
  length: Ruler,
  weight: Scale,
  temperature: Thermometer,
  volume: FlaskConical,
};

type ConversionItemProps = {
  item: RecentConversion;
  onPress?: (item: RecentConversion) => void;
};

export function ConversionItem({ item, onPress }: ConversionItemProps) {
  const scheme = useColorScheme() === "dark" ? "dark" : "light";
  const theme = colors[scheme];

  const CategoryIcon = CATEGORY_ICON[item.categoryId] ?? Ruler;
  const label = `${item.inputValue} ${item.fromUnit.label} → ${item.toUnit.label}`;
  const resultText = `${formatResult(item.resultValue)} ${item.toUnit.symbol}`;

  return (
    <Pressable
      onPress={() => onPress?.(item)}
      className="bg-surface-container-low dark:bg-surface-container rounded-xl px-4 py-3 flex-row items-center justify-between gap-3"
      style={({ pressed }) => ({ opacity: pressed ? 0.8 : 1 })}
    >
      <View className="bg-primary/10 dark:bg-primary/15 p-2 rounded-lg">
        <CategoryIcon size={20} color={theme.primary} />
      </View>

      <View className="flex-1 gap-0.5">
        <Text variant="bodySm" className="text-on-surface font-medium">
          {label}
        </Text>
        <Text variant="labelSm" className="text-on-surface-variant">
          {resultText}
        </Text>
      </View>

      <Icon as={ChevronRight} size={18} className="text-outline-variant" />
    </Pressable>
  );
}
