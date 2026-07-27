import { Text } from "@/components/ui/text";
import { View } from "react-native";

export function Greeting() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <View className="mb-6">
      <Text variant="headlineLg" className="text-on-surface dark:text-primary">
        {getGreeting()}, User
      </Text>
      <Text variant="bodyMd" className="text-on-surface-variant mt-1">
        What would you like to calculate today?
      </Text>
    </View>
  );
}
