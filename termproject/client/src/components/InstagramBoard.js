import React, { useState } from "react";
import "./InstagramBoard.css";

const InstagramBoard = () => {
  const [posts, setPosts] = useState([]);
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");

  const addPost = () => {
    const newPost = { caption, image };
    setPosts([...posts, newPost]);
    setCaption("");
    setImage("");
  };

  return (
    <div className="instagram-board">
      <h2>Instagram 게시판</h2>
      <div className="instagram-form">
        <input
          type="text"
          placeholder="이미지 URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <textarea
          placeholder="캡션"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        ></textarea>
        <button onClick={addPost}>게시</button>
      </div>
      <div className="posts">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <img src={post.image} alt="Instagram post" />
            <p>{post.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramBoard;
