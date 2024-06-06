import React, { useState } from "react";
import "./NoticeBoard.css";

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNotice = () => {
    const newNotice = { title, content };
    setNotices([...notices, newNotice]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="notice-board">
      <h2>공지 게시판</h2>
      <div className="notice-form">
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button onClick={addNotice}>게시</button>
      </div>
      <div className="notices">
        {notices.map((notice, index) => (
          <div key={index} className="notice">
            <h3>{notice.title}</h3>
            <p>{notice.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;
