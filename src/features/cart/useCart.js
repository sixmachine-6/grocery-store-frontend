import { useQuery } from "@tanstack/react-query";
import { getCartProducts } from "../../services/apiCart";
import { useParams } from "react-router-dom";

export function useCart() {
  const { id } = useParams();
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCartProducts(id),
  });

  return { isLoading, error, products: products?.items };
}
