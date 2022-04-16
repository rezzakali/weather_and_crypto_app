import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";
import "../App.css";

function WithWeatherInfo(props) {
  const { weather } = props;
  const sunriseTimeStamp = weather.sys.sunrise;
  const date = new Date(sunriseTimeStamp);

  const sunsetTimeStamp = weather.sys.sunset;
  const sunsetDate = new Date(sunsetTimeStamp);

  const visibility = weather.visibility;
  const visible = visibility / 1000;

  return (
    <div className="container shadow-lg p-4" id="Maincontainer">
      <div className="row" style={{ float: "right" }}>
        <h4>
          <LocationOnIcon /> {`${weather?.name},${weather?.sys.country}`}
        </h4>
      </div>
      <br />
      <br />
      <div className="row text-center">
        <h1>Temparature : {`${Math.floor(weather.main.temp - 273)} °c`}</h1>
        <h3>
          <i className="bx bxl-soundcloud" style={{ fontSize: "25px" }}></i>
          {`${weather.clouds.all} °c`} |
          <span>{`${weather.weather[0].description}`}</span>
        </h3>
      </div>
      <br />
      <br />
      <div className="row">
        <div
          id="measure"
          className="col-sm text-center"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <h5> Wind- {`${weather.wind.speed} km/h`} </h5>

          <h5> Humidity- {`${weather.main.humidity} %`} </h5>

          <h5> Visibility- {`${visible} km`}</h5>
        </div>
      </div>
    </div>
  );
}

export default WithWeatherInfo;
