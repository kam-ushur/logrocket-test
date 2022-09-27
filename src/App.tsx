import React, { useEffect } from 'react';
import logo from './logo.svg';
import "./logrocket/logrocket";
import './App.css';

function App() {

  const onClick = () => {
    throw new Error("This is a test: " + new Date().toUTCString())
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={onClick}>
          Generate error 
        </button>
      </header>
    </div>
  );
}

export default App;
