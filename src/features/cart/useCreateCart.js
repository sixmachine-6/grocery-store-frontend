import { useMutation } from "@tanstack/react-query";
import { createCart as createCartApi } from "../../services/apiCart";
import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

export function useCreateCart() {
  // const navigate = useNavigate();
  const { mutate: cartCreation, isLoading } = useMutation({
    mutationFn: createCartApi,
    onSuccess: (user) => {
      console.log(user);
      // navigate("/dashboard");
      toast.success("Cart successfully created!");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to create cart");
    },
  });

  return { cartCreation, isLoading };
}
