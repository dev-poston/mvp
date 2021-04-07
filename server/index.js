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
  db.find({}, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      console.log('FINDALL DATA SERVER-SIDE: ', data);
      res.status(200).send(data);
    }
  });
});

app.post('/trackSearch', (req, res) => {
  console.log('SEARCH POST REQ SERVER-SIDE', req.body);
  db.find(req.body, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post('/trackSubmit', (req, res) => {
  console.log('SUBMIT POST REQ SERVER-SIDE', req.body);
  db.find({
    track_name: req.body.track_name,
    username: req.body.username
  }, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      if (data.length) {
        res.status(200).send('TRACK ALREADY EXSISTS');
      } else {
        db.save(req.body, [], (err, data) => {
          if (err) {
            res.status(400).send(err);
          } else {
            console.log('SAVED DATA: ', data);
            res.status(200).send('NEW TRACK SAVED TO DB!');
          }
        });
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});