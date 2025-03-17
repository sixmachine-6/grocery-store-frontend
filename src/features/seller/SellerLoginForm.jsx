import { useForm } from "react-hook-form";

function SellerLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Replace with API call to verify uniqueID
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-4">Seller Login</h2>

        <div className="mb-4">
          <label className="block mb-2 text-gray-700" htmlFor="uniqueID">
            Unique ID
          </label>
          <input
            id="uniqueID"
            type="text"
            {...register("uniqueID", { required: "Unique ID is required" })}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.uniqueID && (
            <p className="text-red-500 text-sm mt-1">
              {errors.uniqueID.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default SellerLoginForm;
