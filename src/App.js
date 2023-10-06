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
return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>

          <Route path='/quiz'element={<Quiz/>} />

          <Route path='/result' element={<Result/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
