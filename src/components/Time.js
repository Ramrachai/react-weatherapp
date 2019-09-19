import React, { Component } from "react";

export default class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString()
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);

    this.setState({
      date: new Date().toLocaleDateString()
    });
  }

  render() {
    return (
      <div>
        <p>Time: {this.state.time}</p>
        <p>Date: {this.state.date}</p>
      </div>
    );
  }
}
