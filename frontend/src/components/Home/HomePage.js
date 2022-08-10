import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import './HomePage.css'

function HomePage() {
  const {SubmitForm} = useContext(AuthContext)


  return (
  <>
   <div className='page'><br /><br />
      <h1 className='text-light text-center'>APPLICATION FOR INCUBATION</h1><br />
      <div className='content '>
        <form action="" onSubmit={SubmitForm}>
          <div className='row nasru'>
            <div  className='col-lg-6 mt-2'>
              <label htmlFor="" className=''>Name <span className='star'>*</span></label><br />
              <input align='center' type="text" required name="name" className='input ' id="" />
            </div>
            <div  className='col-lg-6  mt-2'>
              <label htmlFor="" className=''>Address <span className='star'>*</span></label><br />
              <input align='center' type="text" name="address" required className='input  ' id="" />
            </div>
            <div  className='col-lg-6  mt-2'>
              <label htmlFor="" className=''>City <span className='star'>*</span></label><br />
              <input align='center' type="text" name="city" className='input' id="" />
            </div>
            <div  className='col-lg-6  mt-2'>
              <label htmlFor="" className=''>State <span className='star'>*</span></label><br />
              <input align='center' type="text" name="state" required className='input' id="" />
            </div>
            <div  className='col-lg-6  mt-2'>
              <label htmlFor="" className=''>Email <span className='star'>*</span></label><br />
              <input align='center' type="text" name="email" className='input' required id="" />
            </div>
            <div  className='col-lg-6  mt-2'>
              <label htmlFor="" className=''>Phone no <span className='star'>*</span></label><br />
              <input align='center' type="text" name="phone" className='input' required id="" />
            </div>
            <div  className='col-lg-6  mt-2'>
              <label htmlFor="" className=''>Compnay Name <span className='star'>*</span></label><br />
              <input align='center' type="text" name="comapany_name" className='input' required id="" />
            </div>
            <div  className='col-lg-6  mt-2'>
              <label htmlFor="" className=''>Company Logo <span className='star'>*</span></label><br />
              <input align='center' type="file" name="company_logo" className='input'  id="" />
            </div>
            <br />
            </div>

            <div className='row text-area container'>
            <div  className='mt-2 '>
              <label htmlFor="" className=''>Describe Your Team and Background  <span className='star'>*</span></label><br />
              <textarea name="team_and_background" className=' pr-4 w-100 ' id="" cols="" required rows="3"></textarea>
            </div>
            <div  className='mt-2 '>
              <label htmlFor="" className=''>Describe Your Comapany and Products <span className='star'>*</span></label><br />
              <textarea name="company_and_products" className=' pr-4 w-100 ' id="" cols="" required rows="3"></textarea>
            </div>
            <div  className='mt-2  '>
              <label htmlFor="" className=''>Describe the Problem You are to trying to solve <span className='star'>*</span></label><br />
              <textarea name="problem" className=' pr-4 w-100 ' required id="" cols="" rows="3"></textarea>
            </div>
            <div  className='mt-2 '>
              <label htmlFor="" className=''>What is unique about your solution <span className='star'>*</span></label><br />
              <textarea name="about_solution" className=' pr-4 w-100 ' required id="" cols="" rows="3"></textarea>
            </div>
            <div  className='mt-2 '>
              <label htmlFor="" className=''>What is your value proposition for the customer? <span className='star'>*</span></label><br />
              <textarea name="proposition" className=' pr-4 w-100 ' id="" cols="" required rows="3"></textarea>
            </div>
            <div  className='mt-2 '>
              <label htmlFor="" className=''>What is your competitors and what is your competetive advantage?  <span className='star'>*</span></label><br />
              <textarea name="competetors_and_advantages" className=' pr-4 w-100 ' id="" required cols="" rows="3"></textarea>
            </div>
            <div  className='mt-2 '>
              <label htmlFor="" className=''>Explain your revenue model <span className='star'>*</span></label><br />
              <textarea name="revenue_model" className=' pr-4 w-100 ' id="" cols="" required rows="3"></textarea>
            </div>
            <div  className='mt-2 '>
              <label htmlFor="" className=''>What is the potential market size of the product? <span className='star'>*</span></label><br />
              <textarea name="market_products_and_service" className=' pr-4 w-100 ' id="" required cols="" rows="3"></textarea>
            </div>
            <div  className='mt-2 '>
              <label htmlFor="" className=''>How do you market or plan to market your products ans sevices <span className='star'>*</span></label><br />
              <textarea name="marketing_plan" className=' pr-4 w-100 ' required id="" cols="" rows="3"></textarea>
            </div>
            <div  className='mt-2 '>
              <label htmlFor="" className=''>Type of incubation needed <span className='star'>*</span></label><br />
              <input type="radio" checked name="radios" value={'physical Incubation'} id="" /><label htmlFor="">Physical Incubation</label><br />
              <input type="radio" name="radios" value={'Virtual Incubation'} id="" /><label htmlFor="">Virtual Incubation</label>
            </div>
            <div  className='mt-2 '>
              <label htmlFor="" className=''>Upload a detailed business proposal <span className='star'>*</span></label><br />
              <textarea name="business_proposal" className=' pr-4 w-100 ' id="" required cols="" rows="3"></textarea>
            </div>
            <div align='center' className=' mt-4'>
              <button className='button1' type='submit'>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </>
   
   )
}

export default HomePage