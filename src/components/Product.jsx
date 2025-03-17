function Product({ product }) {
  return (
    <div
      key={product.id}
      className="border-b py-2 flex justify-between items-center"
    >
      <div>
        <h3 className="font-bold">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.description}</p>
        <p className="text-sm text-gray-600">Stock: {product.stock}</p>
        <p
          className={`text-sm ${
            product.status === "Available" ? "text-green-500" : "text-red-500"
          }`}
        >
          {product.status}
        </p>
      </div>
      <button
        //   onClick={() => handleChangeStatus(product.id)}
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        Change Status
      </button>
    </div>
  );
}

export default Product;
