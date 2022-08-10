import React, { useState,useEffect, useContext } from 'react'
import Table from 'react-bootstrap/Table';
import './Users.css'
import AuthContext from '../../context/AuthContext';


function Users() {
    let {authTokens} = useContext(AuthContext)
    const [user,setUser] = useState([])
    useEffect(() => {
        UsersList()
       }, [])
    let UsersList=async()=>{
        let response=await fetch('http://127.0.0.1:8000/api/users_list/',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                // 'Authorization': 'Bearer ' + String(authTokens.access)
            },
        })
        let data = await response.json()
        if (response.status===200){
            setUser(data)
        }else{
            alert('Something went wrong..')
        }
    }
   let BlockUser = async(id)=>{
    let response=await fetch(`http://127.0.0.1:8000/api/block_user/${id}/`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
            // 'Authorization': 'Bearer ' + String(authTokens.access)
        },
    })


    if (response.status===200){
        UsersList()
        alert('User Blocked Successfully')
    }else{
        alert('Something went wrong..')
    }
   }

   let UnBlockUser = async(id)=>{
    let response=await fetch(`http://127.0.0.1:8000/api/unblock_user/${id}/`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
            // 'Authorization': 'Bearer ' + String(authTokens.access)
        },
    })
    if (response.status===200){
        UsersList()
        alert('User Blocked Successfully')
    }else{
        alert('Something went wrong..')
    }
   }
    
  return (
    <div className='w-100'>
        <div className='table1'>
            <h4 className='text-center'>USERS APPLICANTION LIST</h4>
         <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {user.map((obj,index)=>
         <tr>
         <td>{index+1}</td>
         <td>{obj.name}</td>
         <td>{obj.username} </td>
         <td>{obj.email}</td>
         {user.is_active && <td><button className='button2' onClick={()=>UnBlockUser(obj.id)}>UnBlock</button></td>}
         <td><button className='button5' onClick={()=>BlockUser(obj.id)}>Block</button></td>
         

        
       </tr>
        )}
      </tbody>
    </Table>
    </div>
    </div>
  )
}

export default Users