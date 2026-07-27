import { View } from "react-native";
import type { Tool } from "../data/tools";
import { ToolCard } from "./ToolCard";

type ToolGridProps = {
  tools: Tool[];
  onToolPress: (tool: Tool) => void;
};

export function ToolGrid({ tools, onToolPress }: ToolGridProps) {
  return (
    <View className="gap-4">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} onPress={onToolPress} />
      ))}
    </View>
  );
}
