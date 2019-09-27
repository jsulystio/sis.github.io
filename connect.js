const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_STUDENTS = "SELECT * FROM students";

const connection = mysql.createConnection({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'react_sql',
    pool: true
});

connection.connect(err => {
    if(err) {
        return err;
    }
    else {
        console.log("Connected to MySQL server!");
    }
});

// console.log(connection);

app.use(cors());

app.get('/', (req, res) => {
    res.send("Go to /students to see students info")
});

app.get('/students', (req, res) => {
    connection.query(SELECT_ALL_STUDENTS, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    });
});


app.listen(4000, () => {
    console.log("Server listening on port 4001!")
})