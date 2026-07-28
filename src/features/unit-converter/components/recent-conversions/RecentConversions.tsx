import { Text } from "@/components/ui/text";
import { colors } from "@/theme";
import { router } from "expo-router";
import { History, Trash2 } from "lucide-react-native";
import { Pressable, View, useColorScheme } from "react-native";
import type { RecentConversion } from "../../types";
import { ConversionItem } from "./ConversionItem";

const PREVIEW_COUNT = 5;

type RecentConversionsProps = {
  conversions: RecentConversion[];
  onItemPress?: (item: RecentConversion) => void;
  onClear?: () => void;
};

export function RecentConversions({
  conversions,
  onItemPress,
  onClear,
}: RecentConversionsProps) {
  const scheme = useColorScheme() === "dark" ? "dark" : "light";
  const theme = colors[scheme];

  const displayed = conversions.slice(0, PREVIEW_COUNT);
  const hasMore = conversions.length > PREVIEW_COUNT;

  return (
    <View className="gap-3">
      <View className="flex-row items-center justify-between">
        <Text variant="sectionHeading" className="text-on-surface">
          Recent Conversions
        </Text>
        {conversions.length > 0 && onClear && (
          <Pressable
            onPress={onClear}
            className="flex-row items-center gap-1 px-3 py-1.5 rounded-lg active:bg-surface-container-high"
            style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}
            accessibilityLabel="Clear recent conversions"
          >
            <Trash2 size={14} color={theme.primary} />
            <Text variant="labelSm" style={{ color: theme.primary }} className="font-medium">
              Clear
            </Text>
          </Pressable>
        )}
      </View>

      {conversions.length === 0 ? (
        <EmptyState />
      ) : (
        <View className="gap-2">
          {displayed.map((item) => (
            <ConversionItem key={item.id} item={item} onPress={onItemPress} />
          ))}

          {hasMore && (
            <Pressable
              onPress={() => router.push("/(tabs)/history")}
              className="items-center py-3 rounded-xl active:bg-surface-container"
              style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}
            >
              <Text variant="bodySm" style={{ color: theme.primary }} className="font-semibold">
                {`View All (${conversions.length})`}
              </Text>
            </Pressable>
          )}
        </View>
      )}
    </View>
  );
}

function EmptyState() {
  const scheme = useColorScheme() === "dark" ? "dark" : "light";
  const theme = colors[scheme];

  return (
    <View className="bg-surface-container-low dark:bg-surface-container rounded-xl px-6 py-10 items-center gap-3">
      <View className="bg-surface-container dark:bg-surface-container-high rounded-full p-4">
        <History size={28} color={theme.onSurfaceVariant} />
      </View>
      <Text variant="bodyMd" className="text-on-surface-variant text-center">
        No recent conversions yet.{"\n"}Convert something to see it here.
      </Text>
    </View>
  );
}
