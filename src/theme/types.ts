import type { EasingFunction } from "react-native-reanimated";

export type ThemeMode = "light" | "dark";

export type ColorTokens = {
  surface: string;
  surfaceDim: string;
  surfaceBright: string;
  surfaceContainerLowest: string;
  surfaceContainerLow: string;
  surfaceContainer: string;
  surfaceContainerHigh: string;
  surfaceContainerHighest: string;
  onSurface: string;
  onSurfaceVariant: string;
  inverseSurface: string;
  inverseOnSurface: string;
  outline: string;
  outlineVariant: string;
  surfaceTint: string;
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  inversePrimary: string;
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;
  primaryFixed: string;
  primaryFixedDim: string;
  onPrimaryFixed: string;
  onPrimaryFixedVariant: string;
  secondaryFixed: string;
  secondaryFixedDim: string;
  onSecondaryFixed: string;
  onSecondaryFixedVariant: string;
  tertiaryFixed: string;
  tertiaryFixedDim: string;
  onTertiaryFixed: string;
  onTertiaryFixedVariant: string;
  background: string;
  onBackground: string;
  surfaceVariant: string;
};

export type SpacingTokens = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  layout: {
    containerPadding: number;
    gutter: number;
    mobileMargin: number;
    desktopMargin: number;
    maxWidth: number;
  };
};

type TextStyle = {
  fontFamily: string;
  fontSize: number;
  fontWeight: string;
  lineHeight: number;
  letterSpacing?: number;
};

export type TypographyTokens = {
  display: {
    xl: TextStyle;
    lg: TextStyle;
    lgMobile: TextStyle;
  };
  headline: {
    md: TextStyle;
  };
  title: {
    lg: TextStyle;
  };
  section: {
    heading: TextStyle;
  };
  body: {
    lg: TextStyle;
    md: TextStyle;
    sm: TextStyle;
  };
  label: {
    md: TextStyle;
    sm: TextStyle;
  };
  button: TextStyle;
};

export type RadiusTokens = {
  sm: number;
  default: number;
  md: number;
  lg: number;
  xl: number;
  full: number;
  component: {
    input: number;
    button: number;
    chip: number;
    card: number;
    sheet: number;
    dialog: number;
  };
};

type ShadowLevel = {
  shadowColor: string;
  shadowOffset: { width: number; height: number };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
};

export type ShadowTokens = {
  level0: ShadowLevel;
  level1: ShadowLevel;
  level2: ShadowLevel;
  level3: ShadowLevel;
};

export type MotionTokens = {
  duration: {
    fast: number;
    normal: number;
    slow: number;
  };
  splash: {
    dotBounceHeight: number;
    dotDelay: number;
    glowScale: number;
    glowDuration: number;
    logoSize: number;
    logoScaleStart: number;
    messageInterval: number;
    exitDelay: number;
    completeDelay: number;
    ambientBlobOffset: string;
    ambientBlobSize: string;
  };
  easing: {
    standard: EasingFunction | { factory: () => EasingFunction };
    decelerate: EasingFunction | { factory: () => EasingFunction };
    accelerate: EasingFunction | { factory: () => EasingFunction };
  };
  spring: {
    default: { damping: number; stiffness: number; mass: number };
    bouncy: { damping: number; stiffness: number; mass: number };
    gentle: { damping: number; stiffness: number; mass: number };
  };
};

export type ThemeTokens = {
  colors: ColorTokens;
  spacing: SpacingTokens;
  typography: TypographyTokens;
  radius: RadiusTokens;
  shadows: ShadowTokens;
};
