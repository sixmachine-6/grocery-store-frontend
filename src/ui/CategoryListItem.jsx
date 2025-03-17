import { useNavigate } from "react-router-dom";

function CategoryListItem({ category }) {
  const navigate = useNavigate();
  function handleCategory() {
    navigate(`/category/${category._id}`);
  }

  return (
    <div onClick={handleCategory}>
      <p className="cursor-pointer hover:text-blue-500">{category.name}</p>
    </div>
  );
}

export default CategoryListItem;
