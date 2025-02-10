import { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = "094b1cddc40a67c426c17b4f56de2b4d";

  const fetchWeather = async (e) => {
    e.preventDefault();

    if (!city) {
      alert("Please enter a city name.");
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found or API request failed");
      }

      const data = await response.json();
      setWeather(data.main);
      setError(null);
    } catch (error) {
      setWeather(null);
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-5">Weather App</h1>
      
      <form onSubmit={fetchWeather} className="flex space-x-3 mb-5">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {error && <p className="text-red-600 font-semibold">{error}</p>}

      {weather && (
        <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-gray-800 text-lg">
          <p className="font-bold text-xl">Weather in {city}</p>
          <p><strong>Temperature:</strong> {weather.temp}°C</p>
          <p><strong>Feels Like:</strong> {weather.feels_like}°C</p>
          <p><strong>Humidity:</strong> {weather.humidity}%</p>
          <p><strong>Pressure:</strong> {weather.pressure} hPa</p>
          {weather.grnd_level && <p><strong>Ground Level:</strong> {weather.grnd_level}</p>}
          {weather.sea_level && <p><strong>Sea Level:</strong> {weather.sea_level}</p>}
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
