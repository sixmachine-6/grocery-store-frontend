import { useState } from "react";
import { useCreateCart } from "./../features/cart/useCreateCart";

function ProductListItem({ product }) {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const { cartCreation, isLoading } = useCreateCart();

  const handleAddToCart = () => {
    console.log(product._id);
    cartCreation({
      productID: product._id,
      quantity,
    });
  };

  return (
    <div className="border rounded-lg shadow-md p-4 bg-slate-100 flex flex-col items-center w-56">
      {/* Product Image */}
      <img
        src={"./../landing.png"}
        alt={product.name}
        className="w-20 object-cover rounded-md"
      />
      {/* Product Info */}
      <div className="text-center mt-3">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500 text-sm mt-1">{product.description}</p>
        <p className="text-blue-500 font-bold mt-2">${product.price}</p>
      </div>
      <div className="flex items-center mt-4">
        <button
          onClick={decreaseQuantity}
          className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l-md"
        >
          -
        </button>
        <span className="px-4 py-1 border-t border-b">{quantity}</span>
        <button
          onClick={increaseQuantity}
          className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r-md"
        >
          +
        </button>
        <button
          onClick={handleAddToCart}
          className="text-white bg-blue-400 px-4 py-1 border-t border-b  mx-2 rounded-lg"
          disabled={isLoading}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default ProductListItem;
