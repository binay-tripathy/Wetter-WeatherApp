import React, { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import fetch_api from "../../components/fetch_api";
import ErrorToast from "../../components/ErrorToast";
import "./forecast.css";

function Main() {
  const location = useLocation();
  const search = location.state?.search;
  const [loading, setLoading] = useState(true);
  const [fetdata, setFetdata] = useState(null);
  const [unit, setUnit] = useState("C");
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const data = await fetch_api(search);
      setFetdata(data);
      setError(null);
    } catch (error) {
      setError(error.message || "Failed to load weather data");
      setFetdata(null);
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    if (search) fetchData();
  }, [search, fetchData]);

  const getBackgroundColor = (isDay) => {
    if (isDay === 1)
      return "linear-gradient(to bottom,  #ff9966, #ff5e62)";
    else
      return "linear-gradient(to bottom, #1e3c72, #2a5298)";
  };

  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="main-container"
      style={{ background: fetdata ? getBackgroundColor(fetdata.current.is_day) : '#1e3c72' }}>

      {error && <ErrorToast error={error} onDismiss={() => setError(null)} />}

      {fetdata && (
        <div className="weather-card" style={{ maxHeight: "calc(100vh - 160px)" }}>
          <div className="weather-header">
            <div className="location-info">
              <h2>{fetdata.location.name}, {fetdata.location.country}</h2>
              <p className="condition-text">{fetdata.current.condition.text}</p>
            </div>
            <img
              src={fetdata.current.condition.icon}
              className="weather-icon"
              alt="Weather icon"
            />
          </div>

          <div className="temperature-section">
            <div className="current-temp">
              {unit === "C" ? fetdata.current.temp_c : fetdata.current.temp_f}°{unit}
            </div>
            <div className="unit-toggle">
              <button
                className={`unit-button ${unit === "C" ? "active" : ""}`}
                onClick={() => setUnit("C")}
              >
                °C
              </button>
              <button
                className={`unit-button ${unit === "F" ? "active" : ""}`}
                onClick={() => setUnit("F")}
              >
                °F
              </button>
            </div>
          </div>

          <div className="weather-details">
            <div className="detail-card">
              <div className="detail-value">
                {unit === "C" ? fetdata.current.feelslike_c : fetdata.current.feelslike_f}°{unit}
              </div>
              <div className="detail-label">Feels Like</div>
            </div>
            <div className="detail-card">
              <div className="detail-value">{fetdata.current.humidity}%</div>
              <div className="detail-label">Humidity</div>
            </div>
            <div className="detail-card">
              <div className="detail-value">{fetdata.current.wind_kph} km/h</div>
              <div className="detail-label">Wind Speed</div>
            </div>
            <div className="detail-card">
              <div className="detail-value">{fetdata.current.pressure_mb} hPa</div>
              <div className="detail-label">Pressure</div>
            </div>
          </div>
        </div>
      )}

      {!fetdata && !loading && (
        <div className="no-data-message">
          No weather data available. Try searching again.
        </div>
      )}
    </div>
  );
}

export default Main;