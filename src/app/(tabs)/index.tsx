import { DashboardScreen } from "@/features/dashboard/screens/DashboardScreen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background" edges={["top", "left", "right"]}>
      <DashboardScreen />
    </SafeAreaView>
  );
}
