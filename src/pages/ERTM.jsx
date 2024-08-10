import React from 'react'
import Sidebar from '../components/Sidebar';

const ERTM = () => {
  return (
    <div className='container'>
    <Sidebar />
    <div className='content'>
    <div className='content-paragraph'>
        <h3>WCB / 8</h3>
        <span>Team Management</span>
     <button>Add new</button>
      </div>
      <div className='content-span'>
        <h2>Team Members</h2>
        <p>The functionality that can be added to a team could include things like: Adding members Setting roles and permissions for members Sharing resources and content within the team, etc. Setting up workflows and processes specific to the team</p>
      </div>
      </div>
      </div>

  )
}

export default ERTM