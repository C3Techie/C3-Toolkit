import { colors, icons } from "@/theme";
import { Tabs } from "expo-router";
import { useColorScheme, View } from "react-native";

export default function TabsLayout() {
  const scheme = useColorScheme() === "dark" ? "dark" : "light";
  const theme = colors[scheme];

  const HomeIcon = icons.home;
  const HistoryIcon = icons.history;
  const SettingsIcon = icons.settings;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.surfaceContainer,
          borderTopColor: theme.outlineVariant,
          borderTopWidth: 1,
        },
        tabBarBackground: () => (
          <View
            style={{
              flex: 1,
              backgroundColor: theme.surfaceContainer,
            }}
          />
        ),
        tabBarActiveTintColor: theme.onSurface,
        tabBarInactiveTintColor: theme.onSurfaceVariant,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
      }}
    >
      {/* Visible tabs */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <HomeIcon size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color, size }) => <HistoryIcon size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => <SettingsIcon size={size} color={color} />,
        }}
      />

      {/* Tool screens — tab bar stays visible, no tab item shown */}
      <Tabs.Screen name="converter" options={{ tabBarItemStyle: { display: "none" } }} />
      <Tabs.Screen name="bmi" options={{ tabBarItemStyle: { display: "none" } }} />
      <Tabs.Screen name="age" options={{ tabBarItemStyle: { display: "none" } }} />
      <Tabs.Screen name="tip" options={{ tabBarItemStyle: { display: "none" } }} />
    </Tabs>
  );
}
