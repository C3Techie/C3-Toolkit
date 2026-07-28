import { Text } from "@/components/ui/text";
import { View } from "react-native";
import type { Unit } from "../../types";

type ResultDisplayProps = {
  result: string | null;
  unit: Unit;
};

export function ResultDisplay({ result, unit }: ResultDisplayProps) {
  return (
    <View className="gap-1.5">
      <Text variant="labelSm" className="text-on-surface-variant uppercase tracking-wider">
        Result
      </Text>
      <View className="h-14 bg-surface-container-low dark:bg-surface-container border border-outline-variant/30 rounded-[12px] px-4 justify-center">
        {result !== null ? (
          <Text variant="titleLg" className="text-on-surface font-semibold">
            {result}{" "}
            <Text variant="bodySm" className="text-on-surface-variant">
              {unit.symbol}
            </Text>
          </Text>
        ) : (
          <Text variant="bodySm" className="text-outline/50">
            Result will appear here
          </Text>
        )}
      </View>
    </View>
  );
}
