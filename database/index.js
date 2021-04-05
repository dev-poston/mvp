const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/trackCollection');
let db = mongoose.connection;

db.once('open', () => {
  console.log('CONNECTED TO MONGODB!');
});
db.on('error', (error) => {
  console.log('FAILED TO CONNECT TO MONGODB: ', error);
});

let trackSchema = mongoose.Schema({
  username: String,
  track_url: String,
  comments: [String]
});

let Track = mongoose.model('Track', trackSchema);

let save = (track, callback) => {

};

let find = (username, callback) => {

};

let update = (username, callback) => {

};

module.exports = {save, find, update};