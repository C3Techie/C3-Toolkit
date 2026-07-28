import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { RefreshCw } from "lucide-react-native";
import { View } from "react-native";
import type { Unit } from "../../types";
import { ResultDisplay } from "./ResultDisplay";
import { SwapButton } from "./SwapButton";
import { UnitSelect } from "./UnitSelect";
import { ValueInput } from "./ValueInput";

type ConverterCardProps = {
  units: Unit[];
  fromUnit: Unit;
  toUnit: Unit;
  inputValue: string;
  inputError: string | null;
  isInputValid: boolean;
  result: string | null;
  onFromUnitChange: (unit: Unit) => void;
  onToUnitChange: (unit: Unit) => void;
  onInputChange: (value: string) => void;
  onSwap: () => void;
  onConvert: () => void;
};

export function ConverterCard({
  units,
  fromUnit,
  toUnit,
  inputValue,
  inputError,
  isInputValid,
  result,
  onFromUnitChange,
  onToUnitChange,
  onInputChange,
  onSwap,
  onConvert,
}: ConverterCardProps) {
  return (
    <View className="bg-surface-container-lowest dark:bg-surface-container-low rounded-[24px] p-6 gap-5 border border-outline-variant/30 dark:border-outline-variant/20">
      <View className="gap-3">
        <UnitSelect
          label="From"
          units={units}
          selected={fromUnit}
          onSelect={onFromUnitChange}
        />
        <ValueInput value={inputValue} onChange={onInputChange} error={inputError} />
      </View>

      <SwapButton onPress={onSwap} />

      <View className="gap-3">
        <UnitSelect
          label="To"
          units={units}
          selected={toUnit}
          onSelect={onToUnitChange}
        />
        <ResultDisplay result={result} unit={toUnit} />
      </View>

      <Button
        onPress={onConvert}
        disabled={!isInputValid}
        className="w-full h-14 mt-1"
      >
        <Text className="text-primary-foreground font-semibold text-base">Convert</Text>
        <Icon as={RefreshCw} size={18} className="text-primary-foreground" />
      </Button>
    </View>
  );
}
