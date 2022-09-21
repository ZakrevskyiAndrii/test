import './App.css';
import logo from './logo.svg';

const Hello = () => <p>Hello you</p>;
const HelloYou = () => <p>Hello you</p>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="test">hello you</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Hello />
      <HelloYou />
    </div>
  );
}

export default App;
