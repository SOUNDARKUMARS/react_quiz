import { Button } from '@material-ui/core'
import React from 'react'

const Result = ({score,amount}) => {
  const percent=(score/amount)*100
  let message=''


  switch (true) {
    case percent >= 90:
      message = `Excellent work! You nailed it!`
      break;
    case percent >= 80:
      message = `Fantastic job! Almost perfect!`
      break;
    case percent >= 70:
      message = `Great job! You are doing really well!`
      break;
    case percent >= 60:
      message =`Good effort! Keep it up!`
      break;
    case percent >= 50:
      message = `Not bad! You are on the right track!`
      break;
    case percent >= 40:
      message = `You can do better! Practice more!`
      break;
    default:
      message = `Don\'t worry! Practice makes perfect!`
  }
  return (
    <center className='result'>
      <h1>{`You have scored ${score} out of ${amount} 🎊🏆`}</h1>
      <h1 style={{color:"green"}}>{message}</h1>
      <Button href="/">Go to Home</Button>
    </center>
  )
}

export default Result