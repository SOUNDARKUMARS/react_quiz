import React,{useState} from 'react'
import { toast,Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import './Question.css'
import { Button } from '@material-ui/core'


const Question = ({
  currQues,setCurrQues,
  questions,setQuestions,
  options, correct,
  score,setScore,
}) => {
 const navigate=useNavigate()
 const [selected, setSelected] = useState()

 const handleSelect=(option)=>{
  if(selected==option && selected==correct){
    return "correct"
  }else if(selected==option && selected!=correct){
    return "wrong"
  }else if(option==correct){
    return "correct"
  }
 }
 const handleCheck=(option)=>{
  setSelected(option)
  if(option===correct){
    setScore(score+1)
  }
 }

 const handleQuit=()=>{
  if(window.confirm("Are you sure you want to Quit?")){
    navigate('/')
  }
 }
 const handleNext=()=>{
  if (currQues>8){
    navigate('/result')
  }else if(selected){
    setCurrQues(currQues+1)
    setSelected()
  }else{
    toast('Select an Option',{
      style:{
        color:'white',
        fontWeight:'bold',
        fontSize:"20px", 
        padding:"10px 6px",
        backgroundColor:"#f92f60",
        border:"1px solid red"
      }
    });
  }
 }

 const decodeHtml=(html)=>{
  let txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}
  return (
    <div className='question'>
      <h1>Question {currQues+1} </h1>
      <div className='a_question'>
        <h2> {decodeHtml(questions[currQues].question)} </h2>
        <div className='options'>
          {
            options && options.map((option)=>(
              <button 
                className={`a_option ${selected && handleSelect(option)}`} 
                key={option} 
                disabled={selected} 
                onClick={()=>handleCheck(option)}
              >
                {decodeHtml(option)}
              </button>
            ))
          }
        </div>
        <div className='controls'>
          <Button 
            variant='contained'
            color='secondary' 
            size='large' 
            onClick={handleQuit}
          >Quit</Button>
          <Button
            variant='contained'
            color='secondary' 
            size='large' 
            onClick={handleNext}
            >Next</Button>
        </div>
      </div>
      <Toaster/>
    </div>
  )
}

export default Question