import { colors } from "@/theme";
import { ArrowLeftRight } from "lucide-react-native";
import { Pressable, useColorScheme } from "react-native";

type SwapButtonProps = {
  onPress: () => void;
};

export function SwapButton({ onPress }: SwapButtonProps) {
  const scheme = useColorScheme() === "dark" ? "dark" : "light";
  const theme = colors[scheme];

  return (
    <Pressable
      onPress={onPress}
      className="self-center bg-surface-container-high dark:bg-surface-container-highest rounded-full p-3 mt-2"
      style={({ pressed }) => ({
        opacity: pressed ? 0.8 : 1,
        transform: [{ scale: pressed ? 0.92 : 1 }],
      })}
      accessibilityLabel="Swap units"
    >
      <ArrowLeftRight size={20} color={theme.primary} />
    </Pressable>
  );
}
