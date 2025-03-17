import axios from "axios";

export async function getProducts(id, sortBy) {
  try {
    const params = new URLSearchParams();
    if (id) params.append("category", id);
    if (sortBy) params.append("sort", sortBy);

    const response = await axios.get(
      `http://127.0.0.1:5000/api/v1/products?${params.toString()}`
    );

    return response.data; // Assuming the data is in response.data
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch products"
    );
  }
}

export async function createProduct(productData) {
  try {
    const response = await axios.post(
      "http://127.0.0.1:5000/api/v1/products",
      productData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to create products"
    );
  }
}
