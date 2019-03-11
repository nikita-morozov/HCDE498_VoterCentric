import React, { Component } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader.js";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home.js";
import Statistics from "./Statistics.js";
import VoterIssues from "./VoterIssues.js";
import Transcripts from "./Transcripts.js";
import About from "./About.js";


class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    // const { classes } = this.props;
    return (
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div>
            <AppHeader />
            <Route exact path="/" component={Home} />
            <Route path="/statistics" component={Statistics} />
            <Route path="/voterissues" component={VoterIssues} />
            <Route path="/transcripts" component={Transcripts} />
            <Route path="/about" component={About} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
