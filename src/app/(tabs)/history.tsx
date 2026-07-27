import { Text } from "@/components/ui/text";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HistoryScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background items-center justify-center">
      <Text variant="headlineMd" className="text-on-surface">
        History
      </Text>
      <Text className="text-on-surface-variant mt-2">
        Your recent calculations will appear here.
      </Text>
    </SafeAreaView>
  );
}
