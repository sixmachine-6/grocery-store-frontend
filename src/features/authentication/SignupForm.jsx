import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
function SignupForm() {
  const {
    register,
    handleSubmit,
    reset,
    // formState,
  } = useForm();

  const { signup, isLoading } = useSignup();

  function onSubmit({ rollID, password }) {
    signup(
      { rollID, password },
      {
        onSettled: () => reset(),
      }
    );
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 rounded-lg shadow-md w-96"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

      {/* Roll ID Input */}
      <div className="mb-4">
        <label htmlFor="rollId" className="block mb-1 text-gray-700">
          Roll ID
        </label>
        <input
          id="rollID"
          {...register("rollID", { required: "Roll ID is required" })}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Enter your Roll ID"
        />
        {/* {errors.rollId && (
        <p className="text-red-500 text-sm mt-1">{errors.rollId.message}</p>
      )} */}
      </div>

      {/* Password Input */}
      <div className="mb-4">
        <label htmlFor="password" className="block mb-1 text-gray-700">
          Password
        </label>
        <input
          id="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="password"
          placeholder="Enter your password"
        />
        {/* {errors.password && (
        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
      )} */}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignupForm;
