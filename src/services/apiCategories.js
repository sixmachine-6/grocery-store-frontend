import axios from "axios";

export async function getCategories() {
  try {
    const response = await axios.get(
      "https://grocery-store-backend-w8lf.onrender.com/api/v1/categories"
    );
    return response.data; // Assuming the data is in response.data
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch categories"
    );
  }
}
