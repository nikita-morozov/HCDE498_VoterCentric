import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
})

class Statistics extends Component {
  render() {
    return (
      <div className="App">
        <div className="parentContainer" styles="parentContainer">
          <div className="containerMain">
          </div>
          <div className="containerMain">
          </div>
        </div>
      </div >
    );
  }
}

export default withStyles(styles)(Statistics);
