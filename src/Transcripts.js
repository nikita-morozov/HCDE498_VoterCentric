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
                <div className="parentContainer" styles="parentContainer">
                    <div className="containerMain">
                    </div>
                </div>
                <div className="Body">
                    <div className="parentContainer" styles="parentContainer">
                        <div className="containerMain">
                            <h1>TEST TEXT</h1>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default withStyles(styles)(Transcripts);