import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import SideBar from '../components/SideBar/SideBar'
import Rejected from '../components/Rejected/Rejected'

function RejectedList() {
  return (
    <div>
        <NavBar/>
        <div className='d-flex'>
            <SideBar/>
            <Rejected/>
        </div>
    </div>
  )
}

export default RejectedList