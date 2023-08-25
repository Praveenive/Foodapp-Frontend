import { Button, Card } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Userbase from '../../../Base/Userbase'

export default function Usercateringorder({catering,setCatering}) {
    const navigate = useNavigate()
    let token = localStorage.getItem("token")
    const [error,setError] = useState("")
    useEffect(()=>{
        const fetchmyorders = async()=>{
            const response =await fetch(`https://foodapp-backend-jkro-praveenive.vercel.app/catering/myorders`,{
                method:"GET",
                headers:{
                    "x-auth-token":token
                }
            })
            const data = await response.json()
            console.log(data)
            if(!data.data)
            {
             setError(data.message)   
            }
            setCatering(data.data)
        }
        fetchmyorders()
    },[])
  return (
   <Userbase>
     <h1>Welcome To Our Catering Services</h1>
     <div className='ref'>
        <Button variant='contained' 
        onClick={()=>navigate("/createcatering")}>Create Order</Button></div><br/>
        {catering&&(
            <div className='card-container'>
            {catering?.map((data,idx)=>(
              <Card className='card' key = {data._id}>
                <h3>{data.Name}</h3>
                <p>{data.Contactno}</p>
                <p>{data.function_name}</p>
                <p>{data.memberstoattend}</p>
                <p>{data.Date}</p>
                <p>{data.Timing}</p>
                <h3>Orderstatus:{data.Orderstatus}</h3>
              </Card>
            ))}
          </div>
       
        )}
        
   </Userbase>
  )
}
