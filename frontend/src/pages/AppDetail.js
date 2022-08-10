import React from 'react'
import AppDetailView from '../components/ApplicantDetail/AppDetailView'
import NavBar from '../components/NavBar/NavBar'
import SideBar from '../components/SideBar/SideBar'

function AppDetail() {
  return (
    <div>
        <NavBar/>
        <div className='d-flex '>
        <SideBar/>
        <AppDetailView/>
        </div>
    </div>
  )
}

export default AppDetail