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
  console.log('GET REQ SERVER-SIDE', req.body);
  res.status(200).send(req.body);
});

app.post('/tracks', (req, res) => {
  console.log('POST REQ SERVER-SIDE', req.body);
  res.status(200).send(req.body);
});

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});