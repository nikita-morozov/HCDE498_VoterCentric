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
              <div className="containerLabel">
                <p>It's that time of year again! Register to vote:</p>
              </div>
            </div>
          </div>
          <div className="containerRight">
            <div className="img-right">
              <div className="containerLabel">
                <p>It's that time of year again! Register to vote:</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Body">
          <body className="body-content">
            <div className="text-section">
              <p>Header</p>
              <p>This is where a paragraph of text might go. I'm going to write some stuff here so it ends up taking a decent amount of space, like any other paragraph might. Not sure what else to write, but I'm sure this length is just fine.</p>
            </div>
            <div className="text-section">
              <p>Header</p>
              <p>This is where a paragraph of text might go. I'm going to write some stuff here so it ends up taking a decent amount of space, like any other paragraph might. Not sure what else to write, but I'm sure this length is just fine.</p>
            </div>
          </body>
        </div>
      </div >
    );
  }
}

export default App;
