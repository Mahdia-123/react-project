import axios from "axios";
import React, { useState } from "react";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog,
} from "react-icons/wi";

export default function Weatherapp() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  const [unit, setUnit] = useState("celsius");

  function toggleToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function toggleToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertTemp(temp) {
    if (unit === "celsius") {
      return `${Math.round(temp)}`;
    } else {
      return `${Math.round((temp * 9) / 5 + 32)} `;
    }
  }
  function displayCity(response) {
    console.log(response.data);
    setLoaded(true);
    setWeather({
      name: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayCity);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function getWeatherIcon(description) {
    if (description.includes("clear"))
      return <WiDaySunny size={64} color="#f9d71c" />;
    if (description.includes("cloud"))
      return <WiCloud size={64} color="#ccc" />;
    if (description.includes("rain"))
      return <WiRain size={64} color="#76a5af" />;
    if (description.includes("snow"))
      return <WiSnow size={64} color="#b3e5fc" />;
    if (description.includes("thunder"))
      return <WiThunderstorm size={64} color="#ff9800" />;
    if (description.includes("fog") || description.includes("mist"))
      return <WiFog size={64} color="#aaa" />;
    return <WiDaySunny size={64} />;
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        onChange={updateCity}
        type="search"
        placeholder="Enter a City.."
        className="city-element"
      />
      <button type="submit" className="btn">
        Search
      </button>
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}

        <ul className="list">
          <li>City: {weather.name}</li>
          <li>
            Temperature: {convertTemp(weather.temperature)}{" "}
            <a href="/" onClick={toggleToCelsius}>
              °C
            </a>{" "}
            |{" "}
            <a href="/" onClick={toggleToFahrenheit}>
              °F
            </a>
          </li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>{getWeatherIcon(weather.description)}</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
