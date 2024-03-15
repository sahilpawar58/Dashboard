import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../components/Header'
import Scrollbar from '../components/Scrollbar'
import MapContainer from '../components/MapContianer'
import RightPage from '../components/RightPage';
import Layout from '../components/Layout/Layout'
import StateDetails from '../components/StateDetails/StateDetails'
import TalukaMapContianer from '../components/TalukaMaps/TalukaMapContianer'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import StateMapContianer from '../components/StateMap/StateMapContianer'
import RealTimeDashboard from '../components/Dashboard/RealTimeDashboard'
import VillageMapContianer from '../components/VillageMaps/VillageMapContainer'
import MapContextProvider from '../components/context/MapContextProvider'
import DetailedMap from '../components/DetailedMap/DetailedMap'
import DetailedMapContainer from '../components/DetailedMap/DetailedMapContainer'
// import NewLineChart from '../components/RealTimeDashboard/NewLineChart'

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<Layout />}>
         <Route path="main" element={
         <>
         <MapContainer url="http://localhost:3000/api/v1/geojson" center={[22.735656, 79.89257]}/>
         <RightPage />
         </>} 
         />
         
         <Route path="/state/:id" element={
          <>
          <StateMapContianer url="http://localhost:3000/api/v1/geojson/state" center={[19.0760, 76.2685]}/>
          </>
          } 
          />
          <Route path="/taluka/:District_ID" element={
          <>
          <TalukaMapContianer url="http://localhost:3000/api/v1/geojson/taluka" center={[18.8047902, 76.528924]}/>
          </>
          }
           />
          
           <Route path="/villages/:District_ID/:Tehsil_ID" element={
          <>
          <VillageMapContianer url="http://localhost:3000/api/v1/geojson/villages" center={[18.8047902, 76.528924]}/>
          </>
          }
           />
           <Route path="/village" element={
            <DetailedMapContainer >
            <DetailedMap />
          </DetailedMapContainer>
           }/>
           <Route path="/Dashboard" element={
          <>
          
          <RealTimeDashboard />
          </>
          }/>
    </Route>
  )
)

function App() {
  return (
    <>
    
    {/* <Header/>
    <div className='flex flex-row'>
    <Scrollbar/>
    <MapContainer />
    <RightPage />
    </div> */}
    <MapContextProvider>
    <RouterProvider router={router} />
    </MapContextProvider>
    </>
  )
}

export default App
