import React from 'react'
import Approved from '../components/Approved/Approved'
import NavBar from '../components/NavBar/NavBar'
import SideBar from '../components/SideBar/SideBar'

function ApprovedList() {
  return (
    <div>
        <NavBar/>
        <div className='d-flex'>
        <SideBar/>
        <Approved/>
        </div>
    </div>
  )
}

export default ApprovedList