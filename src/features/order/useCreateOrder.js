import { useMutation } from "@tanstack/react-query";
import { createOrder as createOrderApi } from "../../services/apiOrders";
import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

export function useCreateOrder() {
  const { mutate: createOrder, isLoading } = useMutation({
    mutationFn: createOrderApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success("Order successfully created!");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to create order");
    },
  });

  return { createOrder, isLoading };
}
