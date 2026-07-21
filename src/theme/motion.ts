import { Easing } from "react-native-reanimated";
import type { MotionTokens } from "./types";

export const motion = {
  duration: {
    fast: 150,
    normal: 250,
    slow: 400,
  },

  splash: {
    dotBounceHeight: -8,
    dotDelay: 150,
    glowScale: 1.08,
    glowDuration: 1600,
    logoSize: 128,
    logoScaleStart: 0.85,
    messageInterval: 700,
    exitDelay: 2200,
    completeDelay: 2700,
    ambientBlobOffset: "-10%",
    ambientBlobSize: "50%",
  },

  easing: {
    standard: Easing.bezier(0.2, 0, 0, 1),
    decelerate: Easing.bezier(0, 0, 0.2, 1),
    accelerate: Easing.bezier(0.3, 0, 1, 1),
  },

  spring: {
    default: {
      damping: 20,
      stiffness: 300,
      mass: 1,
    },

    bouncy: {
      damping: 12,
      stiffness: 400,
      mass: 0.8,
    },

    gentle: {
      damping: 28,
      stiffness: 250,
      mass: 1.2,
    },
  },
} as const satisfies MotionTokens;
