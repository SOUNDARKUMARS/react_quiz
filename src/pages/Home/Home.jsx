import React, { useState } from 'react'
import { Button, MenuItem, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { toast,Toaster } from 'react-hot-toast'

import './Home.css'
import Categories from '../../Data/Categories'

//name and setname is propped to the parent to make it global.
function Home({name,setName,fetchQuestion}) {
  
  const [category,setCategory] =useState("")
  const [difficulty,setDifficulty] =useState("")
  const [quesCount, setQuesCount] = useState()
  
  // useNavigate is for routing the user to another page,
  // which is inititialized and set to a variable.
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
      // for this function in parent these two values are passed.
      // after returning this will navigate to the quiz comp.
      fetchQuestion(category,difficulty,quesCount)
      navigate('/quiz')
    }
  }
  
  return (
    <div className='content'>
      <div className='settings'>
        <span style={{fontSize:30,width:"100%",fontWeight:"bold",margin:"10px 0",color:'#4b3620'}}>Unleash your inner quizmaster - where curiosity meets fun! 🚀😄</span>
         
          <div className='settings__select'>       
            {/* name is set  */}
            <TextField 
              style={{marginBottom:25}} 
              label="What shall we call you? You decide!" 
              variant="outlined"
              onChange={(e)=>setName(e.target.value)}
              ></TextField>
              {/* category is set */}
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
              {/* difficulty level is set */}
            <TextField
              select
              label="How challenging do you want it?"
              style={{marginTop:25}}
              value={difficulty}
              onChange={(e)=>setDifficulty(e.target.value)}
            >
              <MenuItem key='easy' value='easy'>Easy Peasy</MenuItem>
              <MenuItem key='medium' value='medium'>Medium Salsa</MenuItem>
              <MenuItem key='hard' value='hard'>Ghost Pepper</MenuItem>
            </TextField>

            {/* amount of question is set */}
            <TextField 
              style={{marginTop:40}} 
              label="How many you can take?" 
              variant="outlined"
              value={quesCount}
              onChange={(e)=>setQuesCount(e.target.value)}
            ></TextField>
            <br /><br /><br />
            {/* quiz start */}
            <Button onClick={handleSubmit} variant='contained' color='primary' size='large' >Begin Challenge! 🚀</Button>
          </div>
         
          </div>
          {/* this is for react-hot-toast and this component can be placed anywhere in the body */}
          <Toaster/>
      </div>
  )
}

export default Home