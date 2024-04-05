import React from 'react'
import '../src/App.css'
import Scrollitems from './Scrollitems'
import {Link,NavLink} from 'react-router-dom'

export default function Scrollbar() {
  return (
    <div className='w-24 h-fit bg-slate-300'>
        {/* <Scrollitems title= source= link="/dashboard"/>
        <Scrollitems title="Machine Learning" source="../brain.png" link="ml"/> */}


        <div className='h-32 flex flex-col justify-center items-center border-b-2 border-slate-500 mt-2'>
        <NavLink
          to="/dashboard"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              color: isActive ? "orange" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
              fontWeight: isActive ? "bold" : "",
            };
          }}>
          <div className=' p-2 box-content'><img className="h-16 w-16" src="../dashboard.png"></img></div>
          <div className='p-2'><p>Dashboard</p></div>
        </NavLink>
        </div>

        <div className='h-32 flex flex-col justify-center items-center border-b-2 border-slate-500'>
        <NavLink
          to="/ml"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              color: isActive ? "orange" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
              fontWeight: isActive ? "bold" : "",
            };
          }}>
          <div className=' p-2 box-content'><img className="h-16 w-16" src="../brain.png"></img></div>
          <div className='p-2'><p>ML</p></div>
        </NavLink>
        </div>

        <div className='h-32 flex flex-col justify-center items-center border-b-2 border-slate-500 '>
        <NavLink
          to="/profile"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              color: isActive ? "orange" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
              fontWeight: isActive ? "bold" : "",
            };
          }}>
          <div className=' p-2 box-content'><img className="h-16 w-16" src="../user.png"></img></div>
          <div className='p-2'><p>Profile</p></div>
        </NavLink>
        </div>

        <div className='h-32 flex flex-col justify-center items-center border-b-2 border-slate-500'>
        <NavLink
          to="/info"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              color: isActive ? "orange" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
              fontWeight: isActive ? "bold" : "",
            };
          }}>
          <div className=' p-2 box-content'><img className="h-16 w-16" src="../home.png"></img></div>
          <div className='p-2'><p>Village Info</p></div>
        </NavLink>
        </div>

        <div className='h-32 flex flex-col justify-center items-center border-b-2 border-slate-500'>
        <NavLink
          to="/reports"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              color: isActive ? "orange" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
              fontWeight: isActive ? "bold" : "",
            };
          }}>
          <div className=' p-2 box-content'><img className="h-16 w-16" src="../review.png"></img></div>
          <div className='p-2'><p>Complains </p></div>
        </NavLink>
        </div>
    </div>
  )
}
