import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';

import Signup from './pages/Signup';
import Admin from './pages/Admin';
import AppDetail from './pages/AppDetail';
import PrivateRoute from './utils/PrivateRoute';
import ApprovedList from './pages/ApprovedList';
import RejectedList from './pages/RejectedList';
import UserList from './pages/UserList';
import SlotBooking from './pages/SlotBooking';


function App() {
  return (
    <div >
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={<Login/>} path='/login' />
            <Route element={<Signup/>} path='/signup'/>
            <Route element={<PrivateRoute/>} path='/' >  
              <Route element={<Home/>} exact path='/' />
              <Route element={<Admin/>} path='/admin_panel'/>
              <Route element={<AppDetail/>} path='/admin_panel/app_detail/:id'/>
              <Route element={<ApprovedList/>} path='/admin_panel/approved_list'/>
              <Route element={<RejectedList/>} path='/admin_panel/rejected_list' />
              <Route element={<UserList/>} path='/admin_panel/users_list' />
              <Route element={<SlotBooking/>} path='/admin_panel/slot_booking' />
            </Route>
          </Routes>
        </AuthProvider>
     </Router>
    </div>
  );
}

export default App;
