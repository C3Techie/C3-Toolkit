import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    type Option,
} from "@/components/ui/select";
import { Text } from "@/components/ui/text";
import { View } from "react-native";
import type { Unit } from "../../types";

type UnitSelectProps = {
  label: string;
  units: Unit[];
  selected: Unit;
  onSelect: (unit: Unit) => void;
};

export function UnitSelect({ label, units, selected, onSelect }: UnitSelectProps) {
  const value: Option = {
    value: selected.id,
    label: `${selected.label} (${selected.symbol})`,
  };

  function handleChange(option: Option | undefined) {
    if (!option) return;
    const unit = units.find((u) => u.id === option.value);
    if (unit) onSelect(unit);
  }

  return (
    <View className="gap-1.5">
      <Text variant="labelSm" className="text-on-surface-variant uppercase tracking-wider">
        {label}
      </Text>
      <Select value={value} onValueChange={handleChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select unit" />
        </SelectTrigger>
        <SelectContent>
          {units.map((unit) => (
            <SelectItem key={unit.id} value={unit.id} label={`${unit.label} (${unit.symbol})`}>
              {unit.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </View>
  );
}
