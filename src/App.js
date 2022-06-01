import React, { useState, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';
import './App.css';
import Weather from './components/Weather';
import WeatherForm from './components/WeatherForm';

function App() {
  const [isFetched, setIsFetched] = useState(false)
  const [error, setError] = useState(null)
  const [city, setCity] = useState('Tartu')
  const [cityData, setCityData] = useState();

  const fetchWeatherHandler = useCallback(async () => {
    setIsFetched(false)
    setError(null)

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=afdc4f8bad1a71f008d1c53bb6d0cb56`)

      const data = await response.json();

      setCityData({
        name: city,
        temp: Math.round(parseFloat(data.main.temp) - 273.15),
        desc: data.weather[0].description
      });

    } catch (error) {
      setError(error.message)
    }
    
    setIsFetched(true)
  }, [city]);

  useEffect(() => {
    fetchWeatherHandler();
  }, [fetchWeatherHandler]);

  const changeCity = (newCity) => {
    setCity(newCity);
  }

  return (
    <React.Fragment>
      <Container className='col-3'>
        <Card className='text-center m-5 bg-dark bg-gradient text-white'>
          {isFetched && <Weather city={cityData}/>}
          <WeatherForm onChangeCity={changeCity} />
        </Card>
      </Container>
    </React.Fragment>
  );
}

export default App;