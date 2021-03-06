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
    
    // //Insert
    // const query = `
    // INSERT INTO ideas(
    //     image,
    //     title,
    //     category,
    //     description,
    //     link
    // ) VALUES (?, ?, ?, ?, ?);`; 

    // const values =  [
    //     'https://www.flaticon.com/svg/vstatic/svg/3953/3953446.svg?token=exp=1614633817~hmac=06afcb0e40166d8f894c3aaf2de0b95d',
    //     'Cursos de recuperação de dados',
    //     'Estudo',
    //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ut maxime facere facilis assumenda placeat corporis, minima eaque ad architecto harum modi expedita nulla quam impedit, totam accusantium pariatur neque.',
    //     'https://www.dbsystem.com.br'
    // ];

    // db.run(query, values, function(err) {
    //     if (err) {
    //         return console.log(err);
    //     }else{
    //         console.log(this);
    //     }
    // });

    // // Delete
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