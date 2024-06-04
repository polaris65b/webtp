import React, { useState, useEffect } from "react";
import axios from "axios";

const SongRecommendation = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get("/api/songs")
      .then((response) => setSongs(response.data))
      .catch((error) => console.error("Error fetching songs:", error));
  }, []);

  return (
    <div>
      <h2>Song Recommendations</h2>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            {song.title} by {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongRecommendation;
