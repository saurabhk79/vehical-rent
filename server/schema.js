const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./db/main.db", (err) => {
  if (err) console.error("Error connecting to database:", err.message);
  else console.log("Connected to the vehicles database.");
});


// created schema
db.serialize(() => {
  db.run(`
          CREATE TABLE vehicles (
              id INTEGER PRIMARY KEY,
              vehicleName TEXT,
              wheels INTEGER,
              vehicleType TEXT,
          )
      `);

  db.rub(`
          CREATE TABLE user (
              id INTEGER PRIMARY KEY,
              firstname TEXT,
              lastname TEXT,
              wheels INTEGER,
              vehicleType TEXT,
              startDate TIMESTAMP,
              endDate TIMESTAMP,
          )
      `);
});

db.serialize(() => {
  db.run(
    `INSERT INTO vehicles (vehicleName, wheels, vehicleType) VALUES ("Land Rover Defender", 4, "Hatchback")`
  );
  db.run(
    `INSERT INTO vehicles (vehicleName, wheels, vehicleType) VALUES ("Porsche 911", 4, "SUV")`
  );
  db.run(
    `INSERT INTO vehicles (vehicleName, wheels, vehicleType) VALUES ("Volkswagen Virtus", 4, "Sedan")`
  );
  db.run(
    `INSERT INTO vehicles (vehicleName, wheels, vehicleType) VALUES ("Harley-Davidson Iron 883", 2, "Cruiser")`
  );
  db.run(
    `INSERT INTO vehicles (vehicleName, wheels, vehicleType) VALUES ("Yamaha YZF-R1", 2, "Sports")`
  );
});
