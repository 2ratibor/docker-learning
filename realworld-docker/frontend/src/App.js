import React from "react";
import axios from 'axios';
import logo from "./logo.svg";
import "./App.css";

function App() {
  const makeApiRequest = () => {
    axios.get('/api/testwithcurrentuser').then((response) => {
      console.log('api request result: ', response.data);
    })
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload!!!! Hello from inside docker!
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p>
          <button className="App-button" onClick={makeApiRequest}>Make api request</button>
        </p>
      </header>
    </div>
  );
}

export default App;
