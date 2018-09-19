import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">M. Wahid Alqorni</h1>
          <p>Have a nice day</p>
        </header>
        <p className="App-intro">
          Sebaik-baik manusia <code>adalah</code> yang paling bermanfaat bagi Manusia (HR.Ahmad).
        </p>
      </div>
    );
  }
}

export default App;
