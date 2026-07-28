import { Text } from "@/components/ui/text";
import { colors } from "@/theme";
import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { Pressable, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AgeTab() {
  const scheme = useColorScheme() === "dark" ? "dark" : "light";
  const theme = colors[scheme];

  return (
    <SafeAreaView className="flex-1 bg-background" edges={["top", "left", "right"]}>
      <View className="flex-row items-center px-4 h-14">
        <Pressable
          onPress={() => router.back()}
          className="p-2 rounded-full active:bg-surface-container-high"
          accessibilityLabel="Go back"
        >
          <ChevronLeft size={24} color={theme.onSurface} />
        </Pressable>
        <Text variant="titleLg" className="flex-1 text-center text-primary mr-10">
          Age Calculator
        </Text>
      </View>

      <View className="flex-1 items-center justify-center gap-2 px-5">
        <Text variant="headlineMd" className="text-on-surface">
          Age Calculator
        </Text>
        <Text variant="bodyMd" className="text-on-surface-variant text-center">
          Coming soon.
        </Text>
      </View>
    </SafeAreaView>
  );
}
