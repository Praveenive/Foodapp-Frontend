import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Userbase from '../../Base/Userbase'

export default function UserMenu() {
    const navigate = useNavigate()
    let token =localStorage.getItem("token")
    if(!token){
        navigate("/login",{replace:true})
    }
  return (
    <Userbase>
 <div className='menu-container'>
        <h1>Menu</h1>
            <Button variant='contained' onClick={()=>navigate("/userveg")}>Veg</Button>
            <Button variant='contained'onClick={()=>navigate("/usernonveg")}>Non Veg</Button>
    </div>
    </Userbase>
  )
}
