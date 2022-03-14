import { CityDetails, CityItem, MyPosition } from "components";
import { listCities } from "constants/city-list.data";
import { AxiosInstance, checkIfNight } from "helpers";
import React, { useEffect, useState } from "react";
import { CitiesContainer } from "./cities.style";

const Cities = () => {
  const [dataCities, setDataCities] = useState<any[]>([]);
  const [showDetails, setShowDetails] = useState(false);
  const [cityDetails, setCityDetails] = useState<any>(null);
  const [dataWeather, setDataWeather] = useState<any>(null);

  const getWeatherOfCities = async () => {
    const citiesWithTemp: any = [];
    for (const city of listCities) {
      await AxiosInstance.get("onecall", {
        params: {
          lon: city.lon,
          lat: city.lat,
          exclude: "minutely,alerts,hourly",
          units: "metric",
        },
      })
        .then((response: any) => {
          citiesWithTemp.push({
            ...city,
            image: checkIfNight(
              response?.current.dt + response?.timezone_offset - 3600
            )
              ? city.id + "-night"
              : city.id,
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
    }

    setDataCities([...citiesWithTemp]);
  };
  useEffect(() => {
    getWeatherOfCities();
  }, []);

  const showModal = (data) => {
    setCityDetails(data);
    setShowDetails(true);
  };

  return (
    <>
      <CitiesContainer>
        {dataCities.map((el, index) =>
          index !== 9 ? (
            <div
              key={index}
              className="city-container"
              onClick={() => showModal(el)}
            >
              <CityItem data={el} />
            </div>
          ) : (
            <div
              key={index}
              className="city-container"
              onClick={() => showModal(dataWeather)}
            >
              <MyPosition
                dataWeather={dataWeather}
                setDataWeather={setDataWeather}
              />
            </div>
          )
        )}
      </CitiesContainer>
      <CityDetails
        cityDetails={cityDetails}
        showDetails={showDetails}
        setShowDetails={setShowDetails}
      />
    </>
  );
};

export default Cities;
