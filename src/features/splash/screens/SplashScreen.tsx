import { APP_NAME, APP_TAGLINE } from "@/constants";
import { motion } from "@/theme";

import * as ExpoSplashScreen from "expo-splash-screen";
import { useColorScheme } from "nativewind";
import { useCallback, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { SplashBackground } from "../components/SplashBackground";
import { SplashDots } from "../components/SplashDots";
import { SplashLogo } from "../components/SplashLogo";
import { WaveSvg } from "../components/WaveSvg";
import { useSplash } from "../hooks/useSplash";

interface SplashScreenProps {
  onAnimationComplete: () => void;
}

export function SplashScreen({ onAnimationComplete }: SplashScreenProps) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const { currentMessage, isExiting } = useSplash(onAnimationComplete);
  const screenOpacity = useSharedValue(1);

  useEffect(() => {
    if (isExiting) {
      screenOpacity.value = withTiming(0, {
        duration: motion.duration.slow,
        easing: motion.easing.standard,
      });
    }
  }, [isExiting, screenOpacity]);

  const fadeOutStyle = useAnimatedStyle(() => ({
    opacity: screenOpacity.value,
  }));

  // Theme-specific title typography.
  const titleClassName = isDark
    ? "font-sans text-headline-xl text-primary mb-4 tracking-tight drop-shadow-md text-center"
    : "font-sans text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2 text-center";

  // Theme-specific tagline typography.
  const taglineClassName = isDark
    ? "font-sans text-body-lg text-on-surface-variant max-w-md mx-auto opacity-90 text-center"
    : "font-sans text-body-md text-on-surface-variant text-center";

  const hideNativeSplash = useCallback(() => {
    ExpoSplashScreen.hideAsync().catch(() => {});
  }, []);

  const topBlobStyle = {
    top: motion.splash.ambientBlobOffset,
    left: motion.splash.ambientBlobOffset,
    width: motion.splash.ambientBlobSize,
    height: motion.splash.ambientBlobSize,
  };

  const bottomBlobStyle = {
    bottom: motion.splash.ambientBlobOffset,
    right: motion.splash.ambientBlobOffset,
    width: motion.splash.ambientBlobSize,
    height: motion.splash.ambientBlobSize,
  };

  return (
    <Animated.View
      style={[StyleSheet.absoluteFill, styles.overlay, fadeOutStyle]}
      onLayout={hideNativeSplash}
    >
      <SplashBackground>
        {/* Dark theme */}
        {isDark && (
          <View className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
            <View
              style={topBlobStyle}
              className="absolute bg-primary blur-[120px] rounded-full"
            />
            <View
              style={bottomBlobStyle}
              className="absolute bg-secondary blur-[120px] rounded-full"
            />
          </View>
        )}

        <View className="flex-1 items-center justify-center px-4 md:px-12 z-10 relative">
          {/* Logo container */}
          <View className="mb-8">
            <SplashLogo />
          </View>

          {/* App title */}
          <Text className={titleClassName}>{APP_NAME}</Text>

          {/* App tagline */}
          <Text className={taglineClassName}>{APP_TAGLINE}</Text>

          {/* Subtitle with message rotation */}
          <Text className="text-sm font-medium text-on-surface-variant/50 dark:text-on-surface-variant/40 mt-6 h-5">
            {currentMessage}
          </Text>

          {/* Staggered bouncing loading dots */}
          <View className="mt-12">
            <SplashDots />
          </View>
        </View>

        {/* Light theme bottom wave */}
        {!isDark && <WaveSvg />}
      </SplashBackground>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    zIndex: 10000,
  },
});
