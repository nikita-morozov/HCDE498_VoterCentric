import React, { Component } from 'react';
import './App.css';
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import * as typeformEmbed from '@typeform/embed';

const styles = theme => ({
    App: {
        mt: 100
    },
    button: {
        margin: theme.spacing.unit,
    }
})

class Home extends Component {
    componentDidMount() {
        const popup = typeformEmbed.makePopup(
            'https://hcdefourninetyeight.typeform.com/to/iJenjE',
            {
                mode: 'popup',
                autoClose: '4000',
                hideHeaders: 'true',
                hideFooters: 'true',
            }

        )
        document.getElementById('pop-up').addEventListener('click', function() {
            popup.open();
        })
    }

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
                                id="pop-up"
                                color="primary"
                                variant="contained"
                                style={{ margin: 5, padding: 10, fontSize: "40px", fontWeight: "bold", color: "white" }}
                            >
                                Vote Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default withStyles(styles)(Home);