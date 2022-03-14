import { getDay, getTime, tempTransformer } from "helpers";
import React, { useEffect, useState } from "react";
import { CityDetailsContainer } from "./city-details.style";
import { FaMapSigns } from "react-icons/fa";
import Map from "components/map/map";

const CityDetails = ({ cityDetails, showDetails, setShowDetails }) => {
  const [typeNumber, setTypeNumber] = useState(1);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (showDetails) {
      setTypeNumber(Math.floor(Math.random() * 8) + 1);
    }
  }, [showDetails]);

  return (
    <CityDetailsContainer
      className={
        showDetails && cityDetails
          ? "active type-" + typeNumber
          : "type-" + typeNumber
      }
      image={cityDetails?.image}
    >
      {showDetails && cityDetails && (
        <>
          <Map
            showMap={showMap}
            position={{ lat: cityDetails.lat, lng: cityDetails.lon }}
          />
          <div className="container">
            <div className="header-container">
              <div className="map-button" onClick={() => setShowMap(!showMap)}>
                <FaMapSigns />
              </div>
              <div
                className="exit-button"
                onClick={() => setShowDetails(false)}
              >
                X
              </div>
            </div>

            <div className="content">
              <div className="city-name">
                {cityDetails.country}, {cityDetails.city}
              </div>
              <div className="weather">
                <div> {tempTransformer(cityDetails.current.temp)} °C</div>
                <img
                  src={`http://openweathermap.org/img/wn/${cityDetails.current.weather[0].icon}@4x.png`}
                  alt={cityDetails.current.weather[0].icon}
                />
                <div>{getTime(cityDetails.current.time)}</div>
              </div>
            </div>

            <div className="week-weather-container">
              {cityDetails.weak.map((el) => (
                <div className="week-item">
                  <div> {tempTransformer(el.temp.day)} °C</div>
                  <img
                    src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}
                    alt={el.weather[0].icon}
                  />
                  <div>{getDay(el.dt)}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </CityDetailsContainer>
  );
};

export default CityDetails;
