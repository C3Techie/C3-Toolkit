import type { LucideIcon } from "lucide-react-native";
import { Cake, Calculator, RefreshCw, Wallet } from "lucide-react-native";

export type ToolAccentColor = "primary" | "secondary" | "tertiary" | "neutral";

export type Tool = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: ToolAccentColor;
  href: string;
};

export const TOOLS: Tool[] = [
  {
    id: "unit-converter",
    title: "Unit Converter",
    description:
      "Seamlessly convert between length, weight, temperature, and volume metrics with precision.",
    icon: RefreshCw,
    accent: "primary",
    href: "/converter",
  },
  {
    id: "bmi-calculator",
    title: "BMI Calculator",
    description:
      "Quickly determine your Body Mass Index and track your health metrics over time.",
    icon: Calculator,
    accent: "secondary",
    href: "/bmi",
  },
  {
    id: "age-calculator",
    title: "Age Calculator",
    description:
      "Calculate exact age in years, months, and days down to the minute.",
    icon: Cake,
    accent: "tertiary",
    href: "/age",
  },
  {
    id: "tip-calculator",
    title: "Tip Calculator",
    description:
      "Effortlessly split bills and calculate precise gratuity percentages on the fly.",
    icon: Wallet,
    accent: "neutral",
    href: "/tip",
  },
];
