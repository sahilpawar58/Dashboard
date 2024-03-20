import React, { useEffect } from 'react';
import NewLineChart from './NewLineChart';
import { useNavigate } from 'react-router-dom';

const RealtimeDashboard = () => {
  const navigate = useNavigate();

  if(!document.cookie.accessToken){
    navigate('/login');
  }

  return (
    <div className="flex flex-col">
      <NewLineChart />
      <NewLineChart />
      <NewLineChart />
    </div>
  );
};

export default RealtimeDashboard;
