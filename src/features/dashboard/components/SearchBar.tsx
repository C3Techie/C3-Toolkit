import { Icon } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react-native";
import { View } from "react-native";

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  className?: string;
};

export function SearchBar({ value, onChangeText, className }: SearchBarProps) {
  return (
    <View className={cn("relative", className)}>
      <View className="absolute left-4 top-0 bottom-0 justify-center z-10 pointer-events-none">
        <Icon as={Search} size={18} className="text-outline" />
      </View>
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder="Search utilities..."
        className="pl-11"
        returnKeyType="search"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
}
