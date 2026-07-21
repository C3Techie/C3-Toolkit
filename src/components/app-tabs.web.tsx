import { Slot } from "expo-router";
import { Text, View } from "react-native";

export default function AppTabs() {
  return (
    <View className="flex-1 bg-background">
      {/* Active screen content */}
      <Slot />

      {/* Floating bottom nav bar */}
      <View className="absolute bottom-0 w-full p-4 justify-center items-center flex-row z-50 pointer-events-none">
        <View className="bg-surface-container-low border border-outline-variant/20 px-6 py-2 rounded-full flex-row items-center gap-4 shadow-md max-w-lg w-full pointer-events-auto">
          <Text className="font-bold text-sm text-on-surface mr-auto">
            C3 Toolkit
          </Text>
          {/* Nav items will be added here as features are built */}
        </View>
      </View>
    </View>
  );
}
