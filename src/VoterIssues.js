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
            Initiative Measure No. 1577 concerns state taxes.
          </p>
          <p className="issue-paragraph">
            This measure would provide that tax increases imposed by the legislature must expire one year after taking effect if not approved by a majority of voters after the tax is referred to voters by the legislature. It would provide that tax increases imposed in 2018 without voter approval must terminate upon the effective date of the measure. It prohibits the State from collecting revenue from any tax increase that is terminated by this measure.          </p>
          <p className="open-close">
            Click here to read more...
          </p>
        </div>
      );
    } else {
      return (
        <div className="single-issue" onClick={this.makeSmall}>
          <p className="issue-header-big">
            Initiative Measure No. 1577 concerns state taxes.
          </p>
          <p className="issue-paragraph">
            The people want to ensure short-term and long-term protection from state tax increases for individuals, families, businesses, and our state’s economy.
  The people find that accountability and effectiveness are important aspects of setting tax policy. In order to make policy choices, the legislature needs information and public feedback to evaluate whether the continuation of recently enacted tax increases is in the public interest. This measure concerns taxes imposed by state government. This measure requires tax increases imposed by the legislature and not approved by voters to expire one year after taking effect and terminates any increase imposed in 2018 unless approved by voters at an election.
The people want to ensure that tax increases are consistently a last resort.          </p>
          <div className="issue-moreinfo">
            <div className="issue-info">
              <p className="issue-subheadings">
                Argument Against
                </p>
              <p>
                The provisions of this act are to be
  liberally construed to effectuate the intent, policies, and purposes
of this act.                </p>
            </div>
            <div className="issue-info">
              <p className="issue-subheadings">
                The Facts
                </p>
              <ul>
                <li>
                  If any provision of this act or its
  application to any person or circumstance is held invalid, the
  remainder of the act or the application of the provision to other
  persons or circumstances is not affected.
                  </li>
                <li>
                  This act is known and may be cited as the
“Let The Voters Decide On Tax Increases.”                  </li>
                <li>
                  The ballot title for any vote of the people required under
  this section must be substantially as follows:
  "Shall taxes be imposed on . . . . . . . in order to allow a
  spending increase above last year's authorized spending adjusted for
personal income growth?"                  </li>
              </ul>
            </div>
            <div className="issue-info">
              <p className="issue-subheadings">
                Argument For
                </p>
              <p>
                RCW 43.135.033 (“Raises taxes” defined) and 2016 c 1 s
  6 (Initiative Measure No. 1366, approved November 3, 2015) are each
  amended to read as follows:
  For the purposes of this chapter, "raises taxes" or “tax
  increase” means any action or combination of actions by the state
  legislature that increases state tax revenue deposited in any fund,
  budget, or account, regardless of whether the revenues are deposited
into the general fund.                </p>
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
