const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./my_ideas.db');

db.serialize(function() {
    
    // Create Table
    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        title TEXT,
        category TEXT,
        description TEXT,
        link TEXT
    );`);

    // Delete
    // db.run(`DELETE FROM ideas WHERE id = ?`, [3], function(err) {
    //     if (err) return console.log(err);
    //     console.log("item deletado", this);
    // });

    // Select
    db.all(`SELECT * FROM ideas`, function(err, rows) {
        if (err) return console.log(err);

        console.log(rows);
    });

    
});

module.exports = db;