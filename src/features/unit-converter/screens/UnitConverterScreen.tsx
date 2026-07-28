import { ScrollView } from "react-native";
import { CategorySelector } from "../components/category-selector/CategorySelector";
import { ConverterCard } from "../components/converter-card/ConverterCard";
import { RecentConversions } from "../components/recent-conversions/RecentConversions";
import { useUnitConverter } from "../hooks/useUnitConverter";

export function UnitConverterScreen() {
  const {
    categories,
    activeCategory,
    fromUnit,
    toUnit,
    inputValue,
    inputError,
    isInputValid,
    result,
    recentConversions,
    handleInputChange,
    selectCategory,
    selectFromUnit,
    selectToUnit,
    swapUnits,
    handleConvert,
    clearRecentConversions,
  } = useUnitConverter();

  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerClassName="px-5 py-6 pb-24 gap-6"
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <CategorySelector
        categories={categories}
        activeCategoryId={activeCategory.id}
        onSelect={selectCategory}
      />

      <ConverterCard
        units={activeCategory.units}
        fromUnit={fromUnit}
        toUnit={toUnit}
        inputValue={inputValue}
        inputError={inputError}
        isInputValid={isInputValid}
        result={result}
        onFromUnitChange={selectFromUnit}
        onToUnitChange={selectToUnit}
        onInputChange={handleInputChange}
        onSwap={swapUnits}
        onConvert={handleConvert}
      />

      <RecentConversions
        conversions={recentConversions}
        onClear={clearRecentConversions}
      />
    </ScrollView>
  );
}
