function YetToDeliever({ product }) {
  return (
    <div key={product.id} className="border-b py-2">
      <h3 className="font-bold">{product.name}</h3>
      <p className="text-sm text-gray-500">Added on: {product.date}</p>
    </div>
  );
}

export default YetToDeliever;
