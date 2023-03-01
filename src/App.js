import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <div>
                    <h2>
                        Only
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

export default App;
