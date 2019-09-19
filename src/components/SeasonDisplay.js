import React from "react";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import Time from "./Time";
// determine season according to geolocation and month
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

//change icon and text according to season
const seasonConfig = {
  summer: {
    seasonText: "Summer season, Sunny day",
    iconName: <Brightness5Icon />
  },
  winter: {
    seasonText: "Winter Season, Cold day",
    iconName: <AcUnitIcon />
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { seasonText, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`${season} topSeasonIcon `}> {iconName} </i>
      <div className={`${season} center`}>
        <Time />
        <h1 className="seasonText">{seasonText} </h1>
      </div>
      <i className={`${season} bottomSeasonIcon `}> {iconName} </i>
    </div>
  );
};

export default SeasonDisplay;
