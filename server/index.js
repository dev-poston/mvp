const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({entended: true}));

app.get('/tracks', (req, res) => {
  // db.find()
  res.status(200).send('hello world');
});

app.post('/tracks', (req, res) => {
  res.send('post req', req);
});

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});