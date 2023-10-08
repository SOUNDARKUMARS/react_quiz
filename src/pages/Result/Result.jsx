import { Button } from '@mui/material'
import React from 'react'

import './Result.css'
import Winner from '../../assets/gold-cup.png'
import Great from '../../assets/great-removebg-preview.png'
import GoodLuck from '../../assets/good-luck.png'
import Practice from '../../assets/OIG.png'

const Result = ({score,amount}) => {
  // calculate the percetage, 
  // greeting will be switched based on the percentage.
  const percent=(score/amount)*100
  // message and image is set to empty at first and then it will be selected respectively
  let message=''
  let image
  switch (true) {
    case percent >= 90:
      message = `Excellent work! You nailed it!🎊🏆🎖️`
      image=Winner
      break;
    case percent >= 80:
      message = `Fantastic job! Almost perfect!🎊🏆`
      image=Great
      break;
    case percent >= 70:
      message = `Great job! You are doing really well!🏆`
      image=Great
      break;
    case percent >= 60:
      message =`Good effort! Keep it up!👍👍`
      image=GoodLuck
      break;
    case percent >= 50:
      message = `Not bad! You are on the right track!🤞`
      image=GoodLuck
      break;
    case percent >= 40:
      message = `You can do better! Practice more!💪⚒️`
      image=Practice
      break;
    default:
      message = `Don't worry! Practice makes perfect!⚒️`
      image=Practice
  }
  return (
    <center className='result'>
      <h1>{`You have scored ${score} out of ${amount} `}</h1>
      <h1 style={{color:"green"}}>{message}</h1>
      <img src={image} alt="image" height="500px" width="auto" />
      <Button variant='outlined' href="/">Go to Home</Button>
    </center>
  )
}

export default Result