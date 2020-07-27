import React from "react";
import Cities from "./city-weather";

function CityCard() {
  return (
    <div class="container">
      {Cities.map((city) => (
        <City city={city} key={city.id} />
      ))}
    </div>
  );
}

function City({ city }) {
  //object destructuring
  const {
    name,
    weather: [{ main, description }],
    sys: { country },
    main: { temp_max, temp_min },
    coord: { lat, lon },
  } = city;
  return (
    <div class="cityCard">
      <h2>
        {name}, {country}
      </h2>
      <div>
        <h3> {main}</h3>
        <span>{description}</span>
      </div>
      <div>
        <p>min temp : {Math.round((temp_min - 273.15) * 100) / 100}</p>
        <p>max temp : {Math.round((temp_max - 273.15) * 100) / 100}</p>
        <p>
          location : {lat} {lon}
        </p>
      </div>
    </div>
  );
}

export default CityCard;
