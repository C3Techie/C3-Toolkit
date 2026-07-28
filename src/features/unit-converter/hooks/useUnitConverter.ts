import { useCallback, useMemo, useState } from "react";
import { CATEGORIES } from "../constants/categories";
import type { Category, CategoryId, RecentConversion, Unit } from "../types";
import { convert, formatResult } from "../utils/conversions";
import { isValidInput, validateInput } from "../utils/validation";

const MAX_RECENT = 10;

export function useUnitConverter() {
  const [activeCategoryId, setActiveCategoryId] = useState<CategoryId>(
    CATEGORIES[0].id,
  );
  const [fromUnit, setFromUnit] = useState<Unit>(CATEGORIES[0].units[0]);
  const [toUnit, setToUnit] = useState<Unit>(CATEGORIES[0].units[1]);
  const [inputValue, setInputValue] = useState<string>("1");
  const [inputError, setInputError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [recentConversions, setRecentConversions] = useState<RecentConversion[]>([]);

  const activeCategory = useMemo<Category>(
    () => CATEGORIES.find((c) => c.id === activeCategoryId) ?? CATEGORIES[0],
    [activeCategoryId],
  );

  const handleInputChange = useCallback((raw: string) => {
    setInputValue(raw);
    setInputError(validateInput(raw));
    setResult(null);
  }, []);

  const selectCategory = useCallback(
    (categoryId: CategoryId) => {
      if (categoryId === activeCategoryId) return;
      const category = CATEGORIES.find((c) => c.id === categoryId);
      if (!category) return;
      setActiveCategoryId(categoryId);
      setFromUnit(category.units[0]);
      setToUnit(category.units[1]);
      setInputValue("1");
      setInputError(null);
      setResult(null);
    },
    [activeCategoryId],
  );

  const swapUnits = useCallback(() => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setResult(null);
  }, [fromUnit, toUnit]);

  const handleConvert = useCallback(() => {
    const error = validateInput(inputValue);
    if (error) {
      setInputError(error);
      return;
    }

    const numericInput = Number(inputValue);
    const converted = convert(numericInput, fromUnit.id, toUnit.id, activeCategoryId);
    const formatted = formatResult(converted);
    setResult(formatted);

    const entry: RecentConversion = {
      id: `${Date.now()}-${Math.random()}`,
      categoryId: activeCategoryId,
      fromUnit,
      toUnit,
      inputValue: numericInput,
      resultValue: converted,
      timestamp: Date.now(),
    };

    setRecentConversions((prev) => [entry, ...prev].slice(0, MAX_RECENT));
  }, [activeCategoryId, fromUnit, toUnit, inputValue]);

  const clearRecentConversions = useCallback(() => {
    setRecentConversions([]);
  }, []);

  const isInputValid = isValidInput(inputValue);

  return {
    categories: CATEGORIES,
    activeCategory,
    fromUnit,
    toUnit,
    inputValue,
    inputError,
    isInputValid,
    result,
    recentConversions,
    setFromUnit,
    setToUnit,
    handleInputChange,
    selectCategory,
    swapUnits,
    handleConvert,
    clearRecentConversions,
  };
}
