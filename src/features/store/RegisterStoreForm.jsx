import { useForm } from "react-hook-form";
import { useRegisterStore } from "./useRegisterStore";

const RegisterStore = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { storeCreation, isLoading } = useRegisterStore();
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    storeCreation(data, {
      onSettled: () => reset(),
    });
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Register Store</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Store Name */}
        <div>
          <label className="block font-medium">Store Name</label>
          <input
            {...register("name", { required: "Store name is required" })}
            className="w-full border rounded p-2"
            placeholder="Store Name"
          />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
        </div>

        {/* Address */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Street</label>
            <input
              {...register("address.street", {
                required: "Street is required",
              })}
              className="w-full border rounded p-2"
              placeholder="Street"
            />
            <p className="text-red-500 text-sm">
              {errors.address?.street?.message}
            </p>
          </div>
          <div>
            <label className="block font-medium">City</label>
            <input
              {...register("address.city", { required: "City is required" })}
              className="w-full border rounded p-2"
              placeholder="City"
            />
            <p className="text-red-500 text-sm">
              {errors.address?.city?.message}
            </p>
          </div>
          <div>
            <label className="block font-medium">State</label>
            <input
              {...register("address.state", { required: "State is required" })}
              className="w-full border rounded p-2"
              placeholder="State"
            />
            <p className="text-red-500 text-sm">
              {errors.address?.state?.message}
            </p>
          </div>
          <div>
            <label className="block font-medium">Country</label>
            <input
              {...register("address.country", {
                required: "Country is required",
              })}
              className="w-full border rounded p-2"
              placeholder="Country"
            />
            <p className="text-red-500 text-sm">
              {errors.address?.country?.message}
            </p>
          </div>
          <div>
            <label className="block font-medium">Pincode</label>
            <input
              {...register("address.pincode", {
                required: "Pincode is required",
              })}
              className="w-full border rounded p-2"
              placeholder="Pincode"
            />
            <p className="text-red-500 text-sm">
              {errors.address?.pincode?.message}
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Email</label>
            <input
              {...register("contact.email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              className="w-full border rounded p-2"
              placeholder="Email"
            />
            <p className="text-red-500 text-sm">
              {errors.contact?.email?.message}
            </p>
          </div>
          <div>
            <label className="block font-medium">Phone</label>
            <input
              {...register("contact.phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid phone number",
                },
              })}
              className="w-full border rounded p-2"
              placeholder="Phone"
            />
            <p className="text-red-500 text-sm">
              {errors.contact?.phone?.message}
            </p>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Opening Time</label>
            <input
              {...register("operatingHours.open", {
                required: "Opening time is required",
              })}
              type="time"
              className="w-full border rounded p-2"
            />
            <p className="text-red-500 text-sm">
              {errors.operatingHours?.open?.message}
            </p>
          </div>
          <div>
            <label className="block font-medium">Closing Time</label>
            <input
              {...register("operatingHours.close", {
                required: "Closing time is required",
              })}
              type="time"
              className="w-full border rounded p-2"
            />
            <p className="text-red-500 text-sm">
              {errors.operatingHours?.close?.message}
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Register Store
        </button>
      </form>
    </div>
  );
};

export default RegisterStore;
