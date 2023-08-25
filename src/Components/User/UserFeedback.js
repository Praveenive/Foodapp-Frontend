import { Token } from '@mui/icons-material'
import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Userbase from '../../Base/Userbase'

export default function UserFeedback({feedback,setfeedback}) {
    const [Name,setName] =useState("")
    const [Contact,setContact] = useState("")
    const [Feedback,setFeedback] = useState("")
    const navigate = useNavigate()
    let token = localStorage.getItem("token")

    const handleFeedback = async()=>{
        const addfeedback = {Name,Contact,Feedback}
        const res =await fetch(`https://foodapp-backend-jkro-praveenive.vercel.app/feedback/addfeedback`,{
            method:"POST",
            body:JSON.stringify(addfeedback),
            headers:{
                "x-auth-token":token,
                "Content-type":"application/json"
            }
        })
        const data =await res.json()
        console.log(data)
        setfeedback([...feedback,data.data])
        console.log(feedback)
        navigate("/usermenu")
    }
  return (
   <Userbase>
    <h1>Feedback Form</h1>
    <div className='add'>
    <TextField id="filled-basic" label="Your Name" 
    variant="filled" value={Name} onChange={(e)=>setName(e.target.value)} fullWidth x={{ sm: 1 } } />
    <TextField id="filled-basic" label="Contact no" 
    variant="filled" value={Contact} onChange={(e)=>setContact(e.target.value)} fullWidth x={{ sm: 1 } } />
      <TextField
          id="filled-basic"
          label="Feedback" variant="filled"
          multiline
          rows={4} value={Feedback} onChange={(e)=>setFeedback(e.target.value)}
          fullWidth x={{ sm: 1 } }
        /></div><br/>
        <Button variant="contained" color="success" onClick={handleFeedback}>Submit</Button>
   </Userbase>
  )
}
