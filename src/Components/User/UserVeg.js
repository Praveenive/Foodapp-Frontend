
import { Badge, Button, Card, CardMedia } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Userbase from '../../Base/Userbase'

export default function UserVeg({vegdishes,setVegdishes,amount,setAmount,count,setCount}) {
    const navigate = useNavigate()
    const [error,setError] = useState("")
    let token = localStorage.getItem("token")
    let price;
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
             price = data.data[0].price
             console.log("Price",price)
          
           
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
       <div className='card-value'>
       <h1><Badge bg="success">
              Cart {count}
             </Badge>
       </h1></div>
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
                 <Button variant='contained' onClick={() => { setAmount(amount + data.price); setCount(count + 1); }}>Add Cart</Button>{" "}
                 <Button variant='contained' onClick={()=>{setAmount(amount-data.price); setCount(count-1);}} >Remove Cart</Button>
               </Card>
             ))}
           </div>
        )}
        
    </Userbase>
  )
}
