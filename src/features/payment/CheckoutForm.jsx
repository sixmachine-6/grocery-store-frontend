import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";

function CheckoutForm({ clientSecret, onPaymentSuccess }) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);

    const { paymentIntent, error } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement,
        },
      }
    );

    if (error) {
      setError(error.message);
    } else if (paymentIntent.status === "succeeded") {
      onPaymentSuccess(); // Trigger after successful payment
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement className="border rounded-md p-3" />
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
}

export default CheckoutForm;
