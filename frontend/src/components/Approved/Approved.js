import React,{useState,useEffect, useContext} from 'react'
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import './Approved.css'
import AuthContext from '../../context/AuthContext';

function Approved() {
    const {authTokens} = useContext(AuthContext)
    const [approved,setApproved] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
    ApproveList()
    }, [])
    let ApproveList=async()=>{
        let response=await fetch('http://localhost:8000/api/approved_list/',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                // 'Authorization': 'Bearer ' + String(authTokens.access),

            },
        })
        let data=await response.json()
        if (response.status===200){
            setApproved(data)
        }else{
          console.log(authTokens)
            alert('Something goes wrong..')
        }
    }
  return (
    <div className='w-100'>
        <div className='table1 '>
            <h4 className='text-center'>APPROVED APPLICANTION LIST</h4>
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
        {approved.map((obj,index)=>
         <tr>
         <td>{index+1}</td>
         <td>{obj.company_name}</td>
         <td>{obj.company_and_products} </td>
         <td>{obj.status}</td>
         <td><button className='button6' onClick={()=>navigate(`/admin_panel/app_detail/${obj.id}/`)}>Open</button></td>

       </tr>
        )}
      </tbody>
    </Table>
    </div>
    </div>
  )
}

export default Approved