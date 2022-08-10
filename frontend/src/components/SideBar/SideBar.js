import React,{useContext} from 'react'
import './SideBar.css'
import { Link } from "react-router-dom";
import AuthContext from '../../context/AuthContext';


function SideBar() {
  let {LogoutUser} = useContext(AuthContext)
  return (
    <div className='side'><br />
        <div className='text-white menu_text'>
        <Link to='/admin_panel/approved_list'><h6>APPROVED LIST</h6></Link><br />
        <Link to='/admin_panel/rejected_list'><h6>REJECTED LIST</h6></Link><br />
        <Link to='/admin_panel/users_list'><h6>USERS</h6></Link><br />
        <Link to='/admin_panel/slot_booking'><h6>SLOT BOOKING</h6></Link><br />
        <h6>VIDEOS</h6><br />
        <h6>PAYMENTS</h6><br />
        <h6 onClick={LogoutUser}>LOGOUT</h6>
    </div>
    </div>
  )
}

export default SideBar