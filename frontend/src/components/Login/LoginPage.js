import React,{useContext} from 'react'
import AuthContext from '../../context/AuthContext'

function LoginPage() {
  let {loginUser} = useContext(AuthContext)
  return (
    <div>
          <main class="form-signin w-100 m-auto">
        <form onSubmit={loginUser}>
            <h1 class="h3 mb-3 fw-normal">Login</h1>

            <div class="form-floating">
            <input type="text" class="form-control" name='username' id="floatingInput" placeholder=' '/>
            <label for="floatingInput">Enter email</label>
            </div>
            <div class="form-floating">
            <input type="password" class="form-control" id="floatingInpu" name='password' placeholder=' '/>
            <label for="floatingInput">Enter Password</label>
            </div><br />

            <button class="w-100 btn btn btn-primary" type="submit">Login</button>
        </form>
    </main>
    </div>
  
  )
}

export default LoginPage