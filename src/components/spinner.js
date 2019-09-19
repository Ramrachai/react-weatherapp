import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
export default class spinner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <CircularProgress color="secondary" />
        <p> {this.props.message}</p>
      </React.Fragment>
    );
  }
}

spinner.defaultProps = {
  message: "Loading..."
};
