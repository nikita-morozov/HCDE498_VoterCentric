import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link, withRouter } from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import MediaQuery from 'react-responsive';

const styles = theme => ({
  root: {
    width: "100%",
    boxShadow: "0 100px 100px 100px rgba(0, 0, 0, 0)",
    zIndex: "1",
    position: "static",
    opacity: ".8",
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -5,
    marginRight: 5
  }
});

class FadeMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <Button
          aria-owns={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
          style={{color: "white"}}
        >
          MENU
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={this.handleClose} component={Link} to="/">Home</MenuItem>
          <MenuItem onClick={this.handleClose} component={Link} to="/voterissues">Voter Issues</MenuItem>
          <MenuItem onClick={this.handleClose} component={Link} to="/statistics">Statistics</MenuItem>
          <MenuItem onClick={this.handleClose} component={Link} to="/about">About</MenuItem>
        </Menu>
      </div>
    );
  }
}

function ButtonAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar color="primary" styles="root">
        <Toolbar>
          <MediaQuery query="(min-width: 655px)">
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
              component={Link} to='/'
              color="inherit"
              style={{ margin: 5, padding: 10 }}
            >
              Home
            </Button>

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
              component={Link} to='/about'
              color="inherit"
              style={{ margin: 5, padding: 10 }}
            >
              About
            </Button>
          </MediaQuery>

          <MediaQuery query="(max-width: 655px)">
            <Typography
              onClick={() => {
                props.history.push("/");
              }}
              className={classes.title}
              variant="h4"
              color="inherit"
              style={{cursor: "pointer", padding: "10px", position: "absolute"}}
              noWrap
            >
              <strong>Voter</strong>centric
            </Typography>

            <div className={classes.grow} />

            <FadeMenu />
          </MediaQuery>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(withStyles(styles)(ButtonAppBar));
