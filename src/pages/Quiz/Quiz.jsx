
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { scoreImg, timerImg} from '../../assets'
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
        {/* this is progress bar from the top right to the left, get emptying. */}
        <div className='progress' style={{ transform: `scaleX(${progressPercentage / 100})` }}></div>
      </div>
      <div>
        {/* greeting name */}
        <h1 className='name'>👋 Hi {name},</h1>
        <p className='namep'>Great to see you!</p>
      </div>
      {questions?(
      <>
      {/* showing, in which category the user is now in. */}
      <span className='category'> {questions[currQues]?.category} </span>
        <div className='quizInfo'>
          {/* sccore and the overall time left */}
          <span><img src={scoreImg} width='50px' height="50px" alt="score" />Score: {score}</span>
          <span> <img src={timerImg} width='45px' height="45px" alt='timer' /> <span >{formattedMinutes} : {formattedSeconds} </span></span>
        </div>
        
        {/* sending the props from the parant i.e., App.js and from this (Quiz.jsx) */}
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
        // loading progress
        <center className='loader'>
          <p style={{textAlign:"center",fontWeight:"bold"}}>Loading...</p>
        </center>
      )}
    </div>
  )
}

export default Quiz
