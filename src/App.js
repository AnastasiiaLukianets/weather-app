import React from 'react';
import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import { useState } from 'react';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  console.log(currentWeather);
  //console.log(forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}

export default App;

// function App() {

//   //const url = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=895284FB2D2C50A520EA537456963D9C`

//   return (
//     <div className="App">
//       <div className="container">
//         <div className="top">
//           <div className="location">
//             <p>Dallas</p>
//           </div>
//           <div className="temp">
//             <h1>30º C</h1>
//           </div>
//           <div className="DESCRIPTION">
//             <h1>SUNNY</h1>
//           </div>
//         </div>
//         <div className="bottom">
//           <div className="feels">
//             <p>35º C</p>
//           </div>
//           <div className="humidity">
//             <p>70 %</p>
//           </div>
//           <div className="wind">
//             12 km/h
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
/**********************************************************************/
// class App extends React.Component {
//   render() {
//     return <h1>Hello worlds!</h1>
//   }
// }
/**********************************************************************/
// class TestMyComponent extends React.Component {
//   render() {
//     return <h1>Hola amigos!</h1>
//   }
// }

/**********************************************************************/
//export default TestMyComponent;
