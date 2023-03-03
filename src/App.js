import logo from './logo.svg';
import './App.css';
import Header from './Header.jsx';
import MyPromis from './MyPromis.jsx';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <div>
                    <h2>
                        Promise
                        <MyPromis/>
                        <Header/>
                    </h2>
                </div>
            </header>
        </div>
    );
};

export default App;
