import { createContext,useState } from "react";
import jwt_decode from "jwt-decode";
import {useNavigate} from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) =>{
    let [authTokens,setAuthTokens] = useState(()=>localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user,setUser] = useState(()=>localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null);
    let navigate = useNavigate()


    let loginUser = async (e)=>{
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/token/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value,'password':e.target.password.value})

        })
        let data =await response.json()
        if ((response).status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens',JSON.stringify(data))
            navigate('/')
        }else{
            alert('something went wrong')
        }
    }
    let logoutUser = () =>{        
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens',authTokens.refresh)
        navigate('/login')
    }

    let SignUpUser = async(e) =>{
        e.preventDefault()
        let response=await fetch('http://127.0.0.1:8000/api/register/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({'name':e.target.name.value,'email':e.target.email.value,'password':e.target.password.value})

          })
          let data =await response.json()
          console.log('submitted',data)
          if (response.status===200){
            navigate('/login')
            alert('You are Signed up..')
          }
          else{
            alert('something wrong...')
          }
    }
    let SubmitForm = async (e) =>{
        console.log("dm im ")
         e.preventDefault()
        let response=await fetch('http://localhost:8000/api/submit_form/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
            'name':e.target.name.value,
            'address':e.target.address.value,
            'city':e.target.city.value,
            'state':e.target.state.value,
            'email':e.target.email.value,
            'phone':e.target.phone.value,
            'company_name':e.target.comapany_name.value,
            'company_logo':e.target.company_logo.value,
            'team_and_background':e.target.team_and_background.value,
            'company_and_products':e.target.company_and_products.value,
            'problem':e.target.problem.value,
            'about_solution':e.target.about_solution.value,
            'proposition':e.target.proposition.value,
            'competetors_and_advantages':e.target.competetors_and_advantages.value,
            'revenue_model':e.target.revenue_model.value,
            'market_products_and_service':e.target.market_products_and_service.value,
            'marketing_plan':e.target.marketing_plan.value,
            'radio':e.target.radios.value,
            'business_proposal':e.target.business_proposal.value})
        })
        let data = await response.json()
        console.log(data)
        if (response.status===200){
            console.log(data)
            alert('Incubation form has been submitted')
        } 
        else{
            alert('something goes wrong..')
        }
        }
        const [pending,setPending]=useState([])
        const AdminPending = async (e)=>{
            let response=await fetch('http://localhost:8000/api/pending_incubation/',{
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    // 'Authorization': 'Bearer ' + String(authTokens.access),

                },
            })
            console.log(response.status)
            let data=await response.json()
            console.log(data)
            if (response.status===200) {
                setPending(data)
            }else{
                alert('Invalid creadentials..')
            }
        }

      

    let contextData = {
        user:user,
        loginUser:loginUser,
        logoutUser:logoutUser,
        SignUpUser:SignUpUser,
        SubmitForm:SubmitForm,
        AdminPending:AdminPending,
        pending:pending,
        authTokens:authTokens,
    
    }
    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}