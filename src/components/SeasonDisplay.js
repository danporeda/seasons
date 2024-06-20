import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: "It's really hot out here",
    iconName: 'sun'
  },
  winter: {
    text: "Ahh it's cold!",
    iconName: "snowflake"
  },
  noLocation: {
    text: "You didn't enable location!",
    iconName: "thumbs down"
  }
}

const getSeason = (lat, month) => {
  if (!lat) {
    return 'noLocation'
  } else
   if (month > 2 && month < 9) {
    return lat >= 0 ? 'summer' : 'winter'
  } else if (month < 2 || month > 8) {
    return lat >= 0 ? 'winter' : 'summer'
  } 
}

function SeasonDisplay({ lat }) {
  const season = getSeason(lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return <div className={`season-display ${season}`}>
    <i className={`icon-left massive ${iconName} icon`} />
    <h1>
      {text}
    </h1>
    <i className={`icon-right massive ${iconName} icon`} />
  </div>;
}

export default SeasonDisplay;