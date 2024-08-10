import React from 'react'
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
  <>
    <div className='app-container'>
    <Sidebar />
    <div className='main-content'>
        <div className='round'>
   <div className='box-1'>
    <p><b>Block Code</b></p>
    <h2>41</h2>
    <span>Total</span>
    <li><Link className='link' to={"/view"}>View Report</Link></li>

   </div>
   <div className='box-2'>
    <p><b>Total Voters</b></p>
    <h2>28,28</h2>
    <span>Total voters of this Halka</span>
   </div>
   <div className='box-3'>
    <p><b>Halka</b></p>
    <h2>WCB  8</h2>
    <span>Halka of Pakistan</span>
   </div>
   </div>



   <div className='round-2'>
   <div className='box-1'>
    <p><b>Total Searches</b></p>
    <h2>14</h2>
    <span>Total Searches(i.e by CNIC,phone etc.)</span>
   </div>
   <div className='box-2'>
    <p><b>Total Searches by CNIC</b></p>
    <h2>10</h2>
    <span>Total</span>
   </div>
   <div className='box-3'>
    <p><b>Total Searches by Phone</b></p>
    <h2>4</h2>
    <span>Total Searches by phone number </span>
   </div>
   </div>
    </div>
  </div>
  
  </>
  )
}

export default Home