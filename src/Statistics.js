import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader.js';

const styles = theme => ({
  parentContainer: {
    mt: 100
  }
})

class Statistics extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <div className="Body">
          <body className="body-content">
            
          </body>
        </div>
      </div >
    );
  }
}

export default Statistics;
