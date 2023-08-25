
import { Button, Card, CardMedia } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Userbase from '../../Base/Userbase'

export default function UserVeg({vegdishes,setVegdishes}) {
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
  return (
    <Userbase>
       <h1>Order Your Veg Dishes</h1>
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
                 <Button variant='contained' onClick={()=>navigate("")}>Order Now</Button><br/><br/>
               </Card>
             ))}
           </div>
        )}
    </Userbase>
  )
}
