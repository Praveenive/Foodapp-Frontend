
import { Button, Card, CardMedia } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Base from '../../../Base/Base'

export default function Vegeterian({vegdishes,setVegdishes}) {
    const navigate = useNavigate()
    const [error,setError] = useState("")
    let token = localStorage.getItem("token")
    useEffect(()=>{
        const fetchvegDishes = async()=>{
            const response = await fetch(`https://foodapp-backend-jkro-praveenive.vercel.app/vegdish/alldishes`,{
                method:"GET",
                headers:{
                    "x-auth-token":token,
                    "Content-type":"application/json"
                }
            })
            const data= await response.json()
            if(!data.data){
                setError(data.message)
            }
            setVegdishes(data.data)
        }
        fetchvegDishes()
    },[])

    const removedish =async(dishId)=>{
      const remaingdish = await vegdishes.filter((dish) => dish._id !== dishId)
      console.log(remaingdish)
      setVegdishes(remaingdish);
    } 
  return (
    <Base>
    <h1>Welcome to Vegeterian Family</h1>
    <div className='ref'>
        <Button variant='contained' 
        onClick={()=>navigate("/addveg")}>Add Veg Dish</Button></div><br/>
        {vegdishes&&(
             <div className='card-container'>
             {vegdishes?.map((data,idx)=>(
               <Card className='card' key = {data._id}>
                   <CardMedia
                 component='img'
                 height='140' width="10"
                 image={data.image} 
                 alt={data.dishname}
               />
                 <h3>{data.dishname}</h3>
                 <p>{data.price}</p>
                 <Button variant='contained' onClick={()=>removedish(data._id)}>
                  Remove Dish</Button><br/><br/>
               </Card>
             ))}
           </div>
        )}

    </Base>
  )
}
