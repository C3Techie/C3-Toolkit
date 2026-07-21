import { colors } from "@/theme";
import { DarkTheme, DefaultTheme } from "expo-router/react-navigation";

export const NAV_THEME = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.light.background,
      border: colors.light.outlineVariant,
      card: colors.light.surface,
      notification: colors.light.error,
      primary: colors.light.primary,
      text: colors.light.onSurface,
    },
  },

  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: colors.dark.background,
      border: colors.dark.outlineVariant,
      card: colors.dark.surface,
      notification: colors.dark.error,
      primary: colors.dark.primary,
      text: colors.dark.onSurface,
    },
  },
};
