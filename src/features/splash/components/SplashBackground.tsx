import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Platform, StyleSheet, useColorScheme, View } from "react-native";

import { colors } from "@/theme";

export function SplashBackground({ children }: { children?: React.ReactNode }) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const c = colors[isDark ? "dark" : "light"];

  if (Platform.OS === "web") {
    const backgroundImage = isDark
      ? `radial-gradient(circle at center, ${c.surfaceBright} 0%, ${c.background} 100%)`
      : `linear-gradient(135deg, ${c.background} 0%, ${c.primaryFixed} 100%)`;

    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          {
            backgroundImage,
          } as any,
        ]}
      >
        {children}
      </View>
    );
  }

  const gradientColors: [string, string] = isDark
    ? [c.surfaceBright, c.background]
    : [c.background, c.primaryFixed];

  return (
    <LinearGradient
      colors={gradientColors}
      style={StyleSheet.absoluteFill}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      {children}
    </LinearGradient>
  );
}
