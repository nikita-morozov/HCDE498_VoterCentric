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
            <img src={logo} className="App-logo" alt="logo" />
            <Button onClick= {() => {
            }} className="Button" variant="contained" style={{margin: 10, padding: 10}} color="primary">Voter Issues</Button>
            <Button onClick= {() => {
            }} className="Button" variant="contained" style={{margin: 10, padding: 10}} color="primary">Statistics</Button>
            <Button onClick= {() => {
            }} className="Button" variant="contained" style={{margin: 10, padding: 10}} color="primary">Transcripts</Button>
            <Button onClick= {() => {
            }} className="CTA" variant="contained" style={{margin: 5, padding: 5, marginLeft: 750}} color="default">Sign Up</Button>
          </header>
        </div>
        <div className="imgholder">
          <img className="img-left" alt="" />
          <img className="img-right" alt="" />
        </div>
        <div className="Body">
          <body className="body-content">

          </body>
        </div>
      </div>
    );
  }
}

export default App;
