import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  parentContainer: {
    mt: 100
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
})

class Home extends Component {
  render() {
    return (
        <Router>
            <div className="App">
            <AppHeader />
            <div className="parentContainer" styles="parentContainer">
                <div className="containerMain">
                <div className="img_main">
                    <div className="containerLabel">

                    </div>
                </div>
                </div>
            </div>
            <div className="Body">
                <body className="body-content">
                </body>
            </div>
            </div >
        </Router>
    );
  }
}

export default withStyles(styles)(Home);