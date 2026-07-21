import type { RadiusTokens } from "./types";

export const radius = {
  sm: 4,
  default: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,

  component: {
    input: 8,
    button: 8,
    chip: 12,
    card: 16,
    sheet: 24,
    dialog: 24,
  },
} as const satisfies RadiusTokens;
