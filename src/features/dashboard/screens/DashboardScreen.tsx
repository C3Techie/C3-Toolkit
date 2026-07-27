import { useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
import { DashboardHeader } from "../components/DashboardHeader";
import { EmptyState } from "../components/EmptyState";
import { RecentConversions } from "../components/RecentConversions";
import { ToolGrid } from "../components/ToolGrid";
import { UpgradeCard } from "../components/UpgradeCard";
import { TOOLS, type Tool } from "../data/tools";

export function DashboardScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return TOOLS;
    return TOOLS.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const handleToolPress = (_tool: Tool) => {
  };

  const handleViewHistory = () => {
  };

  const handleUpgrade = () => {
  };

  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerClassName="px-5 pt-6 pb-24"
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <DashboardHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {filteredTools.length === 0 ? (
        <EmptyState query={searchQuery} />
      ) : (
        <>
          <ToolGrid tools={filteredTools} onToolPress={handleToolPress} />

          <View className="mt-10 gap-4">
            <RecentConversions onViewHistory={handleViewHistory} />
            <UpgradeCard onUpgrade={handleUpgrade} />
          </View>
        </>
      )}
    </ScrollView>
  );
}
