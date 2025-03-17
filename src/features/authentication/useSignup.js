import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      navigate("/dashboard");
      toast.success("Account successfully created!");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to create account");
    },
  });

  return { signup, isLoading };
}
