import axios from "axios";

export async function signup({ rollID, password }) {
  try {
    const response = await axios.post(
      "http://127.0.0.1:5000/api/v1/users/signup",
      {
        rollID,
        password,
      }
    );
    // Store the token in localStorage
    if (response.data?.token) {
      localStorage.setItem("authToken", response.data.token);
    }

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.response?.data?.message || "Signup failed");
  }
}

export async function getCurrentUser() {
  try {
    // Get token from localStorage
    const token = localStorage.getItem("authToken");

    if (!token) return null;

    // Make a request with Bearer token in the headers
    const response = await axios.get("http://127.0.0.1:5000/api/v1/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch user");
  }
}
