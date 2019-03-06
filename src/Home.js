import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    parentContainer: {
        mt: 100
    },
    button: {
        margin: theme.spacing.unit,
    }
})

class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="App">
                <div className="parentContainer" styles="parentContainer">
                    <div className="containerMain">
                        <div className="img_main">
                            <div className="containerLabel">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="Body">
                </div>
            </div >
        );
    }
}

export default withStyles(styles)(Home);