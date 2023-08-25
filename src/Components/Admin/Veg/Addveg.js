import { Token } from '@mui/icons-material'
import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Base from '../../../Base/Base'

export default function Addveg({vegdishes,setVegdishes}) {
    const [dishname,setDishname] = useState("")
    const [price,setPrice] = useState("")
    const [image,setImage] =useState("")
    const [error,setError]= useState("")
    const navigate =useNavigate()
    let token = localStorage.getItem("token")
    
    const addingDish = async()=>{
        const dishdetails = {dishname,price,image}
        const response = await fetch(`https://foodapp-backend-jkro-praveenive.vercel.app/vegdish/add-dish`,{
            method:"POST",
            body:JSON.stringify(dishdetails),
            headers:{
                "x-auth-token":token,
                "Content-type":"application/json"
            }
        })
        const data = await response.json()
        if(!data.data){
            setError(data.message)
        }
        setError('')
        setVegdishes([...vegdishes,data.data])
        navigate("/adminveg")
    }
  return (
    <Base>
    <h1>Create A New Dish</h1>
    <div className='add'>
    <TextField id="filled-basic" label="Veg-Dish name" 
    variant="filled" value={dishname} onChange={(e)=>setDishname(e.target.value)} fullWidth x={{ sm: 1 } } />
     <TextField id="filled-basic" label="Price" 
    variant="filled" value={price} onChange={(e)=>setPrice(e.target.value)} fullWidth x={{ sm: 1 } } />
     <TextField id="filled-basic" label="Image" 
    variant="filled" value={image} onChange={(e)=>setImage(e.target.value)} fullWidth x={{ sm: 1 } } /></div>
    <br/><br/>
    <Button variant='contained' onClick={addingDish}>Add Dish</Button>
    </Base>
  )
}
