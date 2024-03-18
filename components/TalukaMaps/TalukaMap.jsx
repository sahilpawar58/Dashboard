import React, { useEffect, useState, Suspense, useContext } from 'react';
import { MapContainer, TileLayer, GeoJSON,useMap } from 'react-leaflet';
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

const Legend = ({ hoveredFeature }) => {
  const map = useMap();
  const {NewCenter,setNewCenter} = useContext(MapContext)
  useEffect(() => {
    const legend = L.control({ position: "bottomleft" });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "description");

      // const text = hoveredFeature ? JSON.stringify(hoveredFeature.properties, null, 2) : "No feature hovered";
      const text = hoveredFeature ? (`<div className="bg-red-400 shadow">
      <h2 className="text-lg font-bold mb-2">Hovered Feature:</h2>
      <pre style="background-color:orange;">
      <b>Tehsil Name: </b>${JSON.stringify(hoveredFeature.properties.TEHSIL, null, 2)}
      <b>District: </b>${JSON.stringify(hoveredFeature.properties.District, null, 2)}
      <b>Tehsil_Id: </b>${JSON.stringify(hoveredFeature.properties.Tehsil_NO, null, 2)}
      </pre>
    </div>`): "No feature hovered";
      // console.log(hoveredFeature ? JSON.stringify(hoveredFeature.properties.name, null, 2) : "No feature hovered")
      let avg_cor = []
      for(let i=0;i<hoveredFeature?.geometry?.coordinates.length;i++){
        console.log(hoveredFeature.geometry.coordinates[i][0].length);
        avg_cor +=  findAverage(hoveredFeature.geometry.coordinates[i])
      }
      console.log(avg_cor)
      if(hoveredFeature?.geometry?.coordinates[0]){
        let max=0;
        let index=0;
        for(let i=0;i<hoveredFeature.geometry.coordinates.length;i++){
          console.log(hoveredFeature.geometry.coordinates[i][0].length)
          if(hoveredFeature.geometry.coordinates[i][0].length > max){
            index=i;
            max=hoveredFeature.geometry.coordinates[i][0].length;
          }
        }
        console.log("max is= "+max/10)
        let ini=false;
        if(max/10 <1){
          ini =true;
          for(let i=0;i<hoveredFeature.geometry.coordinates.length;i++){
            console.log(hoveredFeature.geometry.coordinates[i].length)
            if(hoveredFeature.geometry.coordinates[i].length > max){
              index=i;
              max=hoveredFeature.geometry.coordinates[i].length;
            }
          }
        }
        if(ini){
          let x= findAverage(hoveredFeature?.geometry.coordinates[index]);
          let temp = NewCenter;
        temp.push(x)
        setNewCenter(temp)
          // console.log(hoveredFeature?.geometry?.coordinates[index])
          console.log(x)
        }else{
          let x =findAverage(hoveredFeature?.geometry?.coordinates[index][0]);
          let temp = NewCenter;
        temp.push(x)
        setNewCenter(temp)
          // console.log(hoveredFeature?.geometry?.coordinates[index][0])
          console.log(x)
        }
        
        // console.log(max)
        // console.log(findCentroid(hoveredFeature.geometry))
      }

      div.innerHTML = text;

      return div;
    };

    legend.addTo(map);

    return () => {
      legend.remove();
    };
  }, [hoveredFeature]);

  return null;
};


function VillageMap({url,District_ID}) {
  const [geojsonData, setGeojsonData] = useState(null);
  const [loading,setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  // const [map, setMap] = useState(null);
  const [hovered,sethover] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const {NewCenter,setNewCenter} = useContext(MapContext)

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
  function removeLegend(){
    const map = useMap();
    map.remove(document.getElementsByClassName("description"))
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
    // setHoveredFeature(layer.feature);
    // clearTimeout(timeoutId); // Clear any existing timeout
    setHoveredFeature(layer.feature);

    // // Delay the update of the hovered feature state
    // timeoutId = setTimeout(() => {
    //   setHoveredFeature(null);
    // }, 2000); // Adjust the delay time as needed
  }

  function resetHighlight(e) {
    const layer = e.target;
    // Check if the current hovered feature is the same as the feature being unhovered
    if (hoveredFeature !== layer.feature) {
      layer.setStyle({
        weight: 1,
        color: 'grey',
        dashArray: '',
        fillOpacity: 0.9,
        fillColor: getColor(layer.feature.properties.total)
      });
    }
    // clearTimeout(timeoutId);
    // If the current hovered feature is the same, it means it will be handled by highlightFeature
  }
  

  function redirectToPage(feature) {
    //console.log(feature.properties.District_ID);
    const District_ID = feature.properties.District_ID;
    const Tehsil_NO = feature.properties.Tehsil_NO;
    navigate(`/villages/${District_ID}/${Tehsil_NO}`);
  }

  function onEachFeature(feature, layer) {
    layer.on({
      mouseover: (e) => {highlightFeature(e)},
      mouseout: (e) => {resetHighlight(e)},
      click: () => redirectToPage(feature),
    });
  }

  return (
    <>
    {loading?
    <div className='flex flex-row justify-center h-full w-full items-center'><AiOutlineLoading className='animate-spin h-20 w-20 mr-3'/><p>Loading...</p></div>:
    <MapContainer center={NewCenter[NewCenter.length-1]} zoom={9} style={{ height: '100vh', width: '100%' }} >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {geojsonData && (
        <GeoJSON data={geojsonData} style={style} onEachFeature={onEachFeature} />
      )}
       <Legend hoveredFeature={hoveredFeature}/>
       
    </MapContainer>}
    </>
  );
}

export default VillageMap;
