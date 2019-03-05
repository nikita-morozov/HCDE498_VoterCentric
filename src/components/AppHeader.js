import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from '../App.js';
import VoterIssues from '../VoterIssues.js';
import Statistics from '../Statistics.js';

const styles = theme => ({
    root: {
      width: '100%',
      boxShadow: '0 100px 100px 100px rgba(0, 0, 0, 0)',
      zIndex:'100',
      position: 'relative'
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
  });
  
  function ButtonAppBar(props) {
    const { classes } = props;
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className={classes.root}>
          <AppBar color="primary" styles="root">
            <Toolbar>
              <Typography onClick={() => {this.props.router.push('/')}} className={classes.title} variant="h6" color="inherit" noWrap>
                VoterCentric
              </Typography>
              <div className={classes.grow} />
              <Button onClick={()=>{}} color="inherit" style={{margin: 10, padding: 10}}><Link to="/voterissues">Voter Issues</Link></Button>
              <Button onClick={()=>{}} color="inherit" style={{margin: 10, padding: 10}}><Link to="/statistics">Statistics</Link></Button>
              <Button onClick={()=>{}} color="inherit" style={{margin: 10, padding: 10}}><Link to="/transcripts">Transcripts</Link></Button>
            </Toolbar>
          </AppBar>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/statistics" component={Statistics} />
        <Route path="/voterissues" component={VoterIssues} />
        <Route path="/transcripts" component={VoterIssues} />
      </BrowserRouter>
    );
  }
  
  AppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ButtonAppBar);
