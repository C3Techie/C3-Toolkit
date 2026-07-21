import "../global.css";

import { PortalHost } from "@rn-primitives/portal";
import { ThemeProvider } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { Platform, useColorScheme } from "react-native";

import AppTabs from "@/components/app-tabs";
import { SplashScreen as AppSplashScreen } from "@/features/splash/screens/SplashScreen";
import { NAV_THEME } from "@/lib/navigation-theme";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    if (Platform.OS !== "web") return;
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <ThemeProvider value={NAV_THEME[isDark ? "dark" : "light"]}>
      {splashVisible && (
        <AppSplashScreen onAnimationComplete={() => setSplashVisible(false)} />
      )}
      <AppTabs />
      <PortalHost />
    </ThemeProvider>
  );
}
