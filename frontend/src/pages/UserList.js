import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import SideBar from '../components/SideBar/SideBar'
import Users from '../components/Users/Users'

function UserList() {
  return (
    <div>
        <NavBar/>
        <div className='d-flex'>
            <SideBar/>
            <Users/>
        </div>
    </div>
  )
}

export default UserList