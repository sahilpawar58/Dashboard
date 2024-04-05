import React, { useEffect, useState, Suspense ,useContext} from 'react';
import { MapContainer, TileLayer, GeoJSON,useMap,Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import axios from 'axios';
import { AiOutlineLoading } from "react-icons/ai";
import '../../src/App.css';
import { useNavigate,useParams } from 'react-router-dom';
// import Legend from '../Legend/Legend';
import L from 'leaflet';
import MapContext from '../context/MapContext'

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

// const Marker =() => {
//   var marker;
//   const map = useMap();

//   // Function to add marker and retrieve its coordinates
//   function addMarkerAndRetrieveCoordinates(e) {
//     if (marker) {
//       map.removeLayer(marker); // Remove existing marker if any
//     }
//     marker = L.marker(e.latlng).addTo(map); // Add new marker
//     var coordinates = e.latlng.lat.toFixed(6) + ', ' + e.latlng.lng.toFixed(6); 
//     console.log(coordinates)
//   }

//   // Listen for click events on the map and call the function to add marker and retrieve coordinates
//   map.on('click', addMarkerAndRetrieveCoordinates);
// }



function DetailedMap({url,center,District_ID}) {
  const [geojsonData, setGeojsonData] = useState(null);
  const [loading,setLoading] = useState(true);
  const navigate = useNavigate();
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [NewCenter,setNewCenter] = useState(null);

  useEffect(() => {
    axios.post('http://localhost:3000/api/v1/geojson/village', {
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
  })


  function style(feature) {
    return {
      weight: 5,
      opacity: 1,
      color: 'grey',
      dashArray: '',
      fillOpacity: 0.4,
      // fillColor: "#FFFFFF"
    };
  }
  function redirectToPage(feature) {
    navigate(`/dashboard`);
  }
  
  // function redirectToPage(feature) {
  //   const District_ID = feature.properties.District_ID;
  //   const Tehsil_NO = feature.properties.Tehsil_NO;
  //   navigate(`/villages/${District_ID}/${Tehsil_NO}`);
  // }

  function onEachFeature(feature, layer) {
    layer.on({
      // mouseover: (e) => {highlightFeature(e)},
      // mouseout: (e) => {resetHighlight(e)},
      // click: () => redirectToPage(feature),
    });
  }

  return (
    <>
    {loading ?
    <div className='flex flex-row justify-center h-full w-full items-center'><AiOutlineLoading className='animate-spin h-20 w-20 mr-3'/><p>Loading...</p></div>:

     <MapContainer center={NewCenter} zoom={14} style={{ height: '100vh', width: '100%' }} >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {geojsonData &&
        (<GeoJSON data={geojsonData}  style={style} onEachFeature={onEachFeature} />)
      }
       <Marker position={[19.384336, 72.828992]} onClick={redirectToPage}/>
       
       
    </MapContainer>}
    </>
  );
}

export default DetailedMap;
