import React from 'react';
import Header from '../../components/Header'
import Scrollbar from '../../components/Scrollbar'
import { Outlet } from 'react-router-dom';
import RightPage from '../RightPage';

export default function Layout() {
  return (
    <>
    <Header />
    <div className='flex flex-row'>
   
    <Outlet />
    </div> 
    </>
  )
}
