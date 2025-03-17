import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import RegisterStore from "./pages/RegisterStore";
import SellerDashboard from "./pages/SellerDashboard";
import SellerLogin from "./pages/SellerLogin";
import { Toaster } from "react-hot-toast";
import Cart from "./features/cart/Cart";
import Category from "./features/categories/Category";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/seller-dashboard" element={<SellerDashboard />} />
          <Route path="/seller-login" element={<SellerLogin />} />
          <Route path="/register-shop" element={<RegisterStore />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/category/:id" element={<Category />} />
          {/* <Route path="/products" element={} */}
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/cart/:id" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-left"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "black",
            color: "white",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
