import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        const loginDetails = { email, password };
        const response = await fetch(`https://foodapp-backend-jkro-praveenive.vercel.app/user/login`,{
            method: 'POST',
            body: JSON.stringify(loginDetails),
            headers: {
                'Content-type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        if (!data.token) {
            setError(data.message);
        }
        else{
            const role = data.role;
            console.log(role)
            localStorage.setItem("id", data.id)
            if(role==="admin"){
          setError(" ")
          localStorage.setItem("token",data.token)
          navigate("/admindishes")
          }
          else {
            setError(" ")
          localStorage.setItem("token",data.token)
          navigate("/usermenu")}}
        }
    
    return (
        <div className='App'>
            <h3>Login Page</h3>
            <TextField id='email' label='Email' type='email' value={email} 
            onChange={(e) => setEmail(e.target.value)} variant='outlined' /><br /><br />
            <TextField id='password' label='Password' type='password' value={password} 
            onChange={(e) => setPassword(e.target.value)} variant='outlined' /><br /><br />
            <Button variant='contained' onClick={handleLogin}>Login</Button>
            <p>{error}</p> 
            <p>Don't have an Account?</p>
            <Button variant='text' onClick={() => navigate('/signup')}>Signup</Button> 
        </div>
    );
}
