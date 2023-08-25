import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Userbase from '../../../Base/Userbase'

export default function CreateCatering({catering,setCatering}) {
    const [Name,setName] = useState("")
    const [Contactno,setContactno] = useState("")
    const [function_name,setFunction_name] = useState("")
    const [memberstoattend,setMmeberstoattend] = useState("")
    const [Date,setDate] = useState("")
    const [Timing,setTiming] = useState("")
     let token = localStorage.getItem("token")
    const [error,setError] = useState("")
    const navigate = useNavigate()

    const handleCreateCatering =async()=>{
        const details = {Name,Contactno,function_name,memberstoattend,Date,Timing}
        const response = await fetch(`https://foodapp-backend-jkro-praveenive.vercel.app/catering/createorder`,{
            method:"POST",
            body:JSON.stringify(details),
            headers:{
                "Content-type":"application/json",
                "x-auth-token":token
            }
        })
        const data = await response.json()
        if(!data.data)
        {
             setError(data.message)
        }
        setCatering([...catering,data.data])
        navigate("/mycateringorder")
    }
  return (
    <Userbase>
        <h1>Complete the Order Details</h1>
        <TextField id="filled-basic" label="Customer Name" 
    variant="filled" value={Name} onChange={(e)=>setName(e.target.value)} fullWidth x={{ sm: 1 } } />
    <TextField id="filled-basic" label="Contact" 
    variant="filled" value={Contactno} onChange={(e)=>setContactno(e.target.value)} fullWidth x={{ sm: 1 } } />
      <TextField id="filled-basic" label="Date" 
    variant="filled" value={Date} onChange={(e)=>setDate(e.target.value)} fullWidth x={{ sm: 1 } } /> 
    <TextField id="filled-basic" label="Timing" 
    variant="filled" value={Timing} onChange={(e)=>setTiming(e.target.value)} fullWidth x={{ sm: 1 } } /> 
    <TextField id="filled-basic" label="Function Name" 
    variant="filled" value={function_name} onChange={(e)=>setFunction_name(e.target.value)} fullWidth x={{ sm: 1 } } />
    <TextField id="filled-basic" label="Total Members" 
    variant="filled" value={memberstoattend} onChange={(e)=>setMmeberstoattend(e.target.value)} fullWidth x={{ sm: 1 } } />
    <Button variant='contained' type='submit' onClick={handleCreateCatering}>Sumbit</Button>
    </Userbase>
  )
}
