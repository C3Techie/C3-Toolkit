import { ScrollView } from "react-native";
import type { Category, CategoryId } from "../../types";
import { CategoryChip } from "./CategoryChip";

type CategorySelectorProps = {
  categories: Category[];
  activeCategoryId: CategoryId;
  onSelect: (id: CategoryId) => void;
};

export function CategorySelector({
  categories,
  activeCategoryId,
  onSelect,
}: CategorySelectorProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerClassName="gap-2 py-1"
    >
      {categories.map((category) => (
        <CategoryChip
          key={category.id}
          category={category}
          isActive={category.id === activeCategoryId}
          onPress={onSelect}
        />
      ))}
    </ScrollView>
  );
}
