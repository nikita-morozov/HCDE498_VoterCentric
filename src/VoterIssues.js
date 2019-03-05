import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import AppHeader from './components/AppHeader.js';
import { Router } from 'react-router-dom';

const styles = theme => ({
  parentContainer: {
    mt: 100
  }
})

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
      <Router>
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
      </Router>
    );
  }
}

export default withStyles(styles)(VoterIssues);
