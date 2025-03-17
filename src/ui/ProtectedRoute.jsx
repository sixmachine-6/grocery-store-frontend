// import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
function ProtectedRoute({ children }) {
  const { isLoading, isAuthenticated } = useUser();

  if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );

  // Pass isAuthenticated to children using props
  return isAuthenticated
    ? children({ isAuthenticated }) // 👈 Pass isAuthenticated as prop
    : children({ isAuthenticated: false });
}

export default ProtectedRoute;
