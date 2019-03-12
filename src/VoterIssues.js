import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
})

class Issue extends Component {
  constructor() {
    super();
    this.state = {
      small: true
    };
  }

  makeBig = () => {
    this.setState({
      small: false
    });
  }

  makeSmall = () => {
    this.setState({
      small: true
    });
  }

  render() {
    if (this.state.small) {
      return (
        <div className="single-issue" onClick={this.makeBig}>
          <p className="issue-header-small">
            Issue #
          </p>
          <p className="issue-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae ullamcorper eros, gravida posuere dui. Duis hendrerit lacus metus, non elementum augue pretium laoreet. Ut et dictum ipsum. Praesent commodo felis ut diam lacinia pharetra convallis a ex. Nam non ligula ut tortor convallis bibendum. Etiam molestie, ligula eu efficitur vehicula, purus lacus facilisis sem, nec lobortis odio nunc id augue. Donec pellentesque feugiat eros, et ultricies purus aliquet et. Integer iaculis dolor sit amet purus sagittis, non bibendum felis egestas...
          </p>
          <p className="open-close">
            Click here to read more...
          </p>
        </div>
      );
    } else {
      return (
        <div className="single-issue" onClick={this.makeSmall}>
          <p className="issue-header-big">
            Issue #
          </p>
          <p className="issue-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae ullamcorper eros, gravida posuere dui. Duis hendrerit lacus metus, non elementum augue pretium laoreet. Ut et dictum ipsum. Praesent commodo felis ut diam lacinia pharetra convallis a ex. Nam non ligula ut tortor convallis bibendum. Etiam molestie, ligula eu efficitur vehicula, purus lacus facilisis sem, nec lobortis odio nunc id augue. Donec pellentesque feugiat eros, et ultricies purus aliquet et. Integer iaculis dolor sit amet purus sagittis, non bibendum felis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae ullamcorper eros, gravida posuere dui. Duis hendrerit lacus metus, non elementum augue pretium laoreet. Ut et dictum ipsum. Praesent commodo felis ut diam lacinia pharetra convallis a ex. Nam non ligula ut tortor convallis bibendum. Etiam molestie, ligula eu efficitur vehicula, purus lacus facilisis sem, nec lobortis odio nunc id augue. Donec pellentesque feugiat eros, et ultricies purus aliquet et. Integer iaculis dolor sit amet purus sagittis, non bibendum felis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae ullamcorper eros, gravida posuere dui. Duis hendrerit lacus metus, non elementum augue pretium laoreet. Ut et dictum ipsum. Praesent commodo felis ut diam lacinia pharetra convallis a ex. Nam non ligula ut tortor convallis bibendum. Etiam molestie, ligula eu efficitur vehicula, purus lacus facilisis sem, nec lobortis odio nunc id augue. Donec pellentesque feugiat eros, et ultricies purus aliquet et. Integer iaculis dolor sit amet purus sagittis, non bibendum felis egestas.
          </p>
            <div className="issue-moreinfo">
              <div className="issue-info">
                <p className="issue-subheadings">
                  Argument Against
                </p>
                <p>
                  Duis hendrerit lacus metus, non elementum augue pretium laoreet. Ut et dictum ipsum. Praesent commodo felis ut diam lacinia pharetra convallis a ex. Nam non ligula ut tortor convallis bibendum. Etiam molestie, ligula eu efficitur vehicula, purus lacus facilisis sem, nec lobortis odio nunc id augue.
                </p>
              </div>
              <div className="issue-info">
                <p className="issue-subheadings">
                  The Facts
                </p>
                <ul>
                  <li>
                    Duis hendrerit lacus metus, non elementum augue pretium laoreet.
                  </li>
                  <li>
                    Ut et dictum ipsum.
                  </li>
                  <li>
                    Praesent commodo felis ut diam lacinia pharetra convallis a ex.
                  </li>
                  <li>
                    Nam non ligula ut tortor convallis bibendum.
                  </li>
                  <li>
                    Etiam molestie, ligula eu efficitur vehicula, purus lacus facilisis sem, nec lobortis odio nunc id augue.
                  </li>
                </ul>
              </div>
              <div className="issue-info">
                <p className="issue-subheadings">
                  Argument For
                </p>
                <p>
                  Duis hendrerit lacus metus, non elementum augue pretium laoreet. Ut et dictum ipsum. Praesent commodo felis ut diam lacinia pharetra convallis a ex. Nam non ligula ut tortor convallis bibendum. Etiam molestie, ligula eu efficitur vehicula, purus lacus facilisis sem, nec lobortis odio nunc id augue.
                </p>
              </div>
            </div>
          <p className="open-close">
            Click here to read less...
          </p>
        </div>
      );
    }
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
    // const { classes } = this.props;
    return (
      <div className="App">
        <div className="issue-body">
          <h3 className="page-header">
            What issues are important to you?
          </h3>
          <div className="issue-body-content">
            <Issue />
            <Issue />
            <Issue />
            <Issue />
          </div>
        </div >
      </div>
    );
  }
}

export default withStyles(styles)(VoterIssues);
