import React from 'react'
import Sidebar from '../components/Sidebar'
const Polling = () => {
  return (
   <div className='poll-container'>
    <Sidebar/>
    <div className='poll-content'>
      <div className='poll'>
      <h3>WCB / 8</h3>
        <span>Team Management</span>
      </div>
      <div className='repo-span'>
        <h2>Polling Stations</h2>
        <p>The functionality that can be added to a team could include things like: Adding members Setting roles and permissions for members Sharing resources and content within the team, etc. Setting up workflows and processes specific to the team</p>
      </div>
     <table className='table-report'>
    <thead>
        <tr>
            <th>Block Code</th>
            <th>Block Code Area</th>
            <th>Polling Station Area</th>
            <th>Total Booth</th>
            <th>Ward</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>188080101</td>
            <td>Peer Colony Gali No. 4</td>
            <td>
                Govt. Girls Elementary School, Farooq Colony, Street No. 4, Walton Cantt
                <span class="urdu">گورنمنٹ گرلز ایلیمنٹری سکول ، فاروق کالونی ، گلی نمبر 04، والٹن کینٹ۔ (مشترکہ)۔</span>
            </td>
            <td>3</td>
            <td>WCB 8</td>
        </tr>
        <tr>
            <td>188080102</td>
            <td>Peer Colony Gali No. 4,5</td>
            <td>
                Govt. Girls Elementary School, Farooq Colony, Street No. 4, Walton Cantt
                <span class="urdu">گورنمنٹ گرلز ایلیمنٹری سکول ، فاروق کالونی ، گلی نمبر 04، والٹن کینٹ۔ (مشترکہ)۔</span>
            </td>
            <td>3</td>
            <td>WCB 8</td>
        </tr>
        <tr>
            <td>188080103</td>
            <td>Peer Colony</td>
            <td>
                Govt. Girls Elementary School, Farooq Colony, Street No. 4, Walton Cantt
                <span class="urdu">گورنمنٹ گرلز ایلیمنٹری سکول ، فاروق کالونی ، گلی نمبر 04، والٹن کینٹ۔ (مشترکہ)۔</span>
            </td>
            <td>4</td>
            <td>WCB 8</td>
        </tr>
        <tr>
            <td>188080104</td>
            <td>Peer Colony Gali No. 6,7</td>
            <td>
                Govt. Girls Elementary School, Farooq Colony, Street No. 4, Walton Cantt
                <span class="urdu">گورنمنٹ گرلز ایلیمنٹری سکول ، فاروق کالونی ، گلی نمبر 04، والٹن کینٹ۔ (مشترکہ)۔</span>
            </td>
            <td>4</td>
            <td>WCB 8</td>
        </tr>
        <tr>
            <td>188080105</td>
            <td>Peer Colony Gali No. 7</td>
            <td>
                Md Public High School, Farooq Colony Near Tuheed Masjid Boys Scout Bazar- Peer Colony Walton Cantt
                <span class="urdu">ایم ڈی ہائی سکول ، فاروق کالونی نزدرتوحید مسجد، بوائز سکاؤٹ بازار، پیر کالونی، والٹن کینٹ۔ (مشترکہ)۔</span>
            </td>
            <td>4</td>
            <td>WCB 8</td>
        </tr>
        <tr>
            <td>188080106</td>
            <td>Peer Colony Gali No. 7</td>
            <td>
                Md Public High School, Farooq Colony Near Tuheed Masjid Boys Scout Bazar- Peer Colony Walton Cantt
                <span class="urdu">ایم ڈی ہائی سکول ، فاروق کالونی نزدرتوحید مسجد، بوائز سکاؤٹ بازار، پیر کالونی، والٹن کینٹ۔ (مشترکہ)۔</span>
            </td>
            <td>4</td>
            <td>WCB 8</td>
        </tr>
    </tbody>
</table>

      </div>
    </div>
  )
}

export default Polling