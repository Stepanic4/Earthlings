import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let dialogs = [
    {id: 1, name: 'Ivan'},
    {id: 2, name: 'Lena'},
    {id: 3, name: 'Arnold'},
    {id: 4, name: 'Michal'},
    {id: 5, name: 'Sara'},
    {id: 6, name: 'Ura'},
    {id: 7, name: 'Dasha'},
    {id: 8, name: 'Karl'}
];

let messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Everything is ok'},
    {id: 4, message: 'My name Petr'},
    {id: 5, message: 'If you want?'},
    {id: 6, message: 'Little car'},
    {id: 7, message: 'Friends is happy'},
    {id: 8, message: 'Happy day'}
];

let posts = [
    {id: 1, message: 'Hello my friend', likesCount: 22},
    {id: 2, message: 'What are you doing ?', likesCount: 5},
    {id: 3, message: 'Fine, working and learning ?', likesCount: 38},
    {id: 4, message: 'This is your car ?', likesCount: 14},
    {id: 5, message: 'How way!!!', likesCount: 7}
];

root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

reportWebVitals();
