import axios from "axios";

export async function getStores() {
  try {
    const response = await axios.get(
      "https://grocery-store-backend-w8lf.onrender.com/api/v1/store"
    );

    return response.data; // Assuming the data is in response.data
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch store");
  }
}

export async function createStore(storeData) {
  try {
    const response = await axios.post(
      "https://grocery-store-backend-w8lf.onrender.com/api/v1/store",
      storeData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to create store");
  }
}
