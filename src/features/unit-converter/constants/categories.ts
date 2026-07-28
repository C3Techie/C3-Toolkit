import type { Category } from "../types";

export const CATEGORIES: Category[] = [
  {
    id: "length",
    label: "Length",
    icon: "ruler",
    units: [
      { id: "km", label: "Kilometers", symbol: "km" },
      { id: "m", label: "Meters", symbol: "m" },
      { id: "cm", label: "Centimeters", symbol: "cm" },
      { id: "mm", label: "Millimeters", symbol: "mm" },
      { id: "mi", label: "Miles", symbol: "mi" },
      { id: "yd", label: "Yards", symbol: "yd" },
      { id: "ft", label: "Feet", symbol: "ft" },
      { id: "in", label: "Inches", symbol: "in" },
    ],
  },
  {
    id: "weight",
    label: "Weight",
    icon: "weight",
    units: [
      { id: "kg", label: "Kilograms", symbol: "kg" },
      { id: "g", label: "Grams", symbol: "g" },
      { id: "mg", label: "Milligrams", symbol: "mg" },
      { id: "lb", label: "Pounds", symbol: "lb" },
      { id: "oz", label: "Ounces", symbol: "oz" },
      { id: "t", label: "Metric Tons", symbol: "t" },
    ],
  },
  {
    id: "temperature",
    label: "Temperature",
    icon: "thermometer",
    units: [
      { id: "c", label: "Celsius", symbol: "°C" },
      { id: "f", label: "Fahrenheit", symbol: "°F" },
      { id: "k", label: "Kelvin", symbol: "K" },
    ],
  },
  {
    id: "volume",
    label: "Volume",
    icon: "flask",
    units: [
      { id: "l", label: "Liters", symbol: "L" },
      { id: "ml", label: "Milliliters", symbol: "mL" },
      { id: "gal", label: "Gallons (US)", symbol: "gal" },
      { id: "fl_oz", label: "Fluid Ounces", symbol: "fl oz" },
      { id: "cup", label: "Cups", symbol: "cup" },
      { id: "pt", label: "Pints", symbol: "pt" },
      { id: "qt", label: "Quarts", symbol: "qt" },
    ],
  },
];
