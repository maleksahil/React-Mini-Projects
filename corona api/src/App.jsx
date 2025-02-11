import React, { useState } from "react";

const CovidData = () => {
  const [country, setCountry] = useState("");
  const [totalCases, setTotalCases] = useState("N/A");
  const [error, setError] = useState(null);

  const apiKey = "S70um7ng1x1J4cHb/H0i1w==2jlik8kDLlAnz1Yy";

  const fetchCovidData = async () => {
    if (!country.trim()) {
      setError("Please enter a country name");
      setTotalCases("N/A");
      return;
    }

    const url = `https://api.api-ninjas.com/v1/covid19?country=${country}`;
    const options = {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
      },
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error("Country not found or failed to fetch data");
      }

      const data = await response.json();

      if (data && data.length > 0) {
        const countryData = data[0];
        const cases = countryData.cases;

        // Get the most recent date (last key in the cases object)
        const dates = Object.keys(cases);
        const latestDate = dates[dates.length - 1];
        const totalCases = cases[latestDate].total;

        setTotalCases(totalCases || "Data not available");
        setError(null); // Clear any previous errors
      } else {
        setTotalCases("N/A");
        setError("No data available for this country");
      }
    } catch (err) {
      setTotalCases("N/A");
      setError(`Error: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center font-sans">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">COVID-19 Total Cases</h1>

      <div className="flex items-center mb-6">
        <input
          type="text"
          placeholder="Enter country name"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="px-4 py-2 rounded-l-lg border-2 border-gray-300 focus:outline-none focus:border-blue-400 text-lg"
        />
        <button
          onClick={fetchCovidData}
          className="bg-pink-400 hover:bg-pink-300 text-white px-6 py-2 rounded-r-lg border-2 border-pink-400 transition-all duration-300"
        >
        search
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-xl mb-6 w-64 text-center">
        <h2 className="text-xl text-gray-700">
          Total Cases: <span className="font-semibold">{totalCases}</span>
        </h2>
      </div>

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default CovidData;
