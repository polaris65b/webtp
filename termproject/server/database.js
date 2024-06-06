const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./users.db"); // 파일 기반 데이터베이스

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  )`);
});

module.exports = db;
