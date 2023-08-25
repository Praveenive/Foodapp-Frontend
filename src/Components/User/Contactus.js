import { Button } from '@mui/material'
import React from 'react'
import Userbase from '../../Base/Userbase'

export default function Contactus() {
  return (
    <Userbase>
    <h1>Contact Us</h1>
    <p>We're always here to assist you! If you have any questions, feedback, or inquiries, feel free to reach out to us. 
        Here's how you can get in touch:</p>
        <h2>Customer support: support@h2b.com</h2>
        <h2>Partnerships and Collaborations :partnerships@h2b.com</h2>
        <h2>Media Inquiries:media@h2b.com</h2>
        <h1>Social media</h1>
     <div className='social-media'> 
      <Button variant="contained" ><a href="https://www.facebook.com/" target={'_blank'}>Facebook</a></Button>
     <Button variant="contained" color="success" ><a href='https://www.whatsapp.com/' target={'_blank'}> Whatsapp</a></Button>
     <Button variant="contained" ><a href="https://www.youtube.com/@bachelorlife2151/featured" target={'_blank'}>Youtube</a></Button></div>
    </Userbase>
  )
}
