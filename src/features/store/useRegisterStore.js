import { useMutation } from "@tanstack/react-query";
import { createStore as createStoreApi } from "../../services/apiStore";
import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

export function useRegisterStore() {
  // const navigate = useNavigate();
  const { mutate: storeCreation, isLoading } = useMutation({
    mutationFn: createStoreApi,
    onSuccess: (store) => {
      console.log(store);
      // navigate("/dashboard");
      toast.success("Store successfully registered!");
    },
  });

  return { storeCreation, isLoading };
}
