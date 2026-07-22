import { colors, motion, radius, shadows, spacing } from "@/theme";
import { Image } from "expo-image";
import { useEffect } from "react";
import {
  Platform,
  Image as RNImage,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

// Logo assets for each theme.
const LOGO_LIGHT = require("../../../../assets/images/c3_toolkit_logo_light.png");
const LOGO_DARK = require("../../../../assets/images/c3_toolkit_logo_dark.png");

// Logo dimensions come from the design system so they're consistent everywhere.
const SIZE = motion.splash.logoSize;

export function SplashLogo() {
  const isDark = useColorScheme() === "dark";

  // Select the correct color palette for the active theme.
  const c = colors[isDark ? "dark" : "light"];

  // Shared animation values managed on the UI thread.
  const scale = useSharedValue<number>(motion.splash.logoScaleStart);
  const glowPulse = useSharedValue<number>(1);

  useEffect(() => {
    // Animate the logo into view with a spring.
    scale.value = withSpring(1, motion.spring.default);

    // Continuously pulse the glow behind the logo.
    glowPulse.value = withRepeat(
      withSequence(
        withTiming(motion.splash.glowScale, {
          duration: motion.splash.glowDuration,
          easing: motion.easing.standard,
        }),
        withTiming(1, {
          duration: motion.splash.glowDuration,
          easing: motion.easing.standard,
        }),
      ),
      -1, // Infinite loop.
      true, // Reverse each cycle for a smooth pulse.
    );
  }, [glowPulse, scale]);

  // Animated transform for the logo card.
  const logoAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  // Animated transform for the glow layer.
  const glowAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: glowPulse.value }],
  }));

  // Use the appropriate logo for the active theme.
  const logoSource = isDark ? LOGO_DARK : LOGO_LIGHT;

  return (
    // Main logo container.
    <Animated.View style={[styles.container, logoAnimatedStyle]}>
      {/* Ambient glow behind the logo card. */}
      <Animated.View
        style={[
          styles.glow,
          glowAnimatedStyle,
          {
            backgroundColor: isDark
              ? `${c.primaryContainer}1F`
              : `${c.primaryFixedDim}59`,
          },
        ]}
      />

      {/* Logo card */}
      <View
        style={[
          styles.card,
          {
            backgroundColor: c.surfaceContainerLow,
            borderColor: c.outlineVariant,
          },
        ]}
      >
        {/* React Native Web renders Metro image assets more reliably with RNImage.
            Native platforms use expo-image for better performance and transitions. */}
        {Platform.OS === "web" ? (
          <RNImage
            source={logoSource}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={logoSource}
            style={styles.image}
            contentFit="contain"
            transition={200}
          />
        )}
      </View>
    </Animated.View>
  );
}

// Component-specific layout styles.
// Shared design values (radius, spacing, shadows) come from the theme.
const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  glow: {
    position: "absolute",
    width: SIZE,
    height: SIZE,
    borderRadius: radius.md,
  },

  card: {
    width: SIZE,
    height: SIZE,
    borderRadius: radius.md,
    padding: spacing.xs,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderWidth: 1,
    ...shadows.level2,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
