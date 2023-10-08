import { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter,Route, Routes } from 'react-router-dom'

import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Quiz from './pages/Quiz/Quiz'
import Result from './pages/Result/Result'
import Error from './pages/Error/Error'

function App() {
  const [name,setName]=useState("")
  const [questions,setQuestions]=useState()
  const [score,setScore]=useState(0)
  const [amount, setAmount] = useState(0)

  const fetchQuestion=async(category,difficulty,quesCount)=>{
  setAmount(quesCount)
  const {data}=await axios.get(`https://opentdb.com/api.php?amount=${quesCount}${category&& `&category=${category}`}
  ${difficulty&& `&difficulty=${difficulty}`}`)   
   setQuestions(data.results)
  }
return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Routes>
          <Route path='/' element={
            <Home 
              name={name}
              setName={setName} 
              fetchQuestion={fetchQuestion}/>
          }/>

          <Route path='/quiz'element={
            <Quiz 
              name={name}
              questions={questions} 
              setQuestions={setQuestions} 
              score={score} 
              setScore={setScore}
              amount={amount}
            />
          } />

          <Route path='/result' element={<Result score={score} amount={amount}/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
