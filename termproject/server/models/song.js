const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
  title: String,
  language: String,
  instruments: [String],
  genre: String,
});

module.exports = mongoose.model("Song", SongSchema);
