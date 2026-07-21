import {
  AlertTriangle,
  Calculator,
  Check,
  ChevronLeft,
  ChevronRight,
  FileText,
  Home,
  Info,
  Minus,
  Plus,
  RefreshCw,
  Search,
  Settings,
  X,
  type LucideProps,
} from "lucide-react-native";

export const icons = {
  home: Home,
  converter: RefreshCw,
  notes: FileText,
  calculator: Calculator,
  settings: Settings,
  chevronRight: ChevronRight,
  chevronLeft: ChevronLeft,
  check: Check,
  close: X,
  search: Search,
  plus: Plus,
  minus: Minus,
  info: Info,
  alert: AlertTriangle,
} as const;

export type IconName = keyof typeof icons;

export type IconComponent = (typeof icons)[IconName];

export type IconProps = LucideProps;
