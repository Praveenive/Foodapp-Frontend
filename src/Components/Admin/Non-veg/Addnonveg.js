import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Base from '../../../Base/Base'

export default function Addnonveg({nonvegdishes,setNonvegdishes}) {
    const [dishname,setDishname] = useState("")
    const [price,setPrice] = useState("")
    const [image,setImage] =useState("")
    const [error,setError]= useState("")
    let token = localStorage.getItem("token")
    const navigate = useNavigate()
    const addDish =async()=>{
        const newdishes = {dishname,price,image}
        const response = await fetch(`https://foodapp-backend-jkro-praveenive.vercel.app/dish/add-dish`,{
            method:"POST",
            body:JSON.stringify(newdishes),
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
        setNonvegdishes([...nonvegdishes,data.data])
        navigate("/adminnonveg")
    }

  return (
    <Base>
    <h1>Create A New Non-Veg Dish</h1>
    <div className='add'>
    <TextField id="filled-basic" label="NonVeg-Dish name" 
    variant="filled" value={dishname} onChange={(e)=>setDishname(e.target.value)} fullWidth x={{ sm: 1 } } />
     <TextField id="filled-basic" label="Price" 
    variant="filled" value={price} onChange={(e)=>setPrice(e.target.value)} fullWidth x={{ sm: 1 } } />
     <TextField id="filled-basic" label="Image" 
    variant="filled" value={image} onChange={(e)=>setImage(e.target.value)} fullWidth x={{ sm: 1 } } /></div>
    <br/><br/>
    <Button variant='contained' onClick={addDish}>Add NewOne</Button>
    </Base>
  )
}
