import React, { Component } from "react"
import ReactDOM from "react-dom"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';
//import Button from "@material-ui/core/Button";
import Map from "./states.json";
import './App.css';
import { relative } from "path";

const styles = theme => ({
  root: {
    paddingLeft: 300,
    width: 400,
    position: relative,
  },
  slider: {
    padding: '32px 0px',
  },
  button: {
    margin: theme.spacing.unit,
  },
})

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
  border: '1px solid black',
}

const sliderWrap = {
  width: 500,
  margin: "0 auto",
  padding: 0,
}

class Statistics extends Component {
  state = {
    value: 3,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  constructor() {
    super()

    this.state = {
      zoom: 3,
    }

    this.handleZoomIn = this.handleZoomIn.bind(this)
    this.handleZoomOut = this.handleZoomOut.bind(this)
  }
  handleZoomIn() {
    this.setState({
      zoom: this.state.zoom * 2,
    })
  }
  handleZoomOut() {
    this.setState({
      zoom: this.state.zoom / 2,
    })
  }

  colorSelect(state,year) {
    
    return 
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (

      <div>
        <div className="issue-body">
          <h3 className="page-header">
            State Partisanship
          </h3>
          <p className="about-text">
            <strong>Voter</strong>centric monitors all Presidential elections and extrapolates voter trends by state.
                    <br /><br />
            Use the slider to see state partisanship every 4 years.
                </p>
          <div style={sliderWrap} className={classes.root}>
            <Slider
              classes={{ container: classes.slider }}
              value={value}
              min={1988}
              max={2012}
              step={4}
              onChange={this.handleChange}
            />
          </div>
        </div >

        <div style={wrapperStyles}>
          <button onClick={this.handleZoomIn}>{"Zoom in"}</button>
          <button onClick={this.handleZoomOut}>{"Zoom out"}</button>
          <hr />
          <ComposableMap style={{width: "100%" }}>
            <ZoomableGroup center={[-122, 48]} zoom={this.state.zoom}>
              <Geographies geography={Map}>
                {(geographies, projection) => geographies.map(geography => (
                  <Geography
                    key={geography.id}
                    geography={geography}
                    projection={projection}
                    style={{
                      default: {
                        fill: geography.properties.color,
                        stroke: "#607D8B",
                        strokeWidth: 0.1,
                        outline: "none",
                      }
                    }}
                  />
                ))}
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </div>
    )
  }
}

Statistics.propTypes = {
  classes: PropTypes.object.isRequired,
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Statistics />, document.getElementById("app"))
})

export default withStyles(styles)(Statistics);
