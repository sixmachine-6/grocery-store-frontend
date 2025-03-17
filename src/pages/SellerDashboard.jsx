import { useState } from "react";
import DeliveredProduct from "../components/DeliveredProduct";
import Product from "../components/Product";
import TransactionHistory from "../components/TransactionHistory";
import YetToDeliever from "../components/YetToDeliever";
import AddProductForm from "../features/seller/AddProductForm";

function SellerDashboard() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description of Product 1",
      stock: 10,
      status: "Available",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2",
      stock: 0,
      status: "Out of Stock",
    },
  ];

  const deliveredProducts = [
    { id: 1, name: "Delivered Product 1", date: "2025-03-10" },
    { id: 2, name: "Delivered Product 2", date: "2025-03-12" },
  ];

  const YetToDelievers = [
    { id: 1, name: "New Product 1", date: "2025-03-14" },
    { id: 2, name: "New Product 2", date: "2025-03-15" },
  ];

  const transactions = [
    { id: 1, type: "Credit", amount: 200, date: "2025-03-10" },
    { id: 2, type: "Debit", amount: 150, date: "2025-03-12" },
  ];

  //   const handleChangeStatus = (id) => {
  //     setProducts((prevProducts) =>
  //       prevProducts.map((product) =>
  //         product.id === id
  //           ? {
  //               ...product,
  //               status:
  //                 product.status === "Available" ? "Out of Stock" : "Available",
  //             }
  //           : product
  //       )
  //     );
  //   };

  return (
    <div className="grid grid-cols-12 gap-4 px-24 py-8 h-screen bg-slate-100 ">
      {/* Column 1: Products */}
      <div className="mb-10 col-span-4 p-4 rounded-md shadow-md overflow-y-auto bg-slate-200">
        <h2 className="text-lg font-bold mb-4">Products</h2>
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>

      {/* Column 2: Delivered Products + New Products */}
      <div className="col-span-4 flex flex-col gap-4">
        {/* Delivered Products */}
        <div className=" bg-slate-200 p-4 rounded-md shadow-md overflow-y-auto h-[45%]">
          <h2 className="text-lg font-bold mb-4">Delivered Products</h2>
          {deliveredProducts.map((product) => (
            <DeliveredProduct product={product} />
          ))}
        </div>

        {/* New Products */}
        <div className="bg-slate-200 p-4 rounded-md shadow-md overflow-y-auto h-[45%]">
          <h2 className="text-lg font-bold mb-4">New Products</h2>
          {YetToDelievers.map((product) => (
            <YetToDeliever product={product} />
          ))}
        </div>
      </div>

      {/* Column 3: Transactions + Add Product Button */}
      <div className="col-span-4 flex flex-col gap-4">
        {/* Transactions */}
        <div className="bg-slate-200 p-4 rounded-md shadow-md overflow-y-auto h-[70%]">
          <h2 className="text-lg font-bold mb-4">Transaction History</h2>
          {transactions.map((transaction) => (
            <TransactionHistory transaction={transaction} />
          ))}
        </div>

        {/* Add Product Button */}
        <button
          onClick={() => setIsDialogOpen(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          + Add Product
        </button>

        {/* Add Product Dialog */}
        <AddProductForm
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />
      </div>
    </div>
  );
}

export default SellerDashboard;
