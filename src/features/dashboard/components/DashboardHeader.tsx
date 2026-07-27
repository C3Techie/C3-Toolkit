import { View } from "react-native";
import { Greeting } from "./Greeting";
import { SearchBar } from "./SearchBar";

type DashboardHeaderProps = {
  searchQuery: string;
  onSearchChange: (text: string) => void;
};

export function DashboardHeader({
  searchQuery,
  onSearchChange,
}: DashboardHeaderProps) {
  return (
    <View className="mb-6 gap-4">
      <Greeting />
      <SearchBar value={searchQuery} onChangeText={onSearchChange} />
    </View>
  );
}
