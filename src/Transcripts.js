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

class Transcripts extends Component {
    render() {
        return (
            <div className="App">
                <div className="parentContainer">
                    <div className="containerMain">
                        <p className="reachnotice">THIS PAGE IS A REACH GOAL</p>
                    </div>
                    <div className="containerMain">
                        <p className="reachnotice">THIS PAGE IS A REACH GOAL</p>
                    </div>
                </div>
            </div >
        );
    }
}

export default withStyles(styles)(Transcripts);