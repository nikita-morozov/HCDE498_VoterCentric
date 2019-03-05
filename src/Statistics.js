import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader.js';
import { withStyles } from '@material-ui/core/styles';
import { Router } from 'react-router-dom';

const styles = theme => ({
  parentContainer: {
    mt: 100
  }
})

class Statistics extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppHeader />
          <div className="Body">
            <body className="body-content">
              
            </body>
          </div>
        </div >
      </Router>
    );
  }
}

export default withStyles(styles)(Statistics);
