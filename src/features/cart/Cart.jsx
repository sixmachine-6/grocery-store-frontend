import { useForm } from "react-hook-form";
import Spinner from "../../ui/Spinner";
import { useCart } from "./useCart";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import { useCreateOrder } from "../order/useCreateOrder";
import { useUser } from "./../authentication/useUser";

function ProductList() {
  const { isLoading, products } = useCart();
  const { user } = useUser();
  const { createOrder } = useCreateOrder();
  //   console.log(products.items);
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const orderData = {
      user: user._doc._id,

      shippingAddress: {
        state: data.state,
        city: data.city,
        address: data.address,
        pincode: data.pincode,
        country: data.country,
      },
      shippingCharges: 90,
      totalPrice:
        products?.reduce(
          (total, item) => total + item.productID.price * item.quantity,
          0
        ) + 90,
      orderItems: products.map((item) => ({
        product: item.productID?._id, // Ensure productID._id exists
        quantity: item.quantity,
      })),
    };

    createOrder(orderData, {
      onSettled: () => reset(),
    });

    setOpen(false);
  };

  if (isLoading) return <Spinner />;
  return (
    <div className="w-full h-screen mx-auto p-4 bg-slate-100 shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {/* Cart Items */}
      <div className="space-y-4">
        {products?.map((item) => (
          <div
            key={item.productID._id}
            className="flex items-center justify-between border-b pb-2 text-lg"
          >
            {/* Product Info */}

            <h3 className="font-medium">{item.productID.name}</h3>
            <p className=" text-gray-500 font-bold">
              ₹{item.productID.price} x {item.quantity}
            </p>

            {/* Remove Button */}
            <button
              //   onClick={() => onRemove(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      {/* Total Price and Actions */}
      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>
            ₹
            {products?.reduce(
              (total, item) => total + item.productID.price * item.quantity,
              0
            )}
          </span>
        </div>

        <div className="mt-4 flex gap-4">
          <button
            onClick={() => setOpen(true)}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Place Order
          </button>

          <button
            // onClick={() => onRemove("all")}
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
          >
            Remove All
          </button>
        </div>
        {open && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">Shipping Address</h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* State */}
                <div>
                  <label className="block font-medium">State</label>
                  <input
                    type="text"
                    {...register("state", { required: "State is required" })}
                    className="w-full border rounded-md px-3 py-2"
                  />
                  {errors.state && (
                    <span className="text-red-500">{errors.state.message}</span>
                  )}
                </div>

                {/* City */}
                <div>
                  <label className="block font-medium">City</label>
                  <input
                    type="text"
                    {...register("city", { required: "City is required" })}
                    className="w-full border rounded-md px-3 py-2"
                  />
                  {errors.city && (
                    <span className="text-red-500">{errors.city.message}</span>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label className="block font-medium">Address</label>
                  <input
                    type="text"
                    {...register("address", {
                      required: "Address is required",
                    })}
                    className="w-full border rounded-md px-3 py-2"
                  />
                  {errors.address && (
                    <span className="text-red-500">
                      {errors.address.message}
                    </span>
                  )}
                </div>

                {/* Pincode */}
                <div>
                  <label className="block font-medium">Pincode</label>
                  <input
                    type="text"
                    {...register("pincode", {
                      required: "Pincode is required",
                    })}
                    className="w-full border rounded-md px-3 py-2"
                  />
                  {errors.pincode && (
                    <span className="text-red-500">
                      {errors.pincode.message}
                    </span>
                  )}
                </div>

                {/* Country */}
                <div>
                  <label className="block font-medium">Country</label>
                  <input
                    type="text"
                    {...register("country", {
                      required: "Country is required",
                    })}
                    className="w-full border rounded-md px-3 py-2"
                  />
                  {errors.country && (
                    <span className="text-red-500">
                      {errors.country.message}
                    </span>
                  )}
                </div>

                {/* Total Price (Blocked) */}
                <div>
                  <label className="block font-medium">Total Price</label>
                  <input
                    type="text"
                    value={`₹${products?.reduce(
                      (total, item) =>
                        total + item.productID.price * item.quantity,
                      0
                    )}`}
                    {...register("totalPrice", {
                      required: "totalPrice is required",
                    })}
                    disabled
                    className="w-full border rounded-md px-3 py-2 bg-gray-100"
                  />
                </div>

                {/* Shipping Charges (Blocked) */}
                <div>
                  <label className="block font-medium">Shipping Charges</label>
                  <input
                    type="text"
                    value={90}
                    {...register("shippingCharges")}
                    disabled
                    className="w-full border rounded-md px-3 py-2 bg-gray-100"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Confirm Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;
