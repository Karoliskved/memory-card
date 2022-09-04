import { useState } from 'react';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Main from './components/Main';
import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <Scoreboard />
      <Main />
    </div>
  );
};

export default App;
