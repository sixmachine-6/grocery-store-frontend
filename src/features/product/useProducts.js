import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";

export function useProducts(id, sortBy) {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products", id, sortBy],
    queryFn: () => getProducts(id, sortBy),
  });

  return { isLoading, error, products };
}
