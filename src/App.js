import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <div>
                    <h2>
                        Earthlings
                    </h2>
                    <h1>Today</h1>
                    <h4>Happy day</h4>
                </div>
            </header>
        </div>
    );
};

export default App;
