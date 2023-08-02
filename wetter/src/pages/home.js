import React, { useState } from 'react';
import fetch_api from '../components/fetch_api';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); 
            document.getElementById('search-addon').click();
        }
    }
    const handleClick = async () => {
        let cityName = search;
        if (cityName === "") {
            document.getElementById('error').innerHTML = "** Please Enter a City Name";
        }
        else {
            try {
                let data = await fetch_api(search);
                if (data.ok) {
                    navigate('/result', { state: { search } });
                }
                else {
                    //eslint-disable-next-line
                    throw ("** Please Enter a Valid City Name");
                }
            }
            catch (ex) {
                document.getElementById('error').innerHTML = ex;
            }


        }
    }
    return (
        <div className="container h-100 content">
            <h1 className="row justify-content-center align-items-center fw-normal color-dark display-1" style={{ fontSize: "5rem" }}>WETTER</h1>

            <div className="row d-flex justify-content-center align-items-center h-50">
                <div className="col-md-8 col-lg-6 col-xl-4">

                    <h3 className="mb-4 row justify-content-center pb-4 fw-normal">Check the weather forecast</h3>

                    <div className="input-group rounded position-static">
                        <input type="search" className="form-control rounded mx-2" value={search} onKeyPress={handleEnter} onChange={handleSearch} placeholder="City" />
                        <button className="btn btn-outline-success rounded" onClick={handleClick} type='submit' id="search-addon"> Check! </button>

                    </div>
                    <div className="d-flex mx-1 position-absolute">
                        <p id="error" style={{ color: "red" }}></p>
                    </div>
                </div>
            </div>
        </div>
    )


}
export default Home