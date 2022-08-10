import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import './Header.css'

function Header() {
  
  let {user,logoutUser} = useContext(AuthContext);
  return (
    <div className='main'>
        <Link to="/"><button className='btn1'>Home</button></Link>
        {user && <p className='text-white'>Hello {user.username}</p>}
        <div className='link'>      {user ? (
          <button className='btn1'  onClick={logoutUser}>Logout</button>
        ):(<Link to="/login"> <button className='btn1'> Login</button></Link>)}
        
        {user ?'' : <Link to='/signup' ><button className='btn1'>Register</button></Link>}
        </div>

    </div>
  )
}

export default Header