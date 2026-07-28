export type UnitId = string;
export type CategoryId = string;

export interface Unit {
  id: UnitId;
  label: string;
  symbol: string;
}

export interface Category {
  id: CategoryId;
  label: string;
  icon: string; // lucide icon name key from theme/icons
  units: Unit[];
}

export interface ConversionResult {
  value: number;
  formatted: string;
}

export interface RecentConversion {
  id: string;
  categoryId: CategoryId;
  fromUnit: Unit;
  toUnit: Unit;
  inputValue: number;
  resultValue: number;
  timestamp: number;
}
