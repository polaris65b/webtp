import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Recommendations from "./pages/Recommendations";
import NoticeBoard from "./pages/NoticeBoard";
import InstagramBoard from "./pages/InstagramBoard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="app">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <div className="container">
          <NavBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/schedule"
                element={<Schedule isLoggedIn={isLoggedIn} />}
              />
              <Route path="/recommendations" element={<Recommendations />} />
              <Route path="/notice" element={<NoticeBoard />} />
              <Route path="/instagram" element={<InstagramBoard />} />
              <Route
                path="/login"
                element={<Login setIsLoggedIn={setIsLoggedIn} />}
              />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
