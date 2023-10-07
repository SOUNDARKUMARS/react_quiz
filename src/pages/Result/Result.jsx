import { Button } from '@material-ui/core'
import React from 'react'

const Result = ({score,name,amount}) => {
  const percent=(score/amount)*100
  let message=''


  switch (true) {
    case percent >= 90:
      message = `Excellent work ${name}! You nailed it!`
      break;
    case percent >= 80:
      message = `Fantastic job ${name}! Almost perfect!`
      break;
    case percent >= 70:
      message = `Great job ${name}! You are doing really well!`
      break;
    case percent >= 60:
      message =`Good effort ${name} ! Keep it up!`
      break;
    case percent >= 50:
      message = `Not bad ${name}! You are on the right track!`
      break;
    case percent >= 40:
      message = `You can do better ${name}! Practice more!`
      break;
    default:
      message = `Don\'t worry ${name}! Practice makes perfect!`
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