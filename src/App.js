import React, { Component } from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <header className="Toolbar">
            <img src={logo} className="App-logo" style={{ marginLeft: 0 }} alt="logo" />
            <Button onClick={() => { }} className="Button" variant="contained" style={{ margin: 10, padding: 10 }} color="primary">Voter Issues</Button>
            <Button onClick={() => { }} className="Button" variant="contained" style={{ margin: 10, padding: 10 }} color="primary">Statistics</Button>
            <Button onClick={() => { }} className="Button" variant="contained" style={{ margin: 10, padding: 10 }} color="primary">Transcripts</Button>
            <Button onClick={() => { }} className="CTA" variant="contained" style={{ margin: 5, padding: 5, marginLeft: "auto", marginRight: 10 }} color="secondary">Sign Up</Button>
          </header>
        </div>
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
