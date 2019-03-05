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
    );
  }
}

class VoterIssues extends Component {
  state = {
    query: '',
  }
 
  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }
  render() {
    return (
      <div className="App">
        <AppHeader />
        <div className="issue-body">
        
          <body className="body-content">

            <div className="single-issue">
              <p className="issue-header">Heading1</p>
              <p className="issue-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae ullamcorper eros, gravida posuere dui. Duis hendrerit lacus metus, non elementum augue pretium laoreet. Ut et dictum ipsum. Praesent commodo felis ut diam lacinia pharetra convallis a ex. Nam non ligula ut tortor convallis bibendum. Etiam molestie, ligula eu efficitur vehicula, purus lacus facilisis sem, nec lobortis odio nunc id augue. Donec pellentesque feugiat eros, et ultricies purus aliquet et. Integer iaculis dolor sit amet purus sagittis, non bibendum felis egestas.
              </p>
            </div>
            <div className="single-issue">
              <p className="issue-header">Heading2</p>
              <p className="issue-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae ullamcorper eros, gravida posuere dui. Duis hendrerit lacus metus, non elementum augue pretium laoreet. Ut et dictum ipsum. Praesent commodo felis ut diam lacinia pharetra convallis a ex. Nam non ligula ut tortor convallis bibendum. Etiam molestie, ligula eu efficitur vehicula, purus lacus facilisis sem, nec lobortis odio nunc id augue. Donec pellentesque feugiat eros, et ultricies purus aliquet et. Integer iaculis dolor sit amet purus sagittis, non bibendum felis egestas.
              </p>
            </div>
          </body>
        </div>
      </div >
    );
  }
}

export default VoterIssues;
