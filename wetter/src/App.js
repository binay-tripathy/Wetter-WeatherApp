import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './pages/home';
import Main from './pages/main';
import Snow from './components/Snow.mp4';


function App() {
  return (
    <>
      <div>
        <section className="vh-100 ">
          <video autoPlay muted preload='auto' loop id="myVideo" style={{ width: "100%", height: "auto", pointerEvents: "none" }}>
            <source src={Snow} type="video/mp4" />
          </video>

          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/result' element={<Main />} />
            </Routes>
          </Router>
          <footer>

          <a className='text-dark position-relative' href="https://github.com/binay-tripathy">Made with 🤍 by Binay Tripathy</a>
          </footer>
        </section>
      </div>
    </>
  )
}



export default App;
