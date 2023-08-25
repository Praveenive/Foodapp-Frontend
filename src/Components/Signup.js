import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const [firstname,setFirstname] = useState("")
    const [lastname,setLastname] =useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword]=useState("")
    const [error,setError] = useState("")
    const navigate = useNavigate()
    const handleSignup =async()=>{
        const signupdetails = {firstname,lastname,email,password}
        const response = await fetch(`https://foodapp-backend-jkro-praveenive.vercel.app/user/signup`,{
            method:"POST",
            body:JSON.stringify(signupdetails),
            headers:{
                "Content-type":"application/json"
            }
        })
        const data = await response.json()
        console.log(data)
        if(!data.data){
            setError(data.message)
        }
        else{
            navigate("/login")
        }

    }
  return (
    <div className='App'>
     <h3>Signup Page</h3>
     <TextField id="firstname" label="First Name" value={firstname} onChange={(e)=>setFirstname(e.target.value)} variant="outlined"/><br/><br/>
     <TextField id="lastname" label="Last Name" value={lastname} onChange={(e)=>setLastname(e.target.value)}  variant="outlined"/><br/><br/>
     <TextField id="email" label="Email" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" variant="outlined"/><br/><br/>
     <TextField id="password" label="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} variant="outlined"/><br/><br/>
    <Button variant="contained" onClick={handleSignup}>SignUp</Button>
    <p>Already have an Account</p>
    <Button onClick={()=>navigate("/login")}>Login</Button>
    </div>
  )
}
