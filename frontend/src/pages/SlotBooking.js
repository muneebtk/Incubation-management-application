import React from 'react'
import SideBar from '../components/SideBar/SideBar'
import NavBar from '../components/NavBar/NavBar'
import Slot from '../components/Slot/Slot'

function SlotBooking() {
  return (
    <div>
        <NavBar/>
        <div className='d-flex'>
            <SideBar/>
            <Slot/>
        </div>
    </div>
  )
}

export default SlotBooking