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

app.post('/trackSearch', (req, res) => {
  console.log('SEARCH POST REQ SERVER-SIDE', req.body);

  res.status(200).send(req.body);
});

app.post('/trackSubmit', (req, res) => {
  console.log('SUBMIT POST REQ SERVER-SIDE', req.body);
  db.save(req.body, [], (err, data) => {
    if (err) {
      res.status(400).send(200);
    } else {
      console.log('SAVED DATA: ', data);
      res.status(200).send('NEW TRACK SAVED TO DB!');
    }
  })
});

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});