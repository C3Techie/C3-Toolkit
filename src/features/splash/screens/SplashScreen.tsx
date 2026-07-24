import { Text } from "@/components/ui/text";
import { APP_NAME, APP_TAGLINE } from "@/constants";
import { motion } from "@/theme";

import * as ExpoSplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";
import { StyleSheet, View, useColorScheme } from "react-native";
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
  const colorScheme = useColorScheme();
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

  const hideNativeSplash = useCallback(() => {
    ExpoSplashScreen.hideAsync().catch(() => {});
  }, []);

  return (
    <Animated.View
      style={[StyleSheet.absoluteFill, styles.overlay, fadeOutStyle]}
      onLayout={hideNativeSplash}
    >
      <SplashBackground>
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
          <View className="mb-8">
            <SplashLogo />
          </View>

          <Text
            className={
              isDark
                ? "font-sans text-headline-xl text-primary mb-4 tracking-tight drop-shadow-md text-center"
                : "font-sans text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2 text-center"
            }
          >
            {APP_NAME}
          </Text>

          <Text
            className={
              isDark
                ? "font-sans text-body-lg text-on-surface-variant max-w-md mx-auto opacity-90 text-center"
                : "font-sans text-body-md text-on-surface-variant text-center"
            }
          >
            {APP_TAGLINE}
          </Text>

          <Text className="text-sm font-medium text-on-surface-variant/50 dark:text-on-surface-variant/40 mt-6 h-5">
            {currentMessage}
          </Text>

          <View className="mt-12">
            <SplashDots />
          </View>
        </View>

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
