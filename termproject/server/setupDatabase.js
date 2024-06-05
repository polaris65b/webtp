const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database.sqlite");

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS songs (id INTEGER PRIMARY KEY, title TEXT, language TEXT, instruments TEXT, genre TEXT)"
  );

  const stmt = db.prepare(
    "INSERT INTO songs (title, language, instruments, genre) VALUES (?, ?, ?, ?)"
  );
  stmt.run("NO PAIN", "한국어", "보컬, 기타1, 기타2, 드럼, 베이스", "락");
  stmt.run(
    "what makes you beautiful ",
    "영어",
    "보컬,기타1,베이스,드럼",
    "재즈"
  );
  stmt.run(
    "When they turn the lights on ",
    "일본어",
    "보컬,기타1,기타2,베이스,드럼",
    "락"
  );
  stmt.run("stray heart", "영어", "보컬, 기타1, 베이스, 드럼", "락");
  stmt.run(
    "밀랍천사",
    "한국어",
    "보컬, 기타1, 기타2, 베이스, 드럼, 키보드",
    "락"
  );
  stmt.run(
    "사랑의 달인",
    "한국어",
    "보컬, 기타1, 기타2, 베이스, 드럼, 키보드",
    "락"
  );
  stmt.run(
    "I loved you",
    "한국어",
    "보컬, 기타1, 기타2, 베이스, 드럼, 키보드",
    "락"
  );
  stmt.run(
    "highlight",
    "한국어",
    "보컬, 기타1, 기타2, 베이스, 드럼, 키보드",
    "락"
  );
  stmt.run(
    "비행소녀",
    "한국어",
    "보컬, 기타1, 기타2, 베이스, 드럼, 키보드",
    "락"
  );
  stmt.run(
    "석류의 맛",
    "한국어",
    "보컬, 기타1, 기타2, 베이스, 드럼, 키보드",
    "락"
  );
  stmt.run("향해", "한국어", "보컬, 기타1, 기타2, 베이스, 드럼, 키보드", "락");

  stmt.run("21 guns", "영어", "보컬, 기타1, 기타2, 베이스, 드럼, 키보드", "락");

  stmt.run(
    "warriors",
    "영어",
    "보컬, 기타1, 기타2, 베이스, 드럼, 키보드",
    "락"
  );

  stmt.finalize();
});

db.close();
