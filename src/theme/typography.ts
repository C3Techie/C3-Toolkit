import type { TypographyTokens } from "./types";

export const typography = {
  display: {
    xl: {
      fontFamily: "Inter",
      fontSize: 48,
      fontWeight: "700" as const,
      lineHeight: 56,
      letterSpacing: -0.02,
    },

    lg: {
      fontFamily: "Inter",
      fontSize: 32,
      fontWeight: "700" as const,
      lineHeight: 40,
      letterSpacing: -0.01,
    },

    lgMobile: {
      fontFamily: "Inter",
      fontSize: 24,
      fontWeight: "700" as const,
      lineHeight: 32,
    },
  },

  headline: {
    md: {
      fontFamily: "Inter",
      fontSize: 24,
      fontWeight: "600" as const,
      lineHeight: 32,
    },
  },

  title: {
    lg: {
      fontFamily: "Inter",
      fontSize: 22,
      fontWeight: "600" as const,
      lineHeight: 28,
    },
  },

  section: {
    heading: {
      fontFamily: "Inter",
      fontSize: 18,
      fontWeight: "600" as const,
      lineHeight: 24,
    },
  },

  body: {
    lg: {
      fontFamily: "Inter",
      fontSize: 18,
      fontWeight: "400" as const,
      lineHeight: 28,
    },

    md: {
      fontFamily: "Inter",
      fontSize: 16,
      fontWeight: "400" as const,
      lineHeight: 24,
    },

    sm: {
      fontFamily: "Inter",
      fontSize: 14,
      fontWeight: "400" as const,
      lineHeight: 20,
    },
  },

  label: {
    md: {
      fontFamily: "Inter",
      fontSize: 14,
      fontWeight: "600" as const,
      lineHeight: 16,
      letterSpacing: 0.01,
    },

    sm: {
      fontFamily: "Inter",
      fontSize: 12,
      fontWeight: "500" as const,
      lineHeight: 14,
    },
  },

  button: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "600" as const,
    lineHeight: 24,
  },
} as const satisfies TypographyTokens;
