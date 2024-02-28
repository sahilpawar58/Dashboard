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
import VillageMapContianer from '../components/VillageMap/VillageMapContianer'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import StateMapContianer from '../components/StateMap/StateMapContianer'

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
          <StateMapContianer url="http://localhost:3000/api/v1/geojson/state" center={[18.8047902, 76.528924]}/>
          </>
          } 
          />
          <Route path="/villages/:District_ID" element={
          <>
          <VillageMapContianer url="http://localhost:3000/api/v1/geojson/villages" center={[18.8047902, 76.528924]}/>
          </>
          } />
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
    <RouterProvider router={router} />
    </>
  )
}

export default App
