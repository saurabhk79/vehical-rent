const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./db/main.db", (err) => {
  if (err) console.error("Error connecting to database:", err.message);
  else console.log("Connected to the vehicles database.");
});

// created schema
db.serialize(() => {
  db.run(`
          CREATE TABLE IF NOT EXISTS vehicles (
              id INTEGER PRIMARY KEY,
              vehicleName TEXT,
              wheels INTEGER,
              vehicleType TEXT,
              isBooked INTEGER
          )
      `);

  db.run(`
          CREATE TABLE IF NOT EXISTS user (
              id INTEGER PRIMARY KEY,
              firstname TEXT,
              lastname TEXT,
              vehicleName TEXT,
              vehicleWheels INTEGER,
              vehicleType TEXT,
              startDate TEXT,
              endDate TEXT
          )
      `);
});

// added some initial valus
db.serialize(() => {
  db.get("SELECT COUNT(*) AS count FROM vehicles", (err, row) => {
    if (err) {
      console.error("Error checking for existing records:", err.message);
      return;
    }

    if (row.count === 0) {
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
    } else console.log("Vehicles already contains data. Skipping adding data.");
  });
});

module.exports = db;
