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
import LandingPage from '../components/Landing/LandingPage'
import Login from '../components/auth/Login'
import Complaint from '../components/Complaint/Complaint'
// import NewLineChart from '../components/RealTimeDashboard/NewLineChart'

// function Login() {
//   return (
//     <>
//       {/*
//         This example requires updating your template:

//         ```
//         <html class="h-full bg-white">
//         <body class="h-full">
//         ```
//       */}
//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <img
//             className="mx-auto h-10 w-auto"
//             src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//             alt="Your Company"
//           />
//           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//             Sign in to your account
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form className="space-y-6" action="#" method="POST">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                   Password
//                 </label>
//                 <div className="text-sm">
//                   <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
//                     Forgot password?
//                   </a>
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Sign in
//               </button>
//             </div>
//           </form>

//           <p className="mt-10 text-center text-sm text-gray-500">
//             Not a member?{' '}
//             <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
//               Start a 14 day free trial
//             </a>
//           </p>
//         </div>
//       </div>
//     </>
//   )
// }

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" >
      <Route path="" element={<LandingPage />}> </Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="complaint" element={<Complaint />}/>
      <Route path="" element={<Layout />}>
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
          <TalukaMapContianer url="http://localhost:3000/api/v1/geojson/taluka" centerUrl="http://localhost:3000/api/v1/geojson/talukaCenter" center={[18.8047902, 76.528924]}/>
          </>
          }
           />
          
           <Route path="/villages/:District_ID/:Tehsil_ID" element={
          <>
          <VillageMapContianer url="http://localhost:3000/api/v1/geojson/villages" centerUrl="http://localhost:3000/api/v1/geojson/taluka" center={[18.8047902, 76.528924]}/>
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
