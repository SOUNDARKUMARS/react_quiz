import React, { useState } from 'react'
import { Button, MenuItem, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { toast,Toaster } from 'react-hot-toast'

import './Home.css'
import Categories from '../../Data/Categories'


function Home({name,setName,fetchQuestion}) {
  
  const [category,setCategory] =useState("")
  const [difficulty,setDifficulty] =useState("")
  const [quesCount, setQuesCount] = useState()

  const navigate=useNavigate()
  const handleSubmit=()=>{
    if (!category || !difficulty || !name) {
      toast('Fill out all the data first',{
        style:{
          color:'red',
          fontSize:"20px", 
          padding:"10px 6px",
          backgroundColor:"rgb(236, 170, 170)",
          border:"3px solid #d92b4b"
        }
      });  
      return;
    }else{
      fetchQuestion(category,difficulty,quesCount)
      navigate('/quiz')
    }
  }
  
  return (
    <div className='content'>
      <div className='settings'>
        <span style={{fontSize:30,width:"100%",fontWeight:"bold",margin:"10px 0",color:'#4b3620'}}>Unleash your inner quizmaster - where curiosity meets fun! 🚀😄</span>
         
          <div className='settings__select'>       

            <TextField 
              style={{marginBottom:25}} 
              label="What shall we call you? You decide!" 
              variant="outlined"
              onChange={(e)=>setName(e.target.value)}
              >

            </TextField>

            
            <TextField
              select
              label="Choose your vibe"
              variant='outlined' style={{marginTop:25,marginBottom:25}}
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
            >
              {Categories.map((cat)=>(
                <MenuItem key={cat.category} value={cat.value} >{cat.category}</MenuItem>
              ))}            
            </TextField>

            <TextField
              
              select
              label="How challenging do you want it?"
               style={{marginTop:25}}
              value={difficulty}
              onChange={(e)=>setDifficulty(e.target.value)}
            >
              <MenuItem key='easy' value='easy'>Easy peasy</MenuItem>
              <MenuItem key='medium' value='medium'>Medium salsa</MenuItem>
              <MenuItem key='hard' value='hard'>Ghost Pepper</MenuItem>
            </TextField>

            <TextField 
              style={{marginTop:40}} 
              label="How many you can take?" 
              variant="outlined"
              value={quesCount}
              onChange={(e)=>setQuesCount(e.target.value)}
            ></TextField>
            <br /><br /><br />
            <Button onClick={handleSubmit} variant='contained' color='primary' size='large' >Begin Challenge! 🚀</Button>
          </div>
         
          </div>
          <Toaster/>
      </div>
  )
}

export default Home