// Budget API

/* const express = require('express');
const cors = require('cors');
const fs= require('fs');    // File system
const path = require('path');    // Path module
const app = express();
const port = 3001;

app.use(cors());
//Loading JSON from file using file system  
 const budget = JSON.parse(fs.readFileSync(`${__dirname}/budget.json`, 'utf8'));

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
}); */

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
const port = 3001;
bodyParser.urlencoded({ extended: true });
app.use(bodyParser.json());
app.use(cors());


app.get('/budget', (req, res) => {
  try {
  const uri = 'mongodb+srv://upatel176:6TaCSPSr5MSp8Kar@cluster0.ipw5bph.mongodb.net/';
  const client = new MongoClient(uri);
    client.connect();
    client.db('personal_budget').collection('budget').find().toArray()
    .then(result => {
      client.close();
        res.json(result);
        
    })
    .catch(error => console.error('Error retrieving data from MongoDB:', error));
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
);


  
  // Start the server
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });