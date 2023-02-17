const mysql = require('mysql')
const express = require ('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3001;

const boxDB = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'boxDB',
});

app.get('/', (req, res) => {
    res.send("Server port 3001 test")
})

app.listen(3001, () => {
    console.log("Server running on port 3001");
})