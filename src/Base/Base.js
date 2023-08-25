import { AppBar, IconButton, Toolbar } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Base({title,description,children}) {
    const navigate=useNavigate()
    function handleLogut(){
      localStorage.removeItem("token")
      navigate("/login")
  }
  return (
    <div className='main-container'>
      <header>
      <nav>
        <h1>Hungry Hunters</h1>
      <AppBar position="static">
  <Toolbar variant="dense">
    <IconButton 
    edge="end"
     color="inherit"
     onClick={()=>navigate("/admindishes")}
      aria-label="dashboard" sx={{ mr: 2 }}>  
    Menu
    </IconButton>
    <IconButton 
    edge="end"
     color="inherit"
     onClick={()=>navigate("/cateringallorders")}
      aria-label="dashboard" sx={{ mr: 2 }}>  
   Catering Services
    </IconButton>
    <IconButton 
    edge="end" 
    color="inherit"
     aria-label="students"
     onClick={()=>navigate("/adminaboutus")}
      sx={{ mr: 2 }}>  
      About Us
    </IconButton>
    <IconButton 
    edge="end" 
    color="inherit" 
    aria-label="add students" 
    onClick={()=>navigate("/adminfeedback")}
    sx={{ mr: 2 }}>  
    Feedback
    </IconButton>
    <IconButton  className='logout'
    edge="end" 
    color="inherit" 
    aria-label="add students" 
   onClick={handleLogut}
    sx={{ mr: 2 }}>  
   LogOut
    </IconButton>

  </Toolbar>
</AppBar>
        </nav>
      </header>
      <main>
          <h1>{title}</h1> 
          <h4>{description}</h4>
          <div className='contents'>
                {children}
          </div>
      </main>
    </div>
  )
}
