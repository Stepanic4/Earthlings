import logo from './logo.svg';
import './App.css';
import Star from "./Star";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <div>
                    <h2>
                        Earthlings
                    </h2>
                    <Star/>
                </div>
            </header>
        </div>
    );
};

export default App;
