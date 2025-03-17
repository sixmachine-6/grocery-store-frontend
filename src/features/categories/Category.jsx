import { useParams } from "react-router-dom";
import { useState } from "react";
import Spinner from "../../ui/Spinner";
import { useProducts } from "../product/useProducts";
import Navbar from "../../ui/Navbar";
import { useCreateCart } from "../cart/useCreateCart";

function ProductList() {
  const { id } = useParams();
  const { isLoading, products } = useProducts(id);
  const [quantities, setQuantities] = useState(1);
  const { cartCreation } = useCreateCart();
  if (isLoading) return <Spinner />;

  const handleAddToCart = (product) => {
    cartCreation({
      productID: product._id,
      quantity: quantities,
    });
  };

  const handleQuantityDecreaseChange = () => {
    setQuantities(() => quantities - 1);
  };

  const handleQuantityIncreaseChange = () => {
    setQuantities(() => quantities + 1);
  };

  return (
    <div className="bg-slate-100">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 bg-slate-100 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {products[0]?.category.name}
        </h2>

        {/* Product List */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          {products?.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg overflow-hidden shadow-md bg-slate-200"
            >
              {/* Product Image */}
              <img
                src={"./../../landing.png "}
                alt={product.name}
                className="w-40 object-cover m-auto"
              />

              {/* Product Info */}
              <div className="p-4 space-y-3">
                <h3 className="font-semibold text-xl text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-500">{product.storeID.name}</p>
                <p className="text-green-600 font-bold">₹{product.price}</p>

                {/* Quantity and Add to Cart */}
                <div className="flex items-center justify-between mt-3">
                  {/* Quantity */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleQuantityDecreaseChange}
                      className="px-2 py-1 border rounded-md bg-gray-200 hover:bg-gray-300"
                    >
                      −
                    </button>
                    <span className="font-semibold">{quantities}</span>
                    <button
                      onClick={handleQuantityIncreaseChange}
                      className="px-2 py-1 border rounded-md bg-gray-200 hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    // disabled={isLoading}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
