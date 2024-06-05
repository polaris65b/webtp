import React, { useState } from "react";
import "./Recommendations.css";
import axios from "axios";

const Recommendations = () => {
  const [language, setLanguage] = useState([]);
  const [instruments, setInstruments] = useState([]);
  const [genres, setGenres] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const handleCheckboxChange = (event, setState, state) => {
    const { value, checked } = event.target;
    if (checked) {
      setState([...state, value]);
    } else {
      setState(state.filter((item) => item !== value));
    }
  };

  const handleRecommend = async () => {
    const params = {
      language: language.join(","),
      instruments: instruments.join(","),
      genre: genres.join(","),
    };

    try {
      const response = await axios.get("http://localhost:5000/api/songs", {
        params,
      });
      setRecommendations(response.data);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      alert("Failed to fetch recommendations");
    }
  };

  return (
    <div className="recommendations-container">
      <h2>Recommendations</h2>

      <div>
        <h3>언어</h3>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              value="한국어"
              onChange={(e) => handleCheckboxChange(e, setLanguage, language)}
            />
            한국어
          </label>
          <label>
            <input
              type="checkbox"
              value="영어"
              onChange={(e) => handleCheckboxChange(e, setLanguage, language)}
            />
            영어
          </label>
          <label>
            <input
              type="checkbox"
              value="일본어"
              onChange={(e) => handleCheckboxChange(e, setLanguage, language)}
            />
            일본어
          </label>
          <label>
            <input
              type="checkbox"
              value="기타"
              onChange={(e) => handleCheckboxChange(e, setLanguage, language)}
            />
            기타
          </label>
        </div>
      </div>

      <div>
        <h3>사용 가능한 악기</h3>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              value="보컬"
              onChange={(e) =>
                handleCheckboxChange(e, setInstruments, instruments)
              }
            />
            보컬
          </label>
          <label>
            <input
              type="checkbox"
              value="기타1"
              onChange={(e) =>
                handleCheckboxChange(e, setInstruments, instruments)
              }
            />
            기타1
          </label>
          <label>
            <input
              type="checkbox"
              value="기타2"
              onChange={(e) =>
                handleCheckboxChange(e, setInstruments, instruments)
              }
            />
            기타2
          </label>
          <label>
            <input
              type="checkbox"
              value="베이스"
              onChange={(e) =>
                handleCheckboxChange(e, setInstruments, instruments)
              }
            />
            베이스
          </label>
          <label>
            <input
              type="checkbox"
              value="드럼"
              onChange={(e) =>
                handleCheckboxChange(e, setInstruments, instruments)
              }
            />
            드럼
          </label>
          <label>
            <input
              type="checkbox"
              value="키보드1"
              onChange={(e) =>
                handleCheckboxChange(e, setInstruments, instruments)
              }
            />
            키보드1
          </label>
          <label>
            <input
              type="checkbox"
              value="키보드2"
              onChange={(e) =>
                handleCheckboxChange(e, setInstruments, instruments)
              }
            />
            키보드2
          </label>
          <label>
            <input
              type="checkbox"
              value="퍼커션"
              onChange={(e) =>
                handleCheckboxChange(e, setInstruments, instruments)
              }
            />
            퍼커션
          </label>
        </div>
      </div>

      <div>
        <h3>장르</h3>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              value="락"
              onChange={(e) => handleCheckboxChange(e, setGenres, genres)}
            />
            락
          </label>
          <label>
            <input
              type="checkbox"
              value="발라드"
              onChange={(e) => handleCheckboxChange(e, setGenres, genres)}
            />
            발라드
          </label>
          <label>
            <input
              type="checkbox"
              value="재즈"
              onChange={(e) => handleCheckboxChange(e, setGenres, genres)}
            />
            재즈
          </label>
          <label>
            <input
              type="checkbox"
              value="펑크"
              onChange={(e) => handleCheckboxChange(e, setGenres, genres)}
            />
            펑크
          </label>
          <label>
            <input
              type="checkbox"
              value="팝"
              onChange={(e) => handleCheckboxChange(e, setGenres, genres)}
            />
            팝
          </label>
        </div>
      </div>

      <button onClick={handleRecommend}>곡 추천</button>

      <div>
        <h3>추천 곡</h3>
        <ul>
          {recommendations.map((song, index) => (
            <li key={index}>{song.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recommendations;
