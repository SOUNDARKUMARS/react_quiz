import { Button } from '@material-ui/core'
import React from 'react'

const Result = ({score,name}) => {
  return (
    <div className='result'>
      {score>8 && <h1>{`Congrats! You have scored ${score} out of 10 🎊🏆`}</h1>}
      {(score>5 && score<8) && <h1>{`You have scored ${score} out of 10, get better 👍`}</h1> }
      {score<5 && <h1>{` You have scored ${score} out of 10.It's ok..With practice you can make it sooner`}</h1>}
      <Button href="/">go to home</Button>
    </div>
  )
}

export default Result