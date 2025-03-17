import { useState } from "react";
import ProductList from "../features/product/ProductList";
import StoreList from "../features/store/StoreList";
import Sidebar from "../ui/Sidebar";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import { useLocation } from "../hooks/useLocation";
import { useProducts } from "./../features/product/useProducts";
import Map from "./../ui/Map";
import { useOrders } from "../features/order/useOrders";

function Dashboard() {
  const [sortBy, setSortBy] = useState();
  const { isLoading, products } = useProducts("", sortBy);
  const { location, error } = useLocation();
  const { user } = useUser();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { orders } = useOrders();
  // Run getProducts whenever sortBy changes

  function handleNavigate() {
    navigate(`/cart/${user._doc._id}`);
  }
  function handleSortChange(e) {
    setSortBy(e.target.value);
  }
  return (
    <div className="grid grid-cols-12 gap-4 py-4 px-24 bg-slate-100">
      <Sidebar />
      {/* Products List */}
      <div className="col-span-7 bg-slate-200 p-3 rounded-md shadow-md overflow-y-auto max-h-[calc(100vh-8rem)]      scrollbar-hide">
        <h2 className="text-lg font-bold mb-4">Shop By Stores</h2>
        <StoreList />
        <h2 className="text-lg font-bold mb-4">Products</h2>
        <ProductList products={products} isLoading={isLoading} />
      </div>

      {/* Filters & Sorting */}
      <div className="col-span-3 bg-slate-200 p-4 rounded-md">
        <div className="mb-4">
          <label className="block font-medium mb-1">Sort By:</label>
          <select
            className="w-full border px-3 py-2 rounded-md"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option>null</option>
            <option>name</option>
            <option>price</option>
          </select>
        </div>

        {/* Cart and Orders Buttons */}
        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={handleNavigate}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Cart
          </button>
          <button
            onClick={() => setOpen(true)}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Orders
          </button>
        </div>
        {open && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">Your Orders</h2>

              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <div className="space-y-3">
                  {orders?.map((order) => (
                    <div
                      key={order._id}
                      className="flex justify-between border-b pb-2"
                    >
                      <div>
                        <p className="font-semibold">
                          {order.orderItems[0]?.product.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {order.shippingAddress.address}
                        </p>
                      </div>
                      <div>
                        <p className="font-bold">₹{order.totalPrice}</p>
                        <p
                          className={`text-sm ${
                            order.status === "Delivered"
                              ? "text-green-500"
                              : "text-orange-500"
                          }`}
                        >
                          {order.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Close Button */}
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        <div>
          <Map location={location} error={error} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
