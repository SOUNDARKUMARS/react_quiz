import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';
import Error from './pages/Error/Error';

function App() {
  const [name,setName]=useState("")
  const [questions,setQuestions]=useState()
  const [score,setScore]=useState(0)
  
  const fetchQuestion=async(category,difficulty)=>{
    // const {data}=await axios.get(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`}
    // ${difficulty && `difficulty=${difficulty}`}&type=multiple`)
   const {data}=await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`)
   console.log(`category-${category} and difficulty-${difficulty}`) 
   console.log(name)
   console.log("Question :"+data.results[0].question)
   console.log("Answer :"+data.results[0].correct_answer)
  }
return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Routes>
          <Route path='/' element={<Home name={name} setName={setName} fetchQuestion={fetchQuestion}/>}/>

          <Route path='/quiz'element={<Quiz/>} />

          <Route path='/result' element={<Result/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
