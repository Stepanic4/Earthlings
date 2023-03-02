import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <div>
                    <h2>
                        Promise
                        <Mer/>
                        <Hex/>
                    </h2>
                </div>
            </header>
        </div>
    );
};
const Hex = () => {
    return (
        <div>
            <h1>Portfolio</h1>
        </div>
    );
};

const Mer = () => {
    return (
        <p>
            Tomorrow twenty lesson !
        </p>
    );
};

export default App;
