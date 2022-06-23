import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [searchedCity, setSearchedCity] = useState("");
  const [cityName, setCityName] = useState("");
  const [temperature, setTemperature] = useState("");
  const [wind, setWind] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const getCountries = async () => {
      const request = await fetch(
        "https://goweather.herokuapp.com/weather/" + cityName );
      const data = await request.json();
      setTemperature(data.temperature);
      setWind(data.wind);
      setDescription(data.description);
      setSearchedCity(cityName);
    };
    getCountries();
  }, [cityName]);

  return (
    <>
      <div className="container">
        <h1 className="text-center">Weather React API</h1>
      </div>
      <div className="input-group mt-3">
        <input
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          className="form-control"
          placeholder="City name"
        />
        <h3 className="text-center mt-3 w-100">The City is: {searchedCity}</h3>
        <h3 className="text-center mt-3 w-100">The temperature of {searchedCity} is: {temperature} </h3>
        <h3 className="text-center mt-3 w-100">The wind of {searchedCity} is: {wind} </h3>
        <h3 className="text-center mt-3 w-100">The description of {searchedCity} is: {description} </h3>
      </div>
    </>
  );
};

export default App;
