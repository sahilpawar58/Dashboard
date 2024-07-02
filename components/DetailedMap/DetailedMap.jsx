import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import axios from 'axios';
import { AiOutlineLoading } from "react-icons/ai";
import L from 'leaflet';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../urlconfig';

function findAverage(coords) {
  let totalX = 0;
  let totalY = 0;

  // Sum up all x and y coordinates
  coords.forEach(coord => {
    const [x, y] = coord;
    totalX += x;
    totalY += y;
  });

  // Calculate the average
  const averageX = totalX / coords.length;
  const averageY = totalY / coords.length;

  return [averageY ,averageX ];
}

function DetailedMap({url,center,District_ID}) {
  const [geojsonData, setGeojsonData] = useState(null);
  const [loading,setLoading] = useState(true);
  const navigate = useNavigate();
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [NewCenter,setNewCenter] = useState(null);

  useEffect(() => {
    axios.post(`${API_URL}/api/v1/geojson/village`, {
      districtID: localStorage.getItem("District_ID") || 11,
      tehsilID: localStorage.getItem("Tehsil_NO") || 9,
      name: localStorage.getItem("Village") || "Birsola"
    })  
    .then(function (response) {
      setGeojsonData(response.data.data);
      console.log(response.data.data);
      setNewCenter(findAverage(response.data.data[0].geometry.coordinates[0]))
      setLoading(false);
    });
  }, []);

  function redirectToPage() {
    console.log('hiii')
    navigate(`/dashboard`);
  }

  function style(feature) {
    return {
      weight: 5,
      opacity: 1,
      color: 'grey',
      dashArray: '',
      fillOpacity: 0.4,
    };
  }
  
  return (
    <>
    {loading ?
    <div className='flex flex-row justify-center h-full w-full items-center'><AiOutlineLoading className='animate-spin h-20 w-20 mr-3'/><p>Loading...</p></div>:

     <MapContainer center={NewCenter} zoom={14} style={{ height: '100vh', width: '100%' }} >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {geojsonData &&
        (<GeoJSON data={geojsonData}  style={style} />)
      }
       <Marker position={[19.384336, 72.828992]}>
         <Popup>
           <button onClick={redirectToPage}>Click me</button>
         </Popup>
       </Marker>
    </MapContainer>}
    </>
  );
}

export default DetailedMap;
