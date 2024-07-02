import React from 'react';
import Header from '../../components/Header'
import Scrollbar from '../../components/Scrollbar'
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import RightPage from '../RightPage';

export default function Layout() {
  useEffect(() => {
    // Smooth scroll by 200 pixels on load
    window.scrollBy({ top: 200, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
    <Header />
    <div className='flex flex-row'>
   
    <Outlet />
    </div> 
    </>
  )
}
