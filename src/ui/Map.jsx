import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map({ location, error }) {
  if (error)
    return <p className="font-bold text-xl text-center p-4">{error}</p>;
  if (!location)
    return (
      <p className="font-bold text-xl text-center p-4">Fetching location...</p>
    );
  return (
    <MapContainer
      center={[location.latitude, location.longitude]}
      zoom={13}
      style={{ height: "200px", width: "100%", marginTop: "2rem" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[location.latitude, location.longitude]}>
        <Popup>Your Location</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
