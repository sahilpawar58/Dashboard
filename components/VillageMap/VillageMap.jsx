import React, { useEffect, useState, Suspense } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import axios from 'axios';
import { AiOutlineLoading } from "react-icons/ai";
import '../../src/App.css';
import { useNavigate,useParams } from 'react-router-dom';
import Legend from '../Legend/Legend';



function StateMap({url,center,District_ID}) {
  const [geojsonData, setGeojsonData] = useState(null);
  const [loading,setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  const [map, setMap] = useState(null);

 

  useEffect(() => {
    axios({
      method: 'get',
      url: url,
      // responseType: 'stream'
    })
    .then(function (response) {
      console.log(response.data)
      setGeojsonData(response.data.data);
      setLoading(false);
    });

  }, [id]);

  function getColor(d) {
    return d > 14673187 ? '#0047ab' :
           d > 13673187  ? '#0073cf' :
           d > 12673187  ? '#007FFF' :
           d > 11673187  ? '#89CFF0' :
           d > 106   ? '#9bddff' :
                      '#9bddff';
  }

  function style(feature) {
    return {
      weight: 1,
      opacity: 1,
      color: 'grey',
      dashArray: '',
      fillOpacity: 0.9,
      fillColor: getColor(feature.properties.total)
    };
  }

  function highlightFeature(e) {
    const layer = e.target;
    layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7
    });
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
  }

  function resetHighlight(e) {
    const layer = e.target;
    layer.setStyle({
      weight: 1,
      color: 'grey',
      dashArray: '',
      fillOpacity: 0.9,
      fillColor: getColor(layer.feature.properties.total)
    });
  }

  function redirectToPage(feature) {
    console.log(feature.properties.District_ID);
    // const District_ID = feature.properties.District_ID;
    // navigate(`/villages/${District_ID}`);
  }

  function onEachFeature(feature, layer) {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: () => redirectToPage(feature)
    });
  }

  return (
    <>
    {loading?
    <div className='flex flex-row justify-center h-full w-full items-center'><AiOutlineLoading className='animate-spin h-20 w-20 mr-3'/><p>Loading...</p></div>:
    <MapContainer center={center} zoom={7} style={{ height: '100vh' }}  whenCreated={setMap}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {geojsonData && (
        <GeoJSON data={geojsonData} style={style} onEachFeature={onEachFeature} />
      )}
      <Legend map={map} />
    </MapContainer>}
    

    
    </>
  );
}

export default StateMap;