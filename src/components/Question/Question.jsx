import React,{useEffect, useState} from 'react'
import { toast,Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import './Question.css'
import { Button } from '@mui/material'

// props are received from the immediate parent Quiz.jsx and from gradparent component App.js
// props drilling
const Question = ({
  currQues,setCurrQues,
  questions,setQuestions,
  options, correct,
  score,setScore,
  amount
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
// over all timer handler, which is the `amount of questions` times the time limit per question i.e., 20sec
const [timer, setTimer] = useState(20)
  useEffect(() => { //que change useEffect
    setTimer(20)
    setSelected()
  }, [currQues])

  useEffect(() => {
    const timerInterval=setInterval(()=>{
      if(timer>0){
        setTimer(timer-1)
      }else{
        clearInterval(timerInterval)
        handleNext()
      }
    },1000)
  
    return () => {clearInterval(timerInterval)}
  }, [currQues,timer])
 
   //progres bar
   const remainingTime = timer
   const totalTime =20
   const progressPercentage = ((totalTime - remainingTime) / totalTime) * 100

  //  confirm before quiting the quiz
 const handleQuit=()=>{
  if(window.confirm("Are you sure you want to Quit?")){
    navigate('/')
  }
 }
// current question is decreament by one to go to the previous question
 const handlePrevious=()=>{
  if(currQues>0){
    setCurrQues(currQues-1)
  }else{
    toast('You are at the first Question now.',{
      style:{
        color:'white',
        fontWeight:'bold',
        fontSize:"15px", 
        padding:"8px 4px",
        backgroundColor:"darkgrey",
        border:"1px solid black"
      }
    })
  }
 }
 // current question is increament by one to go to the next question
 const handleNext = () => {
  if (currQues >= amount-1){
    navigate('/result');
  } else {
    setCurrQues(currQues + 1);
    setSelected();
  }
}
// raw html is coming from the API, like `&quot;` .
//  this is processing and getting the value from this.
 const decodeHtml=(html)=>{
  let txt = document.createElement("textarea")
  txt.innerHTML = html
  return txt.value
}
  return (
    <div className='question'>
      
      
      <br />
      <hp style={{color:"#663519"}}>Time left: {timer}s</hp>
      <div className='a_question'>
      <div className='progBar'>
        <div className='prog' style={{transform: `scaleX(${progressPercentage / 100})`}}></div>
        <p className='question_nums'><span className='question_no' >{currQues+1}</span>/{amount}</p>
      </div>
      {/* calling the decodeHtml function for processing the raw html */}
        <h2 className='question_'> {decodeHtml(questions[currQues]?.question)} </h2>
        {/* mapping the options */}
        <div className='options'>
          {
            options && options.map((option)=>(
              <button 
              // to separate the correct and incorrect options className is changed by 
              // the handleSelect function, returning the className `correct` and `wrong` classNames
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
          {/* go back to previous  */}
          <Button
            variant='contained'
            color='secondary' 
            size='large' 
            onClick={handlePrevious}
            >«« Previous </Button>
            {/* go to next question*/}
          <Button
            variant='contained'
            color='secondary' 
            size='large' 
            onClick={handleNext}
            >Next »»</Button>
        </div>
      </div>
      <br /><br />
      {/* quiting quiz */}
      <Button className='quitButton'
            variant='outlined'
            size='small' 
            onClick={handleQuit}
          >Quit</Button>
      <Toaster/>
    </div>
  )
}

export default Question