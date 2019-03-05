import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <div className="parentContainer">
          <div className="containerLeft">
            <div className="img-left">
              <p className="lefttext">It's that time of year again! Register to vote:</p>
            </div>
          </div>
          <div className="containerRight">
            <div className="img-right">
              <p className="righttext">It's that time of year again! Register to vote:</p>
            </div>
          </div>
        </div>
        <div className="Body">
          <body className="body-content">
            <p>PLACEHOLDER</p>
          </body>
        </div>
      </div >
    );
  }
}

export default App;
