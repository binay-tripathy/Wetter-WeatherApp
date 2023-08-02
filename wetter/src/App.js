import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './pages/home';
import Main from './pages/main';
import snow from './components/Snow.mp4';


function App() {
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <section className="vh-100 ">
          <video autoPlay muted preload='auto' loop id="myVideo" style={{ width: "100%", height: "auto", pointerEvents: "none" }}>
            <source src={snow} type="video/mp4" />
          </video>

          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/result' element={<Main />} />
            </Routes>
          </Router>
        </section>
      </div>
    </>
  )
}



export default App;
