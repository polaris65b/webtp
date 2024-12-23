import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <h1>Zest 한기대 유일무이 밴드 동아리</h1>
      </div>
      <div className="content">
        <div className="text-box">
          <h2>연락처</h2>
          <p>이메일: bandclub@example.com</p>
          <p>전화: 010-1234-5678</p>
        </div>
        <div className="text-box">
          <h2>오시는 길</h2>
          <p>충청남도 천안시 동남구 병천면 충절로 1600 한국기술교육대학교</p>
          <p>테니스장 맞으편 건물 지하 1층 끝쪽 방</p>
          <img
            src="/howcom.png"
            alt="오시는 길 이미지"
            className="location-image"
          />
        </div>
      </div>
      <div className="home-buttons">
        <Link to="/login">
          <button>로그인</button>
        </Link>
        <Link to="/signup">
          <button>회원가입</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
