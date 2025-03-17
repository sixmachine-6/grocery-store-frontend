import axios from "axios";

export async function createCart(data) {
  const authToken = localStorage.getItem("authToken");

  try {
    const response = await axios.post(
      "https://grocery-store-backend-w8lf.onrender.com/api/v1/cart",
      data,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to add to cart");
  }
}

export async function getCartProducts() {
  const token = localStorage.getItem("authToken");

  try {
    const response = await axios.get(
      "https://grocery-store-backend-w8lf.onrender.com/api/v1/cart",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch cart");
  }
}
