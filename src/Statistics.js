import React, { Component } from "react"
// import ReactDOM from "react-dom"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';
import Button from "@material-ui/core/Button";
import map2012 from "./states2012.json";
import map2008 from "./states2008.json";
import map2004 from "./states2004.json";
import map2000 from "./states2000.json";
import map1996 from "./states1996.json";
import map1992 from "./states1992.json";
import map1988 from "./states1988.json";
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
  grow: {
    flexGrow: 1
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
  constructor() {
    super()

    this.state = {
      value: 1988,
      zoom: 3,
    };

    this.handleZoomIn = this.handleZoomIn.bind(this);
    this.handleZoomOut = this.handleZoomOut.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event, value) => {
    this.setState({ value });
    //console.log(value)
  };

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

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    // This is very interesting

    var version = [];
    // if (value === 1988) {
    version.push(<ComposableMap style={{ width: value === 1988 ? "100%": 0 }}>
      <ZoomableGroup center={[-122, 48]} zoom={this.state.zoom}>
        <Geographies geography={map1988}>
          {(geographies, projection) => geographies.map(geography => (
            <Geography
              key={geography.properties.ID_1}
              geography={geography}
              projection={projection}
              style={{
                default: {
                  fill: geography.properties.color,
                  stroke: "#607D8B",
                  strokeWidth: 0.1,
                  outline: "none",
                },
                hover: {
                  outline: "none",
                },
                pressed: {
                  outline: "none"
                }
              }}
            />
          ))}
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>);
    // } else if (value === 1992) {
    version.push(<ComposableMap style={{ width: value === 1992 ? "100%": 0 }}>
      <ZoomableGroup center={[-122, 48]} zoom={this.state.zoom}>
        <Geographies geography={map1992}>
          {(geographies, projection) => geographies.map(geography => (
            <Geography
              key={geography.properties.ID_1}
              geography={geography}
              projection={projection}
              style={{
                default: {
                  fill: geography.properties.color,
                  stroke: "#607D8B",
                  strokeWidth: 0.1,
                  outline: "none",
                },
                hover: {
                  outline: "none",
                },
                pressed: {
                  outline: "none"
                }
              }}
            />
          ))}
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>);
    // } else if (value === 1996) {
    version.push(<ComposableMap style={{ width: value === 1996 ? "100%": 0 }}>
      <ZoomableGroup center={[-122, 48]} zoom={this.state.zoom}>
        <Geographies geography={map1996}>
          {(geographies, projection) => geographies.map(geography => (
            <Geography
              key={geography.properties.ID_1}
              geography={geography}
              projection={projection}
              style={{
                default: {
                  fill: geography.properties.color,
                  stroke: "#607D8B",
                  strokeWidth: 0.1,
                  outline: "none",
                },
                hover: {
                  outline: "none",
                },
                pressed: {
                  outline: "none"
                }
              }}
            />
          ))}
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>);
    // } else if (value === 2000) {
    version.push(<ComposableMap style={{ width: value === 2000 ? "100%": 0 }}>
      <ZoomableGroup center={[-122, 48]} zoom={this.state.zoom}>
        <Geographies geography={map2000}>
          {(geographies, projection) => geographies.map(geography => (
            <Geography
              key={geography.properties.ID_1}
              geography={geography}
              projection={projection}
              style={{
                default: {
                  fill: geography.properties.color,
                  stroke: "#607D8B",
                  strokeWidth: 0.1,
                  outline: "none",
                },
                hover: {
                  outline: "none",
                },
                pressed: {
                  outline: "none"
                }
              }}
            />
          ))}
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>);
    // } else if (value === 2004) {
    version.push(<ComposableMap style={{ width: value === 2004 ? "100%": 0 }}>
      <ZoomableGroup center={[-122, 48]} zoom={this.state.zoom}>
        <Geographies geography={map2004}>
          {(geographies, projection) => geographies.map(geography => (
            <Geography
              key={geography.properties.ID_1}
              geography={geography}
              projection={projection}
              style={{
                default: {
                  fill: geography.properties.color,
                  stroke: "#607D8B",
                  strokeWidth: 0.1,
                  outline: "none",
                },
                hover: {
                  outline: "none",
                },
                pressed: {
                  outline: "none"
                }
              }}
            />
          ))}
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>);
    // } else if (value === 2008) {
    version.push(<ComposableMap style={{ width: value === 2008 ? "100%": 0 }}>
      <ZoomableGroup center={[-122, 48]} zoom={this.state.zoom}>
        <Geographies geography={map2008}>
          {(geographies, projection) => geographies.map(geography => (
            <Geography
              key={geography.properties.ID_1}
              geography={geography}
              projection={projection}
              style={{
                default: {
                  fill: geography.properties.color,
                  stroke: "#607D8B",
                  strokeWidth: 0.1,
                  outline: "none",
                },
                hover: {
                  outline: "none",
                },
                pressed: {
                  outline: "none"
                }
              }}
            />
          ))}
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>);
    // } else if (value === 2012) {
    version.push(<ComposableMap style={{ width: value === 2012 ? "100%": 0 }}>
      <ZoomableGroup center={[-122, 48]} zoom={this.state.zoom}>
        <Geographies geography={map2012}>
          {(geographies, projection) => geographies.map(geography => (
            <Geography
              key={geography.properties.ID_1}
              geography={geography}
              projection={projection}
              style={{
                default: {
                  fill: geography.properties.color,
                  stroke: "#607D8B",
                  strokeWidth: 0.1,
                  outline: "none",
                },
                hover: {
                  outline: "none",
                },
                pressed: {
                  outline: "none"
                }
              }}
            />
          ))}
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>);
    // }

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
            <h3>{this.state.value}</h3>
            {/* This is very interesting */}
          </div>
        </div >

        <div style={wrapperStyles}>
          <Button onClick={this.handleZoomOut}
            color="primary"
            style={{ margin: 5, padding: 10 }}
          >
            {"Zoom out"}
          </Button>
          <Button onClick={this.handleZoomIn}
            color="primary"
            style={{ margin: 5, padding: 10 }}
          >
            {"Zoom in"}
          </Button>
          <hr />
          {version}
        </div>
      </div>
    )
  }
}

Statistics.propTypes = {
  classes: PropTypes.object.isRequired,
};

// document.addEventListener("DOMContentLoaded", () => {
//   ReactDOM.render(<Statistics />, document.getElementById("app"))
// })

export default withStyles(styles)(Statistics);
