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

app.get("/vehicletype", (req, res) => {
  const wheels = req.query.wheels;

  db.all(
    `SELECT DISTINCT vehicleType FROM vehicles where wheels=${wheels}`,
    (err, rows) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
      } else return res.status(200).json(rows.map((row) => row.vehicleType));
    }
  );
});

app.get("/vehicles", (req, res) => {
  const vehicleType = req.query.type;

  db.all(
    `SELECT * FROM vehicles where vehicleType=?`,
    [vehicleType],
    (err, rows) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
      } else return res.status(200).json(rows);
    }
  );
});

app.post("/user", (req, res) => {
  const user = req.body;

  db.run("UPDATE vehicles SET isBooked=? where vehicleName=?", [
    0,
    user.vehicleName,
  ]);

  db.run(
    "INSERT INTO user (firstname, lastname, vehicleName, vehicleWheels, vehicleType,startDate,endDate) VALUES (?,?,?,?,?,?,?)",
    [
      user.firstname,
      user.lastname,
      user.vehicleName,
      user.vehicleWheels,
      user.vehicleType,
      user.startDate,
      user.endDate,
    ],
    (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error!");
      }

      return res.status(201).send("Successful!");
    }
  );
});

app.listen(PORT, () => {
  console.log("Running on http://localhost:" + PORT);
});
