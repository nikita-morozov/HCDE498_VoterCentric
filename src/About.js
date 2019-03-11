import React, { Component } from 'react';
import './App.css';

class About extends Component {
  render() {
    return (
        <div className="App">
            <div className="issue-body">
                <h3 className="page-header">
                    Voting for Everyone
                </h3>
                <p className="about-text">
                    <strong>Voter</strong>centric was designed as an online voting platform for use in the United States, making both state and federal voting easier. Built on blockchain technology as a way to provide <strong>secure</strong> voting for users, this web-app ensures that everyone's vote counts (and never gets counted twice.) Furthermore, this system <strong>decreases the costs</strong> required by state and federal governments to hold votes by making the process of counting votes much more <strong>efficient</strong> due to it's inherent automation. Benefits of this automation include the possiblity of real-time results and visualization and <strong>accurate results</strong> the first time, without the possible need for recounting. 
                    <br/><br/><br/>
                    With our world rapidly changing, our voting system is becoming outdated, and it will only get worse. According to a survey we conducted, <strong>80%</strong> of participants ages 20-24 agreed that having the ability to vote online on federal and state ballots would increase their likelihood of voting. Here at Votercentric, we want to make it easier for their voice to be heard, as well as others struggling to get their vote in.
                </p>
            </div >
        </div>
    );
  }
}

export default (About);