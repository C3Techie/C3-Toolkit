import { Platform, Pressable } from "react-native";
import Animated from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type AnimatedViewProps = Omit<
  React.ComponentProps<typeof Animated.View>,
  "key"
>;

type AnimatedPressableProps = Omit<
  React.ComponentProps<typeof AnimatedPressable>,
  "key"
>;

type NativeOnlyAnimatedViewProps =
  | (AnimatedViewProps & { as?: "View" })
  | (AnimatedPressableProps & { as: "Pressable" });

function NativeOnlyAnimatedView({
  as: asProp,
  ...rest
}: NativeOnlyAnimatedViewProps) {
  if (Platform.OS === "web") {
    return <>{rest.children}</>;
  }

  if (asProp === "Pressable") {
    return <AnimatedPressable {...(rest as AnimatedPressableProps)} />;
  }

  return <Animated.View {...(rest as AnimatedViewProps)} />;
}

export { NativeOnlyAnimatedView };
