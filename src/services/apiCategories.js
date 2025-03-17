import axios from "axios";

export async function getCategories() {
  try {
    const response = await axios.get("http://127.0.0.1:5000/api/v1/categories");
    return response.data; // Assuming the data is in response.data
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch categories"
    );
  }
}
