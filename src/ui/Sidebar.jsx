import CategoryList from "../features/categories/CategoryList";

function Sidebar() {
  return (
    <div className="col-span-2 bg-slate-200 p-4 rounded-md">
      <h2 className="text-lg font-bold mb-2">Categories</h2>
      <CategoryList />
    </div>
  );
}

export default Sidebar;
