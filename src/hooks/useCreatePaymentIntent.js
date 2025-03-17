import { useState } from "react";
import axios from "axios";

export const useCreatePaymentIntent = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const createPaymentIntent = async (amount, currency) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        "http://127.0.0.1:5000/api/v1/orders/payment-intent",
        {
          amount,
          currency,
        }
      );
      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
      }
    } catch (error) {
      console.error("Error creating payment intent:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { createPaymentIntent, clientSecret, isLoading };
};
