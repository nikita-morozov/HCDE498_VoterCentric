import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link, withRouter } from "react-router-dom";

const styles = theme => ({
  root: {
    width: "100%",
    boxShadow: "0 100px 100px 100px rgba(0, 0, 0, 0)",
    zIndex: "100",
    position: "static",
    opacity: ".6"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -5,
    marginRight: 5
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  }
});

function ButtonAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar color="default" styles="root">
        <Toolbar>
          <Typography
            onClick={() => {
              props.history.push("/");
            }}
            className={classes.title}
            variant="h4"
            color="inherit"
            style={{cursor: "pointer", padding: "10px"}}
            noWrap
          >
            <strong>Voter</strong>centric
          </Typography>

          <div className={classes.grow} />

          <Button
            component={Link} to='/voterissues'
            color="inherit"
            style={{ margin: 5, padding: 10 }}
          >
            Voter Issues
          </Button>

          <Button
            component={Link} to='/statistics'
            color="inherit"
            style={{ margin: 5, padding: 10 }}
          >
            Statistics
          </Button>
          
          <Button
            component={Link} to='/transcripts'
            color="inherit"
            style={{ margin: 5, padding: 10 }}
          >
            Transcripts
          </Button>

          <Button
            component={Link} to='/about'
            color="inherit"
            style={{ margin: 5, padding: 10 }}
          >
            About
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(withStyles(styles)(ButtonAppBar));
