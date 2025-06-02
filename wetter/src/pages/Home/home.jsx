import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fetch_api from '../../components/fetch_api';
import ErrorToast from '../../components/ErrorToast';
import './home.css';

function Home() {
    const [search, setSearch] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleClick();
        }
    };

    const handleClick = async () => {
        if (search.trim() === "") {
            setError("Please enter a city name");
            return;
        }

        try {
            await fetch_api(search);
            navigate('/result', { state: { search } });
        } catch (error) {
            setError(error.message || "Failed to fetch weather data");
        }
    };

    return (
        <div className="container">
            {error && <ErrorToast error={error} onDismiss={() => setError(null)} />}
            <h1 className="title">WETTER</h1>
            <div className="search-container">
                <h3 className="subtitle">Check the weather forecast</h3>
                <div className="input-group">
                    <input
                        type="search"
                        className="search-input"
                        value={search}
                        onKeyPress={handleEnter}
                        onChange={handleSearch}
                        placeholder="City"
                        aria-label="Search for a city"
                    />
                    <button className="search-button" onClick={handleClick} type="submit" id="search-addon">
                        Check!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;