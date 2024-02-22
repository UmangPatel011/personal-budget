// Budget API

const express = require('express');
const cors = require('cors');
const fs= require('fs');    // File system
const path = require('path');    // Path module
const app = express();
const port = 3001;

app.use(cors());
/* Loading JSON from file using file system  */
 const budget = JSON.parse(fs.readFileSync(`${__dirname}/budget.json`, 'utf8'));

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`API served at http://137.184.110.255:${port}`);
});