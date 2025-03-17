import CategoryListItem from "../../ui/CategoryListItem";
import { useCategories } from "./useCategories";

function CategoryList() {
  const { isLoading, categories, error } = useCategories();

  return (
    <ul className="space-y-3">
      {categories?.map((item) => (
        <CategoryListItem
          category={item}
          key={item._id}
          isLoading={isLoading}
          error={error}
        />
      ))}
    </ul>
  );
}

export default CategoryList;
