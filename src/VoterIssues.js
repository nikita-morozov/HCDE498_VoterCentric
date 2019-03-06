import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  parentContainer: {
    mt: 100
  },
  button: {
    margin: theme.spacing.unit,
  },
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
    const { classes } = this.props;

    return (
      <div className="App">
          <div className="issue-body">
            <div className="page-header">What issues are important to you?</div>
            <div className="issue-body-content">
              {/*Make these some kind of flexbox list of stuff or whatever*/}
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
            </div>
          </div>
        </div >
    );
  }
}

export default withStyles(styles)(VoterIssues);
