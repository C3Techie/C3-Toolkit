import { cn } from "@/lib/utils";
import { colors } from "@/theme";
import {
    FlaskConical,
    Ruler,
    Scale,
    Thermometer,
} from "lucide-react-native";
import { Pressable, Text, useColorScheme } from "react-native";
import type { Category } from "../../types";

const CATEGORY_ICON = {
  length: Ruler,
  weight: Scale,
  temperature: Thermometer,
  volume: FlaskConical,
} as const;

type CategoryChipProps = {
  category: Category;
  isActive: boolean;
  onPress: (id: string) => void;
};

export function CategoryChip({ category, isActive, onPress }: CategoryChipProps) {
  const scheme = useColorScheme() === "dark" ? "dark" : "light";
  const theme = colors[scheme];

  const IconComponent =
    CATEGORY_ICON[category.id as keyof typeof CATEGORY_ICON] ?? Ruler;

  const activeColor = theme.onPrimaryContainer;
  const inactiveColor = theme.onSurfaceVariant;
  const iconColor = isActive ? activeColor : inactiveColor;

  return (
    <Pressable
      onPress={() => onPress(category.id)}
      className={cn(
        "flex-row items-center gap-1.5 px-4 py-2 rounded-full",
        isActive
          ? "bg-primary-container"
          : "bg-surface-container active:bg-surface-container-high",
      )}
      style={({ pressed }) => ({ opacity: pressed ? 0.85 : 1 })}
    >
      <IconComponent size={16} color={iconColor} />
      <Text
        style={{
          color: isActive ? activeColor : inactiveColor,
          fontSize: 14,
          fontWeight: "600",
        }}
      >
        {category.label}
      </Text>
    </Pressable>
  );
}
