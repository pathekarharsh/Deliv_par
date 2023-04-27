const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = '../server/db.sqlite3';

// require('../server/db.sqlite3')

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log('Connected to the SQLite database.');
    db.run(`
      CREATE TABLE IF NOT EXISTS delivery_agents (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE,
        first_name TEXT,
        last_name TEXT,
        phone TEXT
      )
    `);
  }
});

module.exports = db;
