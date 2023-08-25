import { Button, Card } from '@mui/material'
import React, { useEffect } from 'react'
import Base from '../../Base/Base'

export default function AdminFeedback({feedback,setfeedback}) {
    let token = localStorage.getItem("token")
    useEffect(()=>{
        const fetchFeedback = async()=>{
            const response =await fetch(`https://foodapp-backend-jkro-praveenive.vercel.app/feedback/allfeedback`,{
                method:"GET",
                headers:{
                    "x-auth-token":token
                }
            })
            const data = await response.json()
            setfeedback(data.data)
        }
        fetchFeedback()
        },[])
  return (
    <Base>
    <h1>Our Feedbacks</h1>
    {feedback&&(
            <div className='card-container'>
            {feedback?.map((data,idx)=>(
              <Card className='card' key = {data._id}>
                <h3>{data.Name}</h3>
                <p>{data.Contact}</p>
                <p>{data.Feedback}</p>
                <Button variant='contained' color="success">Save</Button><br/>
              </Card>
            ))}
          </div>
       
        )}

    </Base>
  )
}
