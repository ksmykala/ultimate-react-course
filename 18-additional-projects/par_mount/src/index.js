import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Parallax from './Paral';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Parallax />
    <div className='about'>
      <h2>Tommy the Super Tortoise</h2>
      <p>Tommy the super tortoise was born in a small garden in a quiet neighborhood. From the moment he hatched, it was clear that Tommy was no ordinary tortoise. He had a vibrant shell with colors that seemed to glow in the sunlight, and he possessed incredible strength and speed.</p>
    </div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
