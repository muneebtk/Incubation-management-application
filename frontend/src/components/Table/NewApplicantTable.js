import React,{useContext,useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table';
import AuthContext from '../../context/AuthContext';
import SideBar from '../SideBar/SideBar';
import './NewApplicantTable.css'
import { useNavigate } from "react-router-dom";


function NewApplicantTable() {
    const {authTokens} = useContext(AuthContext)
    let navigate=useNavigate();
    const {pending,AdminPending} = useContext(AuthContext)
    useEffect(() => {
        AdminPending()
    },[])

   let Approve = async(id)=>{
    let response = await fetch(`http://127.0.0.1:8000/api/approve_incubation/${id}/`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json',
        "Authorization" : `Bearer ${authTokens.access}` ,
      },
    })
    let data = await response.json()
    if (response.status===200){
      alert('Form Approved..')
    }else{
      alert('Something goes wrong..')

    }
   }
   let Reject = async(id )=>{
    let response = await fetch(`http://127.0.0.1:8000/api/reject_incubation/${id}/`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json',
        // 'Authorization': 'Bearer ' + String(authTokens.access)

      },
    })
    let data = await response.json()
    if (response.status===200){
      alert('Form Rejected')
    }else{
      alert('Something goes wrong..')
    }
   }
  return (
    <div className='main1'>
        <SideBar/>
        <div className='table'>
            <h4>NEW APPLICANT LIST</h4>
         <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>No</th>
          <th>Company Name</th>
          <th>Company Details</th>
          <th>status</th>
          <th>Action</th>
          <th>Action</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {pending.map((obj,index)=>
         <tr>
         <td>{index+1}</td>
         <td>{obj.company_name}</td>
         <td>{obj.company_and_products} </td>
         <td>{obj.status}</td>
         <td><button className='button2' onClick={()=>navigate(`/admin_panel/app_detail/${obj.id}/`)}>Open</button></td>
         <td><button className='button3' onClick={()=>Approve(obj.id)}>Approve</button></td>
         <td><button className='button4' onClick={()=>Reject(obj.id)}>Decline</button></td>

       </tr>
        )}
      </tbody>
    </Table>
    <div>
       
    </div>
    </div>
    </div>
  )
}

export default NewApplicantTable