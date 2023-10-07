import React, { useState } from 'react'
import { Button, MenuItem, TextField } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { toast,Toaster } from 'react-hot-toast';

import './Home.css'
import Categories from '../../Data/Categories'


function Home({name,setName,fetchQuestion}) {
  
  const [category,setCategory] =useState("")
  const [difficulty,setDifficulty] =useState("")
  

  const navigate=useNavigate()
  const handleSubmit=()=>{
    if (!category || !difficulty || !name) {
      toast('Fill out all the data first',{
        style:{
          color:'white',
          fontWeight:'bold',
          fontSize:"20px", 
          padding:"10px 6px",
          backgroundColor:"#f92f60",
          border:"1px solid red"
        }
      });  
      return;
    }else{
      fetchQuestion(category,difficulty)
      navigate('/quiz')
    }
  }

// Todo: give an option(see the ``handleNext`` function in ``Question.jsx``) to select how many questions the user wants and the type of the question
  return (
    <div className='content'>
      <div className='settings'>
        <span style={{fontSize:30,marginTop:60}}>It's just a Preset down there.</span>
          {/* TODO: banner image */}
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
              variant='outlined' style={{marginTop:25}}
              value={difficulty}
              onChange={(e)=>setDifficulty(e.target.value)}
            >
              <MenuItem key='easy' value='easy'>Easy peasy</MenuItem>
              <MenuItem key='medium' value='medium'>Medium salsa</MenuItem>
              <MenuItem key='hard' value='hard'>Ghost Pepper</MenuItem>
            </TextField>
            <br /><br /><br />
            <Button onClick={handleSubmit} variant='contained' color='primary' size='large' >Begin Challenge! 🚀</Button>
          </div>
         
          </div>
          <Toaster/>
      </div>
  )
}

export default Home