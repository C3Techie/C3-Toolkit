import { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

import { motion } from "@/theme";

function startBounce(sharedValue: SharedValue<number>, delay: number) {
  sharedValue.value = withDelay(
    delay,
    withRepeat(
      withSequence(
        withTiming(motion.splash.dotBounceHeight, {
          duration: motion.duration.normal,
          easing: motion.easing.standard,
        }),
        withTiming(0, {
          duration: motion.duration.normal,
          easing: motion.easing.standard,
        }),
      ),
      -1,
      true,
    ),
  );
}

export function SplashDots() {
  const dot1 = useSharedValue(0);
  const dot2 = useSharedValue(0);
  const dot3 = useSharedValue(0);

  useEffect(() => {
    startBounce(dot1, 0);
    startBounce(dot2, motion.splash.dotDelay);
    startBounce(dot3, motion.splash.dotDelay * 2);
  }, []);

  const animatedStyle1 = useAnimatedStyle(() => ({
    transform: [{ translateY: dot1.value }],
  }));

  const animatedStyle2 = useAnimatedStyle(() => ({
    transform: [{ translateY: dot2.value }],
  }));

  const animatedStyle3 = useAnimatedStyle(() => ({
    transform: [{ translateY: dot3.value }],
  }));

  return (
    <View className="flex-row h-6 items-center justify-center gap-2">
      <Animated.View
        className="h-2 w-2 rounded-full bg-primary"
        style={animatedStyle1}
      />
      <Animated.View
        className="h-2 w-2 rounded-full bg-primary"
        style={animatedStyle2}
      />
      <Animated.View
        className="h-2 w-2 rounded-full bg-primary"
        style={animatedStyle3}
      />
    </View>
  );
}
