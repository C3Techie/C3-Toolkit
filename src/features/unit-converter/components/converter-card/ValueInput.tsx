import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { View } from "react-native";

type ValueInputProps = {
  value: string;
  onChange: (value: string) => void;
  error?: string | null;
};

export function ValueInput({ value, onChange, error }: ValueInputProps) {
  return (
    <View className="gap-1.5">
      <Text variant="labelSm" className="text-on-surface-variant uppercase tracking-wider">
        Value
      </Text>
      <Input
        value={value}
        onChangeText={onChange}
        keyboardType="decimal-pad"
        placeholder="Enter value"
        className="h-14 text-lg font-semibold"
        returnKeyType="done"
      />
      {error ? (
        <Text variant="labelSm" className="text-error">
          {error}
        </Text>
      ) : null}
    </View>
  );
}
