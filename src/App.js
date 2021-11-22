import React, { useState } from 'react';
import SearchBar from './components/searchBar/SearchBar';
import TabBarMenu from './components/tabBarMenu/TabBarMenu';
import MetricSlider from './components/metricSlider/MetricSlider';
import axios from 'axios';
import './App.css';

function App() {
  const apiKey = 'placeyourkeyhere';
  const [ weatherData, setWeatherData ] = useState({});
  const [ userLocation, setUserLocation ] = useState('steenwijk')

  async function fetchWeatherData() {
    try {
      const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=steenwijk,nl&appid=${apiKey}&lang=nl`);
      console.log(result.data);
      setWeatherData(result.data);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <div className="weather-container">

        {/*HEADER -------------------- */}
        <div className="weather-header">
          <SearchBar setLocationHandler={setUserLocation}/>

          <span className="location-details">
                <span className="location-details">
                  {Object.keys(weatherData).length > 0 &&
                    <>
                      <h2>{weatherData.weather[0].description}</h2>
                      <h3>{weatherData.name}</h3>
                      <h1>{weatherData.main.temp}</h1>
                    </>
                  }
                  <button
                      type="button"
                      onClick={fetchWeatherData}
                  >
                    Haal data op!
                  </button>
                </span>
          </span>
        </div>

        {/*CONTENT ------------------ */}
        <div className="weather-content">
          <TabBarMenu/>

          <div className="tab-wrapper">
            Alle inhoud van de tabbladen komt hier!
          </div>
        </div>

        <MetricSlider/>
      </div>
    </>
  );
}

export default App;
