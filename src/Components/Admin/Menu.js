import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Base from '../../Base/Base'

export default function Menu() {
    const navigate = useNavigate()
    let token =localStorage.getItem("token")
    if(!token){
        navigate("/login",{replace:true})
    }
  return (
    <Base>
    <div className='menu-container'>
        <h1>Menu</h1>
            <Button variant='contained' onClick={()=>navigate("/adminveg")}>Veg</Button>
            <Button variant='contained'onClick={()=>navigate("/adminnonveg")}>Non Veg</Button>
    </div>
</Base>
  )
}
