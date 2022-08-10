// import { createContext,useState } from "react";


// const AppContext = createContext(null)
// export default AppContext;

// export const AppProvider=({children})=>{
//     const [pending,setPending]=useState()
//     let AdminPending = async (e)=>{
//         e.preventDefault()
//         let response=await fetch('http://localhost:8000/api/pending_incubation/',{
//             method:'GET',
//             headers:{
//                 'Content-Type':'application/json',
//             },
//         })
//         let data=await response.json()
//         console.log(data,'uuuuuuuuuuuu')
//         if (response.status===200) {
//             setPending(data)
//         }else{
//             alert('Invalid creadentials..')
//         }
//     }
//     let context={
//         pending:pending,
//         AdminPending:AdminPending,
//     }
//     return(
//     <AppContext.Provider value={context}>
//         {children}
//     </AppContext.Provider>
//     )
// }
