import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <p>Home page This is App.js</p>
                <Routes>
                    <Route exact path='/profile'
                           element={<Profile
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch}/>}/>
                    <Route exact path='/dialogs'
                           element={<Dialogs
                               dialogsPageState={props.state.dialogsPage}
                               dispatch={props.dispatch}/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
};

export default App;
