import { Autocomplete, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Base from '../../../Base/Base'

const cateringstatus = ["Accepted","Rejected"]

export default function UpdatecateringStatus() {
    const [Orderstatus,setOrderstatus] =useState("Pending")
    const {id,token} =useParams()
    const navigate = useNavigate()
    const handlecateringStatus = async()=>{
        const update ={Orderstatus}
        const res = await fetch(`https://foodapp-backend-jkro-praveenive.vercel.app/catering/orderstatus/${id}`,{
            method:"PUT",
            body:JSON.stringify(update),
            headers:{
                "x-auth-token":token,
                "Content-type":"application/json"
            }
        })
        const data =await res.json()
        console.log(Orderstatus)
        navigate('/cateringallorders')
    }
  return (
    <Base>
    <h1>Order Status</h1>
          <div className='form'>
 <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={cateringstatus}
  value={Orderstatus}
  onChange={(event, newValue) => setOrderstatus(newValue)}
  sx={{ width: 1250 }}
  renderInput={(params) => <TextField {...params} label="Order Status"/>}
/></div>
<Button type="submit" variant="contained"  onClick={handlecateringStatus}>Submit</Button>
    </Base>
  )
}
