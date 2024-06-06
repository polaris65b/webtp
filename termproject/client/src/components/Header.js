import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="header">
      <h1>Zest 한기대 유일무이 밴드 동아리</h1>
      <div className="header-buttons">
        {isLoggedIn ? (
          <button onClick={handleLogout}>로그아웃</button>
        ) : (
          <>
            <Link to="/login">
              <button>로그인</button>
            </Link>
            <Link to="/signup">
              <button>회원가입</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
