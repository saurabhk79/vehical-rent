const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const schema = require("./schema");

const PORT = 9872;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

db.close();

app.listen(PORT, () => {
  console.log("Running on http://localhost:" + PORT);
});
