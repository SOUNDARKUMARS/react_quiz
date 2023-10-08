import { CircularProgress } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Quiz.css'
import Question from '../../components/Question/Question'
const Quiz = ({ name, questions, setQuestions, score, setScore,amount }) => {
  const [options, setOptions] = useState([])

  const [currQues, setCurrQues] = useState(0)

  useEffect(() => {
    if (questions && questions[currQues]) {
      const shuffledOptions = handleShuffle([
        questions[currQues]?.correct_answer,
        ...questions[currQues]?.incorrect_answers,
      ])
      setOptions(shuffledOptions)
    }
  }, [questions, currQues])

  console.log(questions)
  console.log(options)

  const handleShuffle = (optionsArr) => {
    return optionsArr.sort(() => Math.random() - 0.5)
  }

  const navigate=useNavigate()
  const [timer, setTimer] = useState(amount*20)
  useEffect(() => {
    const timerInterval=setInterval(()=>{
      if(timer>0) setTimer(timer-1) 
      else{
        clearInterval(timerInterval)
        navigate('/result')
      }
    },1000)
    return ()=>clearInterval(timerInterval)
  }, [timer , navigate])
  const minutes = Math.floor(timer / 60)
  const seconds = timer % 60

  const formattedMinutes = String(minutes).padStart(2, '0')
  const formattedSeconds = String(seconds).padStart(2, '0')

  //progres bar
  const remainingTime = timer
  const totalTime = amount * 20
  const progressPercentage = ((totalTime - remainingTime) / totalTime) * 100
  

  return (
    <div className='quiz'>
      <div className='progressBar'>
        <div className='progress' style={{ transform: `scaleX(${progressPercentage / 100})` }}></div>
      </div>
      <center className='name'>Hello {name}</center>
      {questions?(
      <>
      
        <div className='quizInfo'>
          <span> {questions[currQues]?.category} </span>
          <span>Score: {score}</span>
          <span>Over All Time Left: <span style={{color:"blue"}}>{formattedMinutes} : {formattedSeconds} </span></span>
        </div>
        <Question
          currQues={currQues}//--
          setCurrQues={setCurrQues}
          questions={questions}//--
          setQuestions={setQuestions}
          options={options}//--
          score={score}//--
          setScore={setScore}
          correct={questions[currQues]?.correct_answer}
          amount={amount}
        />
      </>
      ):(
        
        <center className='loader'>
          <CircularProgress color='inherit'  size={50} thickness={4}/>
        </center>
      )}
    </div>
  )
}

export default Quiz
