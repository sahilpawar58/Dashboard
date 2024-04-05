import React, { useContext, useEffect } from 'react'
import AuthContext from '../context/AuthContext';
import { Outlet } from 'react-router-dom';
import axios from 'axios';


async function verifyUser(){
    try{
        const response = await axios.post(
            "http://localhost:3000/api/v1/user/verify",
            null, // Since we are not sending any data in the body, pass null or an empty object
            { withCredentials: true } 
          );
          return response;
    }catch(e){
            return {};
    }
  }
function VerifyAuth() {
    const {user,setUser} = useContext(AuthContext)
    useEffect(() => {
        // Define an async function inside useEffect to use await
        const updateUser = async () => {
            try {
                // Call verifyUser function and await its result
                const userData = await verifyUser();
                console.log(userData)
                // Update user state with the result
                setUser(userData.data);
            } catch (error) {
                // Handle errors if any
                console.error("Error verifying user:", error);
            }
        };

        // Call the async function to update the user state
        updateUser();
    }, [setUser]); // Add setUser as a dependency to useEffect

    // setUser(verifyUser())

  return (
    <>
    <div>VerifyAuth </div>
    {user!={} ?<Outlet />:
    <>
    <div><p>404 Not Found</p></div>
    </>}
    </>
  )
}

export default VerifyAuth