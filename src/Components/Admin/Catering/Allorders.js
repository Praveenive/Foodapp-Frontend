import { Button, Card } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Base from '../../../Base/Base'

export default function Allorders({catering,setCatering}) {
    const navigate = useNavigate()
    const [error,setError] = useState("")
    let token = localStorage.getItem("token")
    useEffect(()=>{
        const fetchallOrders = async()=>{
            const res =await fetch(`https://foodapp-backend-jkro-praveenive.vercel.app/catering/cateringorders`,{
                method:"GET",
                headers:{
                    "x-auth-token":token
                }
            })
            const data =await res.json()
            if(!data.data){
                setError(data.message)
            }
            setCatering(data.data)
            console.log(data)
        }
        fetchallOrders()
    },[])
  return (
    <Base>
    <h1>Catering Orders</h1>
        {catering&&(
            <div className='card-container'>
            {catering?.map((data,idx)=>(
              <Card className='card' key = {data._id}>
                <h3>{data.Name}</h3>
                <p>{data.Contactno}</p>
                <p>{data.function_name}</p>
                <p>Count:{data.memberstoattend}</p>
                <p>{data.Date}</p>
                <p>{data.Timing}</p>
                <h3>Orderstatus:{data.Orderstatus}</h3>
                <Button variant='contained' color='success'
                onClick={()=>navigate(`/cateringstatus/${data._id}/${token}`)}>Update status</Button><br/>
              </Card>
            ))}
          </div>
       
        )}

    </Base>
  )
}
