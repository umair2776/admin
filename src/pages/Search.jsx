import React from 'react'
import Sidebar from '../components/Sidebar';

const Search = () => {
  return (
    <div className='search-container'>
    <Sidebar />
    <div className='search-content'>
      <div className='search-report'>
        <span>WCB / Search</span>
        <h2>Search Report</h2>
        <p>A "search report" can refer to various reports that involve searching or finding information.It can search report on behalf of your block code , phone number and cnic that you provide</p>
      </div>
      <div className='search-boxes'>
        <div className='search-1'>
        <div className='black-search'>
          <h4>BlockCode</h4>
        </div>
        <div className='weight-search'>
          <p>Search by Age</p>
        </div>
        </div>

        <div className='search-2'>
        <div className='black-search'>
          <h4>BlockCode</h4>
        </div>
        <div className='weight-search'>
          <p>Search by CNIC</p>
        </div>
        </div>
        <div className='search-3'>
        <div className='black-search'>
          <h4>Block Code</h4>
        </div>
        <div className='weight-search'>
          <p>Search by Phone Number</p>
        </div>
        </div>
      </div>
      <div className='search-4'>
        <div className='black-search'>
          <h4>Halka (WCB 8)</h4>
        </div>
        <div className='weight-search'>
          <p>Search by CNIC</p>
        </div>
        </div>
      </div>
   
      </div>
  )
}

export default Search