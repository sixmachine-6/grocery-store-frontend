import { FaClock, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function StoreListItem({ store }) {
  return (
    <div className="border rounded-3xl shadow-md overflow-hidden bg-slate-100 mx-2 flex items-center">
      {/* Store Image */}
      <img
        src={"./../landing.png"}
        alt={store.name}
        className="w-24 object-cover"
      />

      {/* Store Info */}
      <div className="p-4 text-center">
        {/* Store Name */}
        <h3 className="font-bold mb-2 text-lg">
          {store.name === "Old-SC-Vegetables-&-Fruit-Shop"
            ? "Old-SC-Veg-&-Fru-Shop"
            : store.name}
        </h3>

        {/* Operating Hours */}
        <div className="flex items-center justify-center text-gray-600 mb-1 text-sm">
          <FaClock className="mr-2 text-blue-500" />
          {store?.operatingHours.open} - {store.operatingHours.close}
        </div>

        {/* Contact */}
        <div className="flex items-center justify-center text-gray-600 mb-1 text-sm">
          <FaPhone className="mr-2 text-green-500" />
          {store?.contact?.phone}
        </div>

        {/* Address */}
        <div className="flex items-center justify-center text-gray-600 text-sm">
          <FaMapMarkerAlt className="mr-2 text-red-500" />
          {`${store.address.street}, ${store.address.city}`}
        </div>
      </div>
    </div>
  );
}

export default StoreListItem;
