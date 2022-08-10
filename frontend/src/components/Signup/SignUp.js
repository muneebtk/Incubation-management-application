import React, { useContext } from 'react'
import './SignUp.css'
import {useState} from 'react'
import AuthContext from '../../context/AuthContext'

function Signup() {


  const {SignUpUser} = useContext(AuthContext)

  const submit = async(e) =>{
    e.preventDefault()
    SignUpUser()
  }
  
  return (
    <div>
            
    <main class="form-signin w-100 m-auto">
        <form onSubmit={SignUpUser}>
            <h1 class="h3 mb-3 fw-normal">SignUp</h1>

            <div class="form-floating">
            <input type="text" class="form-control" required name='name'  placeholder=' '/>
            <label for="floatingInput">Enter Name</label>
            </div>
            {/* <div class="form-floating">
            <input type="text" class="form-control" required name='username'  placeholder=' '/>
            <label for="floatingInput">Enter UserName</label>
            </div> */}
            <div class="form-floating">
            <input type="email" class="form-control" name='email' required  placeholder=' '/>
            <label for="floatingInput">Enter Email</label>
            </div>

            <div class="form-floating">
            <input type="password" class="form-control" required name='password' placeholder=' '/>
            <label for="floatingInput">Enter Password</label>
            </div>

            <div class="checkbox mb-3">
            <label>
            </label>
            </div>
            <button class="w-100 btn btn btn-primary" type="submit">SignUp</button>
        </form>
    </main>
    </div>
  )
}

export default Signup