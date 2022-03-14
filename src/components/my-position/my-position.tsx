import React, { useEffect, useState } from "react";
import { City } from "components/city-item/city-item.style";
import { AxiosInstance, checkIfNight, getTime, tempTransformer } from "helpers";

const MyPosition = ({ dataWeather, setDataWeather }) => {
  const [position, setPosition] = useState<any>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      getDataWeather(position.coords.latitude, position.coords.longitude);
    });
    setReady(true);
  }, []);

  const getDataWeather = async (lat, lng) => {
    await AxiosInstance.get("onecall", {
      params: {
        lat: lat,
        lon: lng,
        exclude: "minutely,alerts,hourly",
        units: "metric",
      },
    })
      .then((response: any) => {
        setDataWeather({
          id: "my-position",
          country: "My position",
          city: "GPS",
          image: checkIfNight(
            response?.current.dt + response?.timezone_offset - 360
          )
            ? "my-position-night"
            : "my-position",
          current: {
            ...response.current,
            time: response?.current.dt + response?.timezone_offset - 3600,
          },
          weak: response.daily,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {ready ? (
        position ? (
          <City
            image={
              dataWeather && dataWeather.image
                ? dataWeather.image
                : "my-position"
            }
          >
            <div className="city">
              {dataWeather?.country}, {dataWeather?.city}
            </div>
            <div className="weather-image">
              <img
                src={`http://openweathermap.org/img/wn/${dataWeather?.current?.weather[0].icon}@2x.png`}
                alt={dataWeather?.current?.weather[0].icon}
              />
            </div>
            <div className="temperature">
              {tempTransformer(dataWeather?.current?.temp)} °C
            </div>
            <div className="time">{getTime(dataWeather?.current?.time)}</div>
          </City>
        ) : (
          <City>
            <h1>Please activate gps</h1>
          </City>
        )
      ) : (
        <h1> loading ...</h1>
      )}
    </>
  );
};

export default MyPosition;
