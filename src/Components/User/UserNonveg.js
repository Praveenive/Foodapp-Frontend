import { Button, Card, CardMedia } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Userbase from '../../Base/Userbase'

export default function UserNonveg({nonvegdishes,setNonvegdishes}) {
    const navigate = useNavigate()
    let token = localStorage.getItem("token")
    const [error,setError] = useState("")
    useEffect(()=>{
        const fetchNonvegdishes = async()=>{
            const response = await fetch(`https://foodapp-backend-jkro-praveenive.vercel.app/dish/alldishes`,{
                method:"GET",
                headers:{
                    "Content-type":"application/json",
                    "x-auth-token":token
                }
            })
            const data = await response.json()
            if(!data.data){
                setError(data.message)
            }
          setNonvegdishes(data.data)
        }
        fetchNonvegdishes()
    },[])
  return (
    <Userbase>
        <h1>Welcome to Non-Veg Dishes</h1>
        {nonvegdishes&&(
             <div className='card-container'>
             {nonvegdishes?.map((data,idx)=>(
               <Card className='card' key = {data._id}>
                   <CardMedia
                 component='img'
                 height='140' width="1"
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
