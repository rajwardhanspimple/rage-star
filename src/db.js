const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'your',
    password: 'your',
    database: 'chat_room_db',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

module.exports = db;

