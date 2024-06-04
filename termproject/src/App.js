import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import ReservationPage from "./pages/ReservationPage";
import Recommendations from "./pages/Recommendations";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="container">
          <NavBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/reservation" element={<ReservationPage />} />
              <Route path="/recommendations" element={<Recommendations />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
