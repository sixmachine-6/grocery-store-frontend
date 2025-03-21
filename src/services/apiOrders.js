import axios from "axios";

export async function createOrder(orderData) {
  try {
    // Get token from localStorage
    const token = localStorage.getItem("authToken");
    if (!token) throw new Error("No auth token found");

    const response = await axios.post(
      "https://grocery-store-backend-w8lf.onrender.com/api/v1/orders",
      orderData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to create order");
  }
}

export async function getOrders() {
  try {
    const token = localStorage.getItem("authToken");
    const response = await axios.get(
      "https://grocery-store-backend-w8lf.onrender.com/api/v1/orders",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch orders");
  }
}
