require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const app = express();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: { minVersion: 'TLSv1.2', rejectUnauthorized: true }
});

db.connect((err) => {
    if (err) console.log("DB Connection Error: ", err);
    else console.log("Connected to TiDB Cloud!");
});

app.get('/', (req, res) => {
    res.send('Database is linked!');
});

app.listen(3000, () => console.log('Server: http://localhost:3000'));