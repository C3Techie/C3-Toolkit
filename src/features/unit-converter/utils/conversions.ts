import {
    LENGTH_TO_METERS,
    VOLUME_TO_LITERS,
    WEIGHT_TO_KG,
} from "../constants/conversion-map";
import type { CategoryId, UnitId } from "../types";

export function convert(
  value: number,
  fromUnit: UnitId,
  toUnit: UnitId,
  category: CategoryId,
): number {
  if (fromUnit === toUnit) return value;

  switch (category) {
    case "length":
      return convertLength(value, fromUnit, toUnit);
    case "weight":
      return convertWeight(value, fromUnit, toUnit);
    case "temperature":
      return convertTemperature(value, fromUnit, toUnit);
    case "volume":
      return convertVolume(value, fromUnit, toUnit);
    default:
      return value;
  }
}

function convertLength(value: number, fromUnit: UnitId, toUnit: UnitId): number {
  const baseValue = value * (LENGTH_TO_METERS[fromUnit] || 1);
  return baseValue / (LENGTH_TO_METERS[toUnit] || 1);
}

function convertWeight(value: number, fromUnit: UnitId, toUnit: UnitId): number {
  const baseValue = value * (WEIGHT_TO_KG[fromUnit] || 1);
  return baseValue / (WEIGHT_TO_KG[toUnit] || 1);
}

function convertVolume(value: number, fromUnit: UnitId, toUnit: UnitId): number {
  const baseValue = value * (VOLUME_TO_LITERS[fromUnit] || 1);
  return baseValue / (VOLUME_TO_LITERS[toUnit] || 1);
}

function convertTemperature(value: number, fromUnit: UnitId, toUnit: UnitId): number {
  let celsius = value;

  // Convert to Celsius first
  if (fromUnit === "f") {
    celsius = ((value - 32) * 5) / 9;
  } else if (fromUnit === "k") {
    celsius = value - 273.15;
  }

  // Convert from Celsius to target
  if (toUnit === "f") {
    return (celsius * 9) / 5 + 32;
  } else if (toUnit === "k") {
    return celsius + 273.15;
  }

  return celsius;
}

export function formatResult(value: number): string {
  if (isNaN(value) || !isFinite(value)) return "0";

  const abs = Math.abs(value);
  if (abs < 0.0001) return value.toExponential(4);
  if (abs > 1e6) return value.toExponential(4);

  const formatted = value.toFixed(6);
  const trimmed = formatted.replace(/\.?0+$/, "");

  return trimmed;
}
