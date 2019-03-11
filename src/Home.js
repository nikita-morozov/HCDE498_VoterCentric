import React, { Component } from 'react';
import './App.css';
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    App: {
        mt: 100
    },
    button: {
        margin: theme.spacing.unit,
    }
})

class Home extends Component {
    render() {
        // const { classes } = this.props;
        return (
            <div className="App">
                <div className="parentContainer" styles="parentContainer">
                    <div className="containerMain">
                        <div className="img_main">
                            <div className="containerLabel">

                            </div>
                        </div>
                        <div className="CTA">
                            <Button
                                // component={""} 
                                // to='/voterissues'
                                color="primary"
                                style={{ margin: 5, padding: 10, position: "relative", fontSize: "40px", fontWeight: "bold",}}
                            >
                                Vote Now
                            </Button>
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