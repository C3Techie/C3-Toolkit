import { useColorScheme } from "react-native";
import Svg, { Path } from "react-native-svg";
import { SPLASH_WAVE_PATH } from "../constants/wave";

import { colors } from "@/theme";

const WAVE_PATH = SPLASH_WAVE_PATH;

export function WaveSvg() {
  const isDark = useColorScheme() === "dark";
  const c = colors[isDark ? "dark" : "light"];

  return (
    <Svg
      width="100%"
      height={96}
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <Path
        d={WAVE_PATH}
        fill={c.primaryFixedDim}
        opacity={isDark ? 0.2 : 0.55}
      />
    </Svg>
  );
}
