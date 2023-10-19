import React from 'react';
import './App.css';
import Greeting from './week1.1.js';
import GreetingComponent from './week1.2.js';
import ColorComponent from './week1.3.js';
import SquareComponent from './week1.4.js';
import LuckyNumber from './week1.5';
import GreetingNames from './week1.6.js';

function App() {
  return (
    <div className="App">
      <Greeting />
      <GreetingComponent /> 
      <ColorComponent />
      <SquareComponent />
      <LuckyNumber />
      <GreetingNames />
    </div>
  );
}

export default App;
