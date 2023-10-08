import { Button } from '@mui/material'
import React from 'react'

import './Result.css'
import Winner from '../../asstets/gold-cup.png'
import Great from '../../asstets/OIG (1).jpeg'
import GoodLuck from '../../asstets/good-luck.png'
import Practice from '../../asstets/OIG.png'

const Result = ({score,amount}) => {
  const percent=(score/amount)*100
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