const express = require("express");
const cors = require("cors");
const db = require("./schema");

const PORT = 9872;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  db.all("SELECT * FROM vehicles", (err, rows) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    } else return res.status(200).send(rows);
  });
});

app.get("/wheels", (req, res) => {
  const wheels = req.query.wheels;

  db.all(`SELECT * FROM vehicles where wheels=${wheels}`, (err, rows) => {
    if (err) {
      console.log("Internal Server Error!");
      return res.status(500).send("Internal Server Error");
    } else return res.status(200).send(rows);
  });
});

app.listen(PORT, () => {
  console.log("Running on http://localhost:" + PORT);
});
