import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/spinner";

import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      errorMessage: ""
    };
  }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  contentRender() {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <div> Error: {this.state.errorMessage}</div>;
    }
    return (
      <div className="loadingIcon">
        <Spinner message="Please accept location request to get weather information" />
      </div>
    );
  }
  render() {
    return <div className="wrapper">{this.contentRender()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
