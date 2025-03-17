import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./../ui/Navbar";
function Home() {
  const navigate = useNavigate();

  function handleShop() {
    navigate("/");
  }
  function handleStore() {
    navigate("/register-shop");
  }
  return (
    <>
      <Navbar />
      <div className="flex h-[calc(100vh-5rem)]  px-32 bg-slate-100">
        <div className="w-1/2 flex flex-col justify-center items-center px-5">
          <h1 className="text-7xl font-bold text-center">
            Let's Now Shop for Daily Food & Necessary
          </h1>
          <p className="mt-4 text-xl italic text-center">
            Freshness and speed at your fingertips.Get groceries delivered in 30
            minutes.
          </p>

          <div className="space-x-4 mt-4">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-full text-lg"
              onClick={handleShop}
            >
              Shop Now
            </button>
            <button
              onClick={handleStore}
              className="border-2 border-slate-400 px-4 py-2 rounded-full text-lg underline"
            >
              Register Store &rarr;
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img src="./../landing.png" alt="Home" className="w-[80%] h-auto" />
        </div>
      </div>
    </>
  );
}

export default Home;
