import { useState } from 'react';
import './App.css';
import logo from './logo.svg';

const Hello = () => <p>Hello you</p>;
const HelloYou = () => <p>Hello you</p>;

function LessText({ text, maxLength }) {
  // Create a piece of state, and initialize it to `true`
  // `hidden` will hold the current value of the state,
  // and `setHidden` will let us change it
  const [hidden, setHidden] = useState(true);

  // If the text is short enough, just render it
  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }

  // Render the text (shortened or full-length) followed by
  // a link to expand/collapse it.
  // When a link is clicked, update the value of `hidden`,
  // which will trigger a re-render
  return (
    <span>
      {hidden ? `${text.substr(0, maxLength).trim()} ...` : text}
      {hidden ? (
        <a onClick={() => setHidden(false)}> read more TEXT</a>
      ) : (
        <a onClick={() => setHidden(true)}> read less</a>
      )}
    </span>
  );
}

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
      <LessText text="hello" maxLength={3} />
    </div>
  );
}

export default App;
