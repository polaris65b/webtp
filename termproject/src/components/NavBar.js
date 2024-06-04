import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isCollapsed ? (
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M0 10 L10 0 L10 7 L20 7 L20 13 L10 13 L10 20 Z" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M20 10 L10 0 L10 7 L0 7 L0 13 L10 13 L10 20 Z" />
          </svg>
        )}
      </button>
      {!isCollapsed && (
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/schedule">Schedule</Link>
            </li>
            <li>
              <Link to="/reservation">Reservation</Link>
            </li>
            <li>
              <Link to="/recommendations">Recommendations</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default NavBar;
