import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let posts = [
    {id: 1, message: 'Hello my friend', likesCount: 2},
    {id: 2, message: 'What are you doing ?', likesCount: 5},
    {id: 3, message: 'Fine, working and learning ?', likesCount: 8},
    {id: 4, message: 'This is your car ?', likesCount: 14}
];

root.render(
  <React.StrictMode>
    <App posts={posts}/>
  </React.StrictMode>
);

reportWebVitals();
