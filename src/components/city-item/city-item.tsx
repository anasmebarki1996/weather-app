import { getTime, tempTransformer } from "helpers";
import React from "react";
import { City } from "./city-item.style";

const CityItem = ({ data }) => {
  return (
    <City image={data.image}>
      <div className="city">
        {data.country}, {data.city}
      </div>
      <div className="weather-image">
        <img
          src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}
          alt={data.current.weather[0].icon}
        />
      </div>
      <div className="temperature">{tempTransformer(data.current.temp)} °C</div>
      <div className="time">{getTime(data.current.time)}</div>
    </City>
  );
};

export default CityItem;
