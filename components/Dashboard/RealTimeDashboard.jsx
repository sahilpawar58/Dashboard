import React, { useEffect } from 'react';
import NewLineChart from './NewLineChart';
import { useNavigate } from 'react-router-dom';
import NodeTwo from './NodeTwo';
import NodelOne from './NodelOne';
import axios from 'axios';

async function verifyUser(){
  const response = await axios.post(
    "http://localhost:3000/api/v1/user/verify",
    null, // Since we are not sending any data in the body, pass null or an empty object
    { withCredentials: true } 
  );
  return response
}

const getData = async () => {
  const response = await axios.get(
    url,
    { withCredentials: true } 
  );
  return await response.data.data;
};

const RealtimeDashboard = () => {
  const navigate = useNavigate();
  // let user = verifyUser();
  

  // const response = await axios.post(
  //   "http://localhost:3000/api/v1/user/verify",
  //   formData,
  //   { withCredentials: true } 
  // );

  // console.log(response.status)

  return (
    <div className="flex flex-col " name="Real">
      <NodelOne />
    </div>
  );
};

export default RealtimeDashboard;
