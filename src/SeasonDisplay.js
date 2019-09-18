import React from "react";

// determine season

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const SeasonDisplay = props => {
  let seasonText;
  const season = getSeason(props.lat, new Date().getMonth());
  if (season === "summer") {
    seasonText = "Summer season , Sunny Day";
  } else {
    seasonText = "Winter Season, Cold day";
  }
  return <div>{seasonText}</div>;
};

export default SeasonDisplay;
