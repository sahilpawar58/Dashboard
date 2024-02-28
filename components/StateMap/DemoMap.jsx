import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "./Map.css";
import Legend from "../Legend/Legend";

const INITIAL_MAP_CONFIG = { center: [41.98311, 2.82493], zoom: 14 };

function DemoMap() {
  const [map, setMap] = useState(null);

  return (
    <MapContainer
      center={INITIAL_MAP_CONFIG.center}
      zoom={INITIAL_MAP_CONFIG.zoom}
      scrollWheelZoom={true}
      whenCreated={setMap}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Legend map={map} />
    </MapContainer>
  );
}

export default DemoMap;
