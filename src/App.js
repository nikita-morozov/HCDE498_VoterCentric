import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader.js';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Home from './Home.js';
import Statistics from './Statistics.js';
import VoterIssues from './VoterIssues.js';

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

class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <AppHeader />
          <Route exact path="/" component={Home} />
          <Route path="/statistics" component={Statistics} />
          <Route path="/voterissues" component={VoterIssues} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
