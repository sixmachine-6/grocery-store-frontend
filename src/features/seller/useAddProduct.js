import { useMutation } from "@tanstack/react-query";
import { createProduct as addProductApi } from "../../services/apiProducts";
import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

export function useAddProduct() {
  // const navigate = useNavigate();
  const { mutate: productCreation, isLoading } = useMutation({
    mutationFn: addProductApi,
    onSuccess: (product) => {
      console.log(product);
      // navigate("/dashboard");
      toast.success("Store successfully registered!");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to add product");
    },
  });

  return { productCreation, isLoading };
}
