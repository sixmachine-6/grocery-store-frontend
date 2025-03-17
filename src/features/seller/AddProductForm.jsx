import { useForm } from "react-hook-form";
import { useAddProduct } from "./useAddProduct";
import { useCategories } from "../categories/useCategories";

const AddProductForm = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { categories } = useCategories();
  const { productCreation, isLoading } = useAddProduct();

  const onSubmit = async (data) => {
    console.log(data);
    productCreation(
      { ...data, storeID: "67d868474db8e8dde9138d65" },
      {
        onSettled: () => reset(),
      }
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md w-[400px]">
        <h2 className="text-xl font-bold mb-4">Add Product</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Product Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Product name is required" })}
              className="w-full border rounded-md px-3 py-2"
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              {...register("categoryName", {
                required: "Category is required",
              })}
              className="w-full border rounded-md px-3 py-2"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.category && (
              <span className="text-red-500">{errors.category.message}</span>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full border rounded-md px-3 py-2"
            />
            {errors.description && (
              <span className="text-red-500">{errors.description.message}</span>
            )}
          </div>

          {/* Stock */}
          <div>
            <label className="block text-sm font-medium mb-1">Stock</label>
            <input
              type="number"
              {...register("stock", {
                required: "Stock is required",
                valueAsNumber: true,
              })}
              className="w-full border rounded-md px-3 py-2"
            />
            {errors.stock && (
              <span className="text-red-500">{errors.stock.message}</span>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium mb-1">Price</label>
            <input
              type="number"
              {...register("price", {
                required: "Price is required",
                valueAsNumber: true,
              })}
              className="w-full border rounded-md px-3 py-2"
            />
            {errors.price && (
              <span className="text-red-500">{errors.price.message}</span>
            )}
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input
              type="text"
              {...register("image", { required: "Image URL is required" })}
              className="w-full border rounded-md px-3 py-2"
            />
            {errors.image && (
              <span className="text-red-500">{errors.image.message}</span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              disabled={isLoading}
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
