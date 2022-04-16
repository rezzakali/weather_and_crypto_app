import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";
import WithoutInfo from "./WithoutInfo";
import WithWeatherInfo from "./WithWeatherInfo";

function Whether() {
  const [location, setLocation] = useState("London");
  const [weather, setWeather] = useState();

  const [date, setDate] = useState(new Date());

  const API_key = "3292f0c62cf744844222cca4725274a1";

  const getWeather = async () => {
    try {
      const info = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_key}`
      );
      setWeather(info.data);
    } catch (error) {
      alert("Please enter your city name.");
    }
  };

  const fetchWeather = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const id = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="container mt-4">
      <h1>Current Weather API</h1>
      <h5>{`${date.toLocaleTimeString()}`}</h5>
      <br />
      <br />
      <form onSubmit={fetchWeather}>
        <div className="mb-3">
          <input
            type="search"
            className="form-control"
            name="search"
            id="search"
            value={location}
            aria-describedby="helpId"
            placeholder="Enter your city name..."
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          />
        </div>
        <Button variant="contained" type="submit" onClick={getWeather}>
          Submit
        </Button>
      </form>
      <br />
      {weather ? <WithWeatherInfo weather={weather} /> : <WithoutInfo />}
    </div>
  );
}

export default Whether;
