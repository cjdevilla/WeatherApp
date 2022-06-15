import React, { useState } from "react";
import axios from "axios";

function App() {
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=e3f55693f92ecd1fa0081ad7f8b10a38`;

  return (
    <div className="app">
      <div className="container"></div>
      <div className="top">
        <div className="location">
          <p>Dallas</p>
        </div>
        <div className="temp">
          <h1>65F</h1>
        </div>
        <div className="description">
          <p>Clouds</p>
        </div>
      </div>
      <div className="bottom">
        <div className="feels">
          <p className="bold">60F</p>
          <p>Feels Like</p>
        </div>
        <div className="humidity">
          <p>Humidity</p>
        </div>
        <div className="wind">
          <p className="bold">12 MPH</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
}

export default App;
