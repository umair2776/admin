import React from 'react'
import Sidebar from '../components/Sidebar';


const Team = () => {
  return (
    <div className='team-container'>
    <Sidebar />
    <div className='team-content'>
      <div className='image'><img src='https://chatapp-13732.web.app/static/media/pakistanflag.3cabd6a02c20508e10a5d28e2fa8a859.svg'/></div>
      <div className='team'>
        <h3>WCB / 8</h3>
        <span>Team Management</span>
     <button>Add new</button>
      </div>
      <div className='members'>
        <h2>Team Members</h2>
        <p>The functionality that can be added to a team could include things like: Adding members Setting roles and permissions for members Sharing resources and content within the team, etc. Setting up workflows and processes specific to the team</p>
      </div>



      <table class="user-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Created At</th>
                <th>Last LoggedIn</th>
                <th>Last Location</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Ali</td>
                <td>mali567@gmail.com</td>
                <td>03219985462</td>
                <td>2023-02-24 07:15:51</td>
                <td>2023-02-24 07:37:17</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Umer Khan</td>
                <td>mumer567@gmail.com</td>
                <td>03236698714</td>
                <td>2023-02-23 11:45:16</td>
                <td>2023-03-14 08:52:06</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Umer</td>
                <td>mumer56@gmail.com</td>
                <td>923569879857</td>
                <td>2023-02-23 11:23:30</td>
                <td>2023-03-14 08:52:57</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
     
      </div>
      </div>
    
      
  )
}

export default Team