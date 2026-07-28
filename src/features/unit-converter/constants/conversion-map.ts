/**
 * Conversion factors to a common base unit per category.
 * Base units: meters (length), kilograms (weight), liters (volume).
 * Temperature is handled separately in conversions.ts via formulas.
 */
export const LENGTH_TO_METERS: Record<string, number> = {
  km: 1000,
  m: 1,
  cm: 0.01,
  mm: 0.001,
  mi: 1609.344,
  yd: 0.9144,
  ft: 0.3048,
  in: 0.0254,
};

export const WEIGHT_TO_KG: Record<string, number> = {
  kg: 1,
  g: 0.001,
  mg: 0.000001,
  lb: 0.45359237,
  oz: 0.02834952,
  t: 1000,
};

export const VOLUME_TO_LITERS: Record<string, number> = {
  l: 1,
  ml: 0.001,
  gal: 3.785411784,
  fl_oz: 0.02957353,
  cup: 0.2365882,
  pt: 0.473176,
  qt: 0.946353,
};
