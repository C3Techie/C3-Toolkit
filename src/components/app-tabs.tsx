import { colors } from "@/theme";
import { NativeTabs } from "expo-router/unstable-native-tabs";
import { useColorScheme } from "react-native";

const HOME_ICON = require("@/assets/images/tabIcons/home.png");

export default function AppTabs() {
  const scheme = useColorScheme() === "dark" ? "dark" : "light";
  const theme = colors[scheme];

  return (
    <NativeTabs
      backgroundColor={theme.background}
      indicatorColor={theme.surfaceContainer}
      labelStyle={{
        selected: {
          color: theme.onSurface,
        },
      }}
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>

        <NativeTabs.Trigger.Icon src={HOME_ICON} renderingMode="template" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
