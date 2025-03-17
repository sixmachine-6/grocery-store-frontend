import { useQuery } from "@tanstack/react-query";
import { getStores } from "../../services/apiStore";

export function useStore() {
  const {
    isLoading,
    data: stores,
    error,
  } = useQuery({
    queryKey: ["stores"],
    queryFn: getStores,
  });

  return { isLoading, error, stores };
}
