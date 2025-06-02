import "./App.css";
import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ParticleBackground from "./components/ParticleBackground";

const Home = lazy(() => import("./pages/Home/home"));
const Forecast = lazy(() => import("./pages/Forecast/forecast"));

function App() {
  return (
    <>
      <ParticleBackground />
      <div className="App">
        <section className="vh-100">
          <Router>
            <Suspense
              fallback={
                <div className="spinner-container">
                  <div className="spinner"></div>
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/result" element={<Forecast />} />
              </Routes>
              <footer>
                <a className="credits" href="https://github.com/binay-tripathy">
                  Made with 🤍 by Binay Tripathy
                </a>
                <a href="https://www.weatherapi.com/" title="Free Weather API" className="weather-api-attribution">
                  <img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0" />
                </a>
              </footer>
            </Suspense>
          </Router>
        </section>
      </div>
    </>
  );
}

export default App;
