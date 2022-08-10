import React,{useState,useEffect, useContext} from 'react'
import './Slot.css'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AuthContext from '../../context/AuthContext';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';


function Slot() {
  let {authTokens} = useContext(AuthContext)
  const [slot,setSlot] = useState([])
  const [selSlot,setSelSlot] = useState([])

  const [show, setShow] = useState(false);
  const [btn,setBtn] = useState([])

  useEffect(() => {
    SlotBook()
   }, [])



  const handleClose = () =>{
    SlotBook()
    // console.log(company_name)
  setShow(false);
  // SaveSlot(btn,company_name)
}

  const handleShow = (bn) =>{ 

  setShow(true);
  BookSlot()
  setBtn(bn)
  // console.log(bn)
  
  

}
    let SlotBook=async()=>{
      let response = await fetch('http://127.0.0.1:8000/api/slot_booking/',{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          // 'Authorization': 'Bearer ' + String(authTokens.access)
        },
      })
      let data = await response.json()
      if (response.status===200){
        setSlot(data)
      }else{
        alert('Something went wrong..')
      }
    }
   

     let BookSlot=async()=>{
      let response=await fetch('http://127.0.0.1:8000/api/approved_company/',{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          // 'Authorization': 'Bearer ' + String(authTokens.access)
        },
      })
      let data=await response.json()
      if (response.status===200){
        setSelSlot(data)
      }else{
        alert('Something went wrong..')
      }
     }
     let SaveSlot=async (btn,company_name)=>{
      console.log(btn)
      let response=await fetch(`http://127.0.0.1:8000/api/save_slot/${btn}/${company_name}/`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json',
          // 'Authorization': 'Bearer ' + String(authTokens.access)
        },
      })
      let data=await response.json()
      if (response.status===200){
        handleClose()
      }else{
        alert('Something goes wrong..')
      }
     }
  return (
    
    <div className='w-100'>
         {selSlot.map((obj)=>
       <Modal show={show} onHide={handleClose}>
   

                <Modal.Header closeButton>
          <Modal.Title>Select Application</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <select name="" id="">
           
             <option>{obj.company_name}</option>

          </select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>SaveSlot(btn,obj.company_name)}>
            Save Changes
          </Button>
        </Modal.Footer>       

      </Modal>
              )}

      <Row>

        <h3 className='text-center'>SLOT BOOKING</h3>
        <div className=' col-12'>
        <div className='a d-flex flex-wrap'>
            {slot.map((obj)=>
              obj.section==='A' &&
              <div className='m-3'>
               { obj.is_active ?
              <Button onClick={()=>handleShow(obj.id)} className='box'></Button>:<Button className='box2'></Button>} 
              </div>
            )}
            
        </div>
        </div>

        <div className= 'col-lg-3 col-4 col-xl-2'>
          <div className='d-flex flex-wrap mt-2 b'>
            {slot.map((obj)=>
              obj.section==='B' && 
              <div className='m-3'>
              { obj.is_active ?
              <Button onClick={()=>handleShow(obj.id)}  className='box'></Button>:<Button onClick={handleShow}  className='box2'></Button>} 
              </div>
            )}
          </div>
        </div>

          <div className=' col-4 col-lg-3 col-xl-2 mt-2'>
          <div className='b d-flex flex-wrap'>
            {slot.map((obj)=>
              obj.section==='C' && 
              <div className='m-3'>
              { obj.is_active ?
              <Button onClick={()=>handleShow(obj.id)}  className='box'></Button>:<Button onClick={handleShow}  className='box2'></Button>}
              </div>
            )}
          </div>
          </div>

          <div className=' col-4 col-lg-3 col-xl-2 mt-2'>
          <div className='d-flex flex-wrap b'>
            {slot.map((obj)=>
              obj.section==='D' && 
              <div className='m-3'>
              { obj.is_active ?
              <Button onClick={()=>handleShow(obj.id)}  className='box'></Button>:<Button onClick={handleShow}  className='box2'></Button>}
              </div>
            )}
          </div>
          </div>

          <div className='col-4 col-lg-3 col-xl-2 mt-2'>
          <div className='d-flex flex-wrap b'>
            {slot.map((obj)=>
              obj.section==='E' && 
              <div className='m-3'>
              { obj.is_active ?
              <Button onClick={()=>handleShow(obj.id)}  className='box'></Button>:<Button onClick={handleShow}  className='box2'></Button>}
              </div>
            )}
          </div>
          </div>

          <div className=' mt-2 col-4 col-lg-3 col-xl-2'>
          <div className='d-flex flex-wrap b'>
            {slot.map((obj)=>
              obj.section==='F' && 
              <div className='m-3'>
              { obj.is_active ?
              <Button onClick={()=>handleShow(obj.id)}  className='box'></Button>:<Button onClick={handleShow}  className='box2'></Button>}
              </div>
            )}
          </div>
          </div>

          <div className='col-4 col-lg-3 col-xl-2'>
          <div className='d-flex flex-wrap b mt-2'>
            {slot.map((obj)=>
              obj.section==='G' && 
              <div className='m-3'>
              { obj.is_active ?
              <Button onClick={()=>handleShow(obj.id)}  className='box'></Button>:<Button onClick={handleShow}  className='box2'></Button>}
              </div>
            )}
          </div>
          </div>
          

          </Row>

    </div>
  )
}

export default Slot