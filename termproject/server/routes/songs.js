const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const router = express.Router();

const db = new sqlite3.Database("./database.sqlite");

// 기존의 GET /songs 라우트
router.get("/songs", (req, res) => {
  const { language, instruments, genre } = req.query;
  let sql = "SELECT * FROM songs WHERE 1=1";
  let params = [];

  if (language) {
    sql += " AND language = ?";
    params.push(language);
  }
  if (instruments) {
    const instrumentList = instruments.split(",").map((inst) => `%${inst}%`);
    sql +=
      " AND " + instrumentList.map(() => "instruments LIKE ?").join(" AND ");
    params.push(...instrumentList);
  }
  if (genre) {
    sql += " AND genre = ?";
    params.push(genre);
  }

  db.all(sql, params, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// 새로운 POST /songs 라우트
router.post("/songs", (req, res) => {
  const { title, language, instruments, genre } = req.body;
  const sql =
    "INSERT INTO songs (title, language, instruments, genre) VALUES (?, ?, ?, ?)";
  const params = [title, language, instruments, genre];

  db.run(sql, params, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID });
  });
});

module.exports = router;
