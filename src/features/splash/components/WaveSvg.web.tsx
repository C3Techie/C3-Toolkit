import { useColorScheme } from "react-native";
import { SPLASH_WAVE_PATH } from "../constants/wave";

import { colors } from "@/theme";

const WAVE_PATH = SPLASH_WAVE_PATH;

export function WaveSvg() {
  const isDark = useColorScheme() === "dark";
  const c = colors[isDark ? "dark" : "light"];

  return (
    <div className="absolute bottom-0 w-full overflow-hidden pointer-events-none">
      <svg
        className="block h-24 w-full md:h-32"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
      >
        <path
          d={WAVE_PATH}
          fill={c.primaryFixedDim}
          opacity={isDark ? 0.2 : 0.55}
        />
      </svg>
    </div>
  );
}
