import React, { useState } from 'react'
import { Button, MenuItem, TextField } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { toast,Toaster } from 'react-hot-toast';

import './Home.css'
import Categories, {} from '../../Data/Categories'

function Home({name,setName}) {
  
  const [category,setCategory] =useState("")
  const [difficulty,setDifficulty] =useState("")
  const [error,setError] =useState(false)

  const navigate=useNavigate()
  const handleSubmit=()=>{
    if(!category ||!difficulty || !name ){
      setError(true)
      return
    }else{
      setError(false)
      navigate('/quiz')
    }
  }


  return (
    <div className='content'>
      <div className='settings'>
        <span style={{fontSize:30,marginTop:60}}>It's just a Preset down there.</span>
          {/* TODO: banner image */}
          <div className='settings__select'>
          {error && <div style={{padding:"14px 5px",textAlign:"center",marginBottom:20,borderRadius:"6px",backgroundColor:"#d11b2a",display:"inline-block",color:"white",boxShadow:"2px 3px 9px #483f3f"}}>fill the data</div>}
            <TextField 
              style={{marginBottom:25}} 
              label="What shall we call you? Captain Code? Sir Hack-a-Lot? You decide!" 
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
      </div>
  )
}

export default Home