import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Conversor from './Components/Conversor/Conversor';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path = '/' element = {<App />} />
      <Route exact path ='/conversor' element = {<Conversor />} />
    </Routes>
  </BrowserRouter>
);

