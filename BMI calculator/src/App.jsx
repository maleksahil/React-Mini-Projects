import React, { useState } from 'react';

const App = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert('Please enter valid weight and height');
      return;
    }

    let bmiValue = (weight / (height * height)) * 703;
    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) {
      setMessage('You are underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage('You have a healthy weight');
    } else {
      setMessage('You are overweight');
    }
  };

  const reload = () => {
    setWeight(0);
    setHeight(0);
    setBmi('');
    setMessage('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">BMI Calculator</h2>
        <form onSubmit={calcBmi} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Weight (lbs)</label>
            <input
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="number"
              placeholder="Enter your weight"
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Height (in)</label>
            <input
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="number"
              placeholder="Enter your height"
              onChange={(e) => setHeight(e.target.value)}
              value={height}
            />
          </div>

          <div className="flex justify-between">
            <button
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
              type="submit"
            >
              Submit
            </button>
            <button
              className="w-full ml-2 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition"
              onClick={reload}
              type="button"
            >
              Reset
            </button>
          </div>
        </form>

        {bmi && (
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold">Your BMI is: {bmi}</h3>
            <p className="text-gray-700 font-medium">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
