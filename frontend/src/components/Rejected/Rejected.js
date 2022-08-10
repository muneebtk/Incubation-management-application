import React, { useState,useEffect, useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import AuthContext from '../../context/AuthContext';

function Rejected() {
  let {authTokens} = useContext(AuthContext)
    let [reject,setReject] = useState([])
    const navigate = useNavigate()
    let RejectedList=async()=>{
      
        let response = await fetch('http://localhost:8000/api/rejected_list/',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                // 'Authorization': 'Bearer ' + String(authTokens.access),
            },

        })
        let data = await response.json()
        if (response.status===200){
            setReject(data)
        }else{
        }
    }
    useEffect(() => {
     RejectedList()
    }, [])
    
  return (
   
    <div className='w-75'>
         {reject !== null ?
         <div className='w-100'>
        <div className='table1 '>
            <h4 className='text-center'>REJECTED APPLICANTION LIST</h4>
         <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>No</th>
          <th>Company Name</th>
          <th>Company Details</th>
          <th>status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {reject.map((obj,index)=>
         <tr>
         <td>{index+1}</td>
         <td>{obj.company_name}</td>
         <td>{obj.company_and_products} </td>
         <td>{obj.status}</td>
         <td><button className='button2' onClick={()=>navigate(`/admin_panel/app_detail/${obj.id}/`)}>Open</button></td>

       </tr>
        )}
      </tbody>
    </Table>
    </div>
    </div>
    : <h3 className='text-center'>No Rejected List</h3>}
    </div>
  )
}

export default Rejected