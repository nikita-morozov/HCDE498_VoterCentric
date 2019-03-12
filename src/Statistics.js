import React, { Component } from "react"
import ReactDOM from "react-dom"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"
import Map from "./10mUS.json";


class Statistics extends Component {
  constructor() {
    super()

    this.state = {
      zoom: 1,
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
  render() {
    return(
      <div>
        <button onClick={ this.handleZoomIn }>{ "Zoom in" }</button>
        <button onClick={ this.handleZoomOut }>{ "Zoom out" }</button>
        <hr />
        <ComposableMap>
          <ZoomableGroup zoom={ this.state.zoom }>
          <Geographies geography={Map}>
            {(geographies, projection) => geographies.map(geography => ( 
              <Geography
                key={ geography.id }
                geography={ geography }
                projection={ projection }
                />
            ))}
          </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Statistics />, document.getElementById("app"))
})

export default Statistics;
