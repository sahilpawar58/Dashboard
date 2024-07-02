import { useState,useContext,useEffect } from 'react'
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
  Navigate,
  Outlet
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
import VerifyAuth from '../components/auth/VerifyAuth'
import AuthContextProvider from '../components/context/AuthContextProvider'
import AuthContext from '../components/context/AuthContext'
import axios from 'axios'
import Profile from '../components/Profile/Profile'
import VillageInfo from '../components/Profile/VillageInfo'
import CheckComplaints from '../components/Complaint/CheckComplaints'
import MachineLearning from '../components/MachineLearning/MachineLearning'
import { API_URL } from '../urlconfig'
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
async function verifyUser(){
  try{
      const response = await axios.post(
          `${API_URL}/api/v1/user/verify`,
          null, // Since we are not sending any data in the body, pass null or an empty object
          { withCredentials: true } 
        );
        console.log(response)
        return response;
  }catch(e){
          return {};
  }
}



const PrivateRoutes = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true); // Track loading state
    const {user,setUser,village,setVillage} = useContext(AuthContext);

    useEffect(() => {
      const setAuthentication = async () => {
          try {
              const response = await axios.post(
                  `${API_URL}/api/v1/user/verify`,
                  { /* Optional data to send in the request body */ },
                  { withCredentials: true }
              );
              let villageinfo = null; // Initialize villageinfo outside the if block
              console.log(response.data.data._id)
              if (response && response.data ) {
                  villageinfo = await axios.post(
                      `${API_URL}/api/v1/geojson/villageinfo`,
                      { "id": response.data.data._id },
                      { withCredentials: true }
                  );
              }
              // console.log(villageinfo)
              if (response.status === 200 && villageinfo && villageinfo.status === 200) {
                  setIsAuthenticated(true);
                  setUser(response.data);
                  setVillage(villageinfo.data.data);
                  // console.log(villageinfo.data);
                  // console.log(response.data);
              } else {
                  setIsAuthenticated(false);
              }
          } catch (error) {
              console.error("Error setting authentication:", error);
              setIsAuthenticated(false);
          } finally {
              // Once the authentication check is complete, set loading to false
              setLoading(false);
          }
      };
  
      setAuthentication();
  }, []);
  

    // If loading, return a loading indicator or skeleton UI
    if (loading) {
        return <div>Loading...</div>;
    }

    // Once loading is complete, return either Outlet or Navigate based on authentication status
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};


let geojson = `${API_URL}/api/v1/geojson`

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" >
      <Route path="" element={<LandingPage />}> </Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="complaint" element={<Complaint />}/>
      <Route path="" element={<Layout />}>
         <Route path="main" element={
         <>
         <MapContainer url={`${API_URL}/api/v1/geojson`} center={[22.735656, 79.89257]}/>
         <RightPage />
         </>} 
         />
         
         <Route path="/state/:id" element={
          <>
          <StateMapContianer url={`${API_URL}/api/v1/geojson/state`} center={[19.0760, 76.2685]}/>
          </>
          } 
          />
          <Route path="/taluka/:District_ID" element={
          <>
          <TalukaMapContianer url={`${API_URL}/api/v1/geojson/taluka`} centerUrl={`${API_URL}/api/v1/geojson/talukaCenter`} center={[18.8047902, 76.528924]}/>
          </>
          }
           />
          
           <Route path="/villages/:District_ID/:Tehsil_ID" element={
          <>
          <VillageMapContianer url={`${API_URL}/api/v1/geojson/villages`} centerUrl={`${API_URL}/api/v1/geojson/taluka`} center={[18.8047902, 76.528924]}/>
          </>
          }
           />
           <Route path="/village" element={
            <DetailedMapContainer >
            <DetailedMap />
          </DetailedMapContainer>
           }/>

          {/* <Route element={<AuthContextProvider><PrivateRoutes /></AuthContextProvider>}>
          <Route element={<RealTimeDashboard/>} path="/dashboard" exact/>
          <Route element={<VillageInfo />} path="/info" /></Route>
          <Route element={<Profile/>} path="/profile" /></Route>
          
          <Route element={<Complaint />} path="reports"/> */}

          <Route element={<AuthContextProvider> <Scrollbar/><PrivateRoutes /></AuthContextProvider>}>
          <Route element={<RealTimeDashboard/>} path='/dashboard'/>
          <Route element={<Profile/>} path="/profile" />
          <Route element={<VillageInfo />} path="/info" />
          <Route element={<CheckComplaints />} path="/checkcomplaints" />
          <Route element={<MachineLearning />} path="/ml" />

          </Route>
          
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
