import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function Navbar({ isAuthenticated }) {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleStoreLogin = () => {
    navigate("/seller-login");
  };
  return (
    <nav className="flex justify-evenly items-center py-4  bg-slate-200 shadow-md">
      {/* Left side - Logo and menu */}
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-xl font-bold">
          Groceries
        </Link>
      </div>

      <div className="flex items-center space-x-6 text-xl">
        <p>Groceries</p>
        <p>Groceries</p>
        <p>Groceries</p>
      </div>

      {/* Right side - Signup button or user icon */}
      <div>
        {isAuthenticated ? (
          <FaUserCircle className="w-8 h-8 text-gray-600" />
        ) : (
          <>
            <button
              onClick={handleStoreLogin}
              className="bg-green-300 font-bold px-4 py-2 rounded-full transition mx-2"
            >
              Store login
            </button>
            <button
              onClick={handleSignup}
              className="bg-green-300 font-bold px-4 py-2 rounded-full transition"
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
