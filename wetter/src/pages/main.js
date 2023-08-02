/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import fetch_api from '../components/fetch_api';
import Spinner from 'react-bootstrap/Spinner';
const conditions = require('../components/conditions.json');
function Main() {
    const location = useLocation();
    const search = location.state.search;
    const [loading, setLoading] = useState(true);
    const [fetdata, setFetdata] = useState([]);
    const fetchData = async () => {
        const response = await fetch_api(search);
        setFetdata(await response.json());
        setLoading(false);
    }
    useEffect(() => {
        fetchData();
        //eslint-disable-next-line
    }, []);



    if (loading) {
        return (
            <div className='text-center ' >
                <Spinner animation="border" variant="primary" style={{ position: "absolute", top: "50%", zoom: "2", marginLeft: "-2%" }} />
            </div>
        )
    }
    else {
        let temp = fetdata.current.temp_c
        let temp_feels = fetdata.current.feelslike_c
        function handleCelcius() {
            temp = fetdata.current.temp_c
            temp_feels = fetdata.current.feelslike_c
            document.getElementById('tempFeels').innerHTML = '\xa0' + temp_feels + '\xB0' + 'C';
            document.getElementById('temperature').innerHTML = temp + '\xB0' + 'C';
        }
        function handleFahrenheit() {
            temp = fetdata.current.temp_f
            temp_feels = fetdata.current.feelslike_f
            document.getElementById('tempFeels').innerHTML = '\xa0' + temp_feels + '\xB0' + 'F';
            document.getElementById('temperature').innerHTML = temp + '\xB0' + 'F';
        }

        let code = conditions.filter(obj => obj.code === fetdata.current.condition.code);
        const icon = code[0].icon
        let path = '';
        fetdata.current.is_day === 1 ? path = `day/${icon}.png` : path = `night/${icon}.png`

        return (
            < div className="row d-flex justify-content-center align-items-center h-100" >
                <div className="col-md-9 col-lg-7 col-xl-5">

                    <div className="card mb-4 gradient-custom rounded">
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between mb-1 px-3" >
                                <div>
                                    <h2 id='temperature' className="display-2" style={{ fontWeight: "400" }}>{temp + '\xB0' + 'C'}</h2>


                                    <div className="btn-group d-block pb-3">
                                        <input type="radio" className="btn-check" name="options" onClick={handleCelcius} id="option1" defaultChecked />
                                        <label className="btn btn-outline-secondary" style={{ fontSize: "x-small" }} htmlFor="option1"><strong>Celcius</strong></label>

                                        <input type="radio" className="btn-check" name="options" onClick={handleFahrenheit} id="option2" />
                                        <label className="btn btn-outline-secondary" style={{ fontSize: "x-small" }} htmlFor="option2"><strong>Fahrenheit</strong></label>
                                    </div>


                                    <p className="text-muted mb-0">{fetdata.location.name} , {fetdata.location.region}</p>

                                </div>


                                <div className='text-center'>
                                    <img src={path} alt="" style={{ width: "6rem", filter: "contrast(80%)" }} />
                                    <p className="text-muted mb-0 mr-0">{fetdata.current.condition.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-4 gradient-custom rounded">
                        <div className="card-body my-4">
                            <h5 className='text-center pb-4'>Hourly Forecast</h5>
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner px-2" style={{fontWeight:"600"}}>
                                    <div className="carousel-item active">
                                        <div className="d-flex justify-content-around ">
                                            <div className="flex-column">
                                                <p className="small">{fetdata.forecast.forecastday[0].hour[0].temp_c + '\xB0' + 'C'}</p>
                                                <p className="mb-0">00:00</p>
                                            </div>
                                            <div className="flex-column">
                                                <p className="small">{fetdata.forecast.forecastday[0].hour[1].temp_c + '\xB0' + 'C'}</p>
                                                <p className="mb-0">01:00</p>
                                            </div>
                                            <div className="flex-column">
                                                <p className="small">{fetdata.forecast.forecastday[0].hour[2].temp_c + '\xB0' + 'C'}</p>
                                                <p className="mb-0">02:00</p>
                                            </div>
                                            <div className="flex-column">
                                                <p className="small">{fetdata.forecast.forecastday[0].hour[3].temp_c + '\xB0' + 'C'}</p>
                                                <p className="mb-0">03:00</p>
                                            </div>
                                            <div className="flex-column">
                                                <p className="small">{fetdata.forecast.forecastday[0].hour[4].temp_c + '\xB0' + 'C'}</p>
                                                <p className="mb-0">04:00</p>
                                            </div>
                                            <div className="flex-column">
                                                <p className="small">{fetdata.forecast.forecastday[0].hour[5].temp_c + '\xB0' + 'C'}</p>
                                                <p className="mb-0">05:00</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="carousel-item ">
                                        <div className="d-flex justify-content-around">
                                            <div className="flex-column">
                                                <p className="small">{fetdata.forecast.forecastday[0].hour[6].temp_c + '\xB0' + 'C'}</p>
                                                <p className="mb-0">06:00</p>
                                            </div>
                                            <div className="flex-column">
                                                <p className="small">{fetdata.forecast.forecastday[0].hour[7].temp_c + '\xB0' + 'C'}</p>
                                                <p className="mb-0">07:00</p>
                                            </div>
                                            <div className="flex-column">
                                                <p className="small">{fetdata.forecast.forecastday[0].hour[8].temp_c + '\xB0' + 'C'}</p>
                                                <p className="mb-0">08:00</p>
                                            </div>
                                            <div className="flex-column">
                                                <p className="small">{fetdata.forecast.forecastday[0].hour[9].temp_c + '\xB0' + 'C'}</p>
                                                <p className="mb-0">09:00</p>
                                            </div>
                                            <div className="flex-column">
                                                <p className="small">{fetdata.forecast.forecastday[0].hour[10].temp_c + '\xB0' + 'C'}</p>
                                                <p className="mb-0">10:00</p>
                                            </div>
                                            <div className="flex-column">
                                                <p className="small">{fetdata.forecast.forecastday[0].hour[11].temp_c + '\xB0' + 'C'}</p>
                                                <p className="mb-0">11:00</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="d-flex justify-content-around">
                                            <div className="flex-column">
                                                <p className="small">{fetdata.forecast.forecastday[0].hour[12].temp_c + '\xB0' + 'C'}</p>
                                                <p className="mb-0">12:00</p>
                                            </div>
                                            <div className="flex-column">
                                                <p className="small">{fetdata.forecast.forecastday[0].hour[13].temp_c + '\xB0' + 'C'}</p>
                                                <p className="mb-0">13:00</p>
                                            </div>
                                            <div className="flex-column">
                                                <p className="small">{fetdata.forecast.forecastday[0].hour[14].temp_c + '\xB0' + 'C'}</p>
                                                <p className="mb-0">14:00</p>
                                            </div>
                                            <div className="flex-column">
                                                <p className="small">{fetdata.forecast.forecastday[0].hour[15].temp_c + '\xB0' + 'C'}</p>
                                                <p className="mb-0">15:00</p>
                                            </div>
                                            <div className="flex-column">
                                                <p className="small">{fetdata.forecast.forecastday[0].hour[16].temp_c + '\xB0' + 'C'}</p>
                                                <p className="mb-0">16:00</p>
                                            </div>
                                            <div className="flex-column">
                                                <p className="small">{fetdata.forecast.forecastday[0].hour[17].temp_c + '\xB0' + 'C'}</p>
                                                <p className="mb-0">17:00</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="d-flex justify-content-around">
                                            <div className="flex-column">
                                                <p className="small">{fetdata.forecast.forecastday[0].hour[18].temp_c + '\xB0' + 'C'}</p>
                                                <p className="mb-0">18:00</p>
                                            </div>
                                            <div className="flex-column">
                                                <p className="small">{fetdata.forecast.forecastday[0].hour[19].temp_c + '\xB0' + 'C'}</p>
                                                <p className="mb-0">19:00</p>
                                            </div>
                                            <div className="flex-column">
                                                <p className="small">{fetdata.forecast.forecastday[0].hour[20].temp_c + '\xB0' + 'C'}</p>
                                                <p className="mb-0">20:00</p>
                                            </div>
                                            <div className="flex-column">
                                                <p className="small">{fetdata.forecast.forecastday[0].hour[21].temp_c + '\xB0' + 'C'}</p>
                                                <p className="mb-0">21:00</p>
                                            </div>
                                            <div className="flex-column">
                                                <p className="small">{fetdata.forecast.forecastday[0].hour[22].temp_c + '\xB0' + 'C'}</p>
                                                <p className="mb-0">22:00</p>
                                            </div>
                                            <div className="flex-column">
                                                <p className="small">{fetdata.forecast.forecastday[0].hour[23].temp_c + '\xB0' + 'C'}</p>
                                                <p className="mb-0">23:00</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" style={{ marginLeft: "-5%" }} type="button" data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" style={{ marginRight: "-5%" }} type="button" data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className="card rounded gradient-custom ">
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between mb-1 px-3">
                                <div>
                                    <div style={{ display: "inline-flex" }}>
                                        <p >Feels Like : </p>
                                        <p id='tempFeels'>{'\xa0' + temp_feels + '\xB0' + 'C'}</p>

                                    </div>
                                    <p>Humidity : {fetdata.current.humidity + '%'}</p>
                                </div>
                                <div>
                                    <p>Precipitation(mm) : {fetdata.current.precip_mm + 'mm'}</p>
                                    <p>Pressure(mb) : {fetdata.current.pressure_mb + 'mb'}</p>
                                </div>
                                <div>
                                    <p>Wind Direction : {fetdata.current.wind_dir}</p>
                                    <p>Wind Speed : {fetdata.current.wind_kph + 'kmph'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >

        )
    }
}

export default Main
