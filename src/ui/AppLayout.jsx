import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";

function AppLayout() {
  const { isLoading, isAuthenticated } = useUser();
  if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <div>
      <Navbar isAuthenticated={isAuthenticated} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
