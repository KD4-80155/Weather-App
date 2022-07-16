import React, { useEffect, useState } from "react";

const WeatherDetails = ({
  temp,
  pressure,
  weatherType,
  humidity,
  name,
  speed,
  country,
  sunset,
}) => {
  const [weatherState, setWeatherState] = useState("");

  useEffect(() => {
    if (weatherType) {
      switch (weatherType) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;
        case "Rain":
          setWeatherState("wi-day-rain");
          break;
        case "Thunderstorm":
         setWeatherState("wi-day-thunderstorm");
         break;
        default:
          setWeatherState("wi-day-sunny");
      }
    }
  }, [weatherType]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
      <article className="widget">
        <div className="weather-icon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weather-info">
          <div className="temperature">
            <span>{temp}°</span>
          </div>
          <div className="description">
            <div className="weather-condition">{weatherType}</div>
            <div className="location">
              {name},{country}
            </div>
          </div>
          <div className="date">{new Date().toLocaleDateString()}</div>
        </div>

        <div className="extra-temp">
          <div className="temp-info-minimax">
            <div className="two-sided-section">
              <p>
                <i className="wi wi-sunset"></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} Pm
                <br />
                sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i class="wi wi-humidity"></i>
              </p>
              <p className="extra-info-leftside">
                {humidity}
                <br />
                Humidity
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className="wi wi-rain"></i>
              </p>
              <p className="extra-info-leftside">
                {pressure}
                <br />
                Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className="wi wi-strong-wind"></i>
              </p>
              <p className="extra-info-leftside">
                {speed}
                <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherDetails;
