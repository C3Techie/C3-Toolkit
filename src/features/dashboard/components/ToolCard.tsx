import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { colors } from "@/theme";
import { ArrowRight } from "lucide-react-native";
import { Pressable, View, useColorScheme } from "react-native";
import type { Tool, ToolAccentColor } from "../data/tools";

const ACCENT_ICON_BG: Record<ToolAccentColor, string> = {
  primary: "bg-primary-container dark:bg-surface-container-high",
  secondary: "bg-secondary-container dark:bg-surface-container-high",
  tertiary: "bg-tertiary-container dark:bg-surface-container-high",
  neutral: "bg-surface-container-highest dark:bg-surface-container-high",
};

const ACCENT_BLOB_COLOR: Record<ToolAccentColor, string> = {
  primary: "bg-primary/5 dark:bg-primary/8",
  secondary: "bg-secondary/5 dark:bg-secondary/8",
  tertiary: "bg-tertiary/5 dark:bg-tertiary/8",
  neutral: "bg-on-surface/5 dark:bg-on-surface/8",
};

const ACCENT_CTA_CLASS: Record<ToolAccentColor, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
  neutral: "text-on-surface-variant",
};

type ToolCardProps = {
  tool: Tool;
  onPress: (tool: Tool) => void;
};

export function ToolCard({ tool, onPress }: ToolCardProps) {
  const scheme = useColorScheme() === "dark" ? "dark" : "light";
  const isDark = scheme === "dark";
  const theme = colors[scheme];

  const iconColor: Record<ToolAccentColor, string> = {
    primary: isDark ? theme.primary : theme.onPrimary,
    secondary: isDark ? theme.secondary : theme.onSecondary,
    tertiary: isDark ? theme.tertiary : theme.onTertiary,
    neutral: theme.onSurfaceVariant,
  };

  const ctaColor: Record<ToolAccentColor, string> = {
    primary: theme.primary,
    secondary: theme.secondary,
    tertiary: theme.tertiary,
    neutral: theme.onSurfaceVariant,
  };

  return (
    <Pressable
      onPress={() => onPress(tool)}
      className="bg-surface-container-lowest dark:bg-surface-container-low rounded-[24px] p-6 border border-outline-variant/50 dark:border-outline-variant/50 overflow-hidden"
      style={({ pressed }) => ({
        opacity: pressed ? 0.9 : 1,
        transform: [{ scale: pressed ? 0.98 : 1 }],
      })}
    >
      <View
        className={cn(
          "absolute top-0 right-0 w-32 h-32 rounded-bl-full",
          ACCENT_BLOB_COLOR[tool.accent]
        )}
      />

      <View
        className={cn(
          "w-14 h-14 rounded-2xl items-center justify-center mb-5",
          ACCENT_ICON_BG[tool.accent]
        )}
      >
        <Icon
          as={tool.icon}
          size={24}
          color={iconColor[tool.accent]}
        />
      </View>

      <Text variant="titleLg" className="text-on-surface mb-2">
        {tool.title}
      </Text>

      <Text variant="bodySm" className="text-on-surface-variant" numberOfLines={3}>
        {tool.description}
      </Text>

      <View className="mt-5 flex-row items-center gap-1.5">
        <Text
          variant="bodySm"
          className={cn("font-semibold", ACCENT_CTA_CLASS[tool.accent])}
        >
          Open Tool
        </Text>
        <Icon
          as={ArrowRight}
          size={14}
          color={ctaColor[tool.accent]}
        />
      </View>
    </Pressable>
  );
}
