import ProductListItem from "../../ui/ProductListItem";

function ProductList({ products, isLoading }) {
  return (
    <ul className="flex flex-wrap gap-4 px-5">
      {products?.map((item) => (
        <ProductListItem product={item} key={item._id} isLoading={isLoading} />
      ))}
    </ul>
  );
}

export default ProductList;
