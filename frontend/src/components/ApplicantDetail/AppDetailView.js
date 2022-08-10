import React,{useContext, useEffect, useState} from 'react'
import AuthContext from '../../context/AuthContext'
import { useParams} from 'react-router-dom'

function AppDetailView() {
  let {authTokens} = useContext(AuthContext);
  const params=useParams();
  let x=params.id
  let [app,setApp] = useState([])


  useEffect(() => {
    AppDetail()
  }, [])
  let AppDetail = async()=>{
    let response = await fetch(`http://127.0.0.1:8000/api/app_detail_view/${x}/`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        // 'Authorization':'Bearer '+ String(authTokens.access)
      },
    })
      let data=await response.json()

      if (response.status===200){
        console.log(response.status)
        setApp(data)
      }else{
        alert('Something went wrong..')
      }
    }
  
  return (
    <div className='w-75'>
      <div className='card'>
        
        <div align='center' className='d-flex flex-column cd'>
         <label htmlFor="">Id :{app.id}</label><hr />
         <label htmlFor="">Name :{app.name} </label><hr />
         <label htmlFor="">Address :{app.address} </label><hr />
         <label htmlFor="">City : {app.city}</label><hr />
         <label htmlFor="">State : {app.state}</label><hr />
         <label htmlFor="">Email : {app.email}</label><hr />
         <label htmlFor="">Phone : {app.phone}</label><hr />
         <label htmlFor="">Compnay Name : {app.company_name}</label><hr />
         <label htmlFor="">Company Logo : {app.company_logo}</label><hr />
         <label htmlFor="">Team and Background : {app.team_and_backgound}</label><hr />
         <label htmlFor="">Company and Products : {app.company_and_products}</label><hr />
         <label htmlFor="">Problem : {app.problem}</label><hr />
         <label htmlFor="">About Solution : {app.about_solution}</label><hr />
         <label htmlFor="">Proposition : {app.proposition}</label><hr />
         <label htmlFor="">Competetors and Advantages : {app.competetors_and_advantages}</label><hr />
         <label htmlFor="">Revenue Model : {app.revenue_model}</label><hr />
         <label htmlFor="">Market Products and Services : {app.market_products_and_service}</label><hr />
         <label htmlFor="">Merketing Plan : {app.marketing_plan}</label><hr />
         <label htmlFor="">Method of Incubation : {app.radio}</label><hr />
         <label htmlFor="">Business Proposal : {app.business_proposal}</label><hr />
         <label htmlFor="">Status : {app.status}</label>
        </div>
       
         
      </div> 
    </div>
  )
}

export default AppDetailView