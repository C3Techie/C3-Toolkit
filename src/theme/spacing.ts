import type { SpacingTokens } from "./types";

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,

  layout: {
    containerPadding: 20,
    gutter: 16,
    mobileMargin: 16,
    desktopMargin: 48,
    maxWidth: 1280,
  },
} as const satisfies SpacingTokens;
