import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import './Quiz.css'
import Question from '../../components/Question/Question';
const Quiz = ({ name, questions, setQuestions, score, setScore }) => {
  const [options, setOptions] = useState([]);

  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    if (questions && questions[currQues]) {
      const shuffledOptions = handleShuffle([
        questions[currQues]?.correct_answer,
        ...questions[currQues]?.incorrect_answers,
      ]);
      setOptions(shuffledOptions);
    }
  }, [questions, currQues]);

  console.log(questions)
  console.log(options)

  const handleShuffle = (optionsArr) => {
    return optionsArr.sort(() => Math.random() - 0.5);
  };

  return (
    <div className='quiz'>
      <span className='subtitle'>Hello {name}</span>
      {questions?(
      <>
        <div className='quizInfo'>
          <span> {questions[currQues].category} </span>
          <span>Score: {score}</span>
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
        />
      </>
      ):(
        
        <cen className='loader'>
          <CircularProgress color='inherit'  size={50} thickness={4}/>
        </cen>
      )}
    </div>
  );
};

export default Quiz;
