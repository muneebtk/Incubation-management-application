import { useContext } from 'react';
import {Outlet} from 'react-router-dom'
import AuthContext from '../context/AuthContext';
import { Navigate } from "react-router-dom";


const PrivateRoute = () =>{
    let {user}=useContext(AuthContext)

    return(
        user ? <Outlet/>:<Navigate to='/login' />
    )
}
export default PrivateRoute;