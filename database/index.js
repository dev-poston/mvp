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
  track_name: String,
  track_url: String,
  comments: [String]
});

let Track = mongoose.model('Track', trackSchema);

let save = (track, comments, callback) => {
  let Docs = new Track({
    username: track.username,
    track_name: track.trackName,
    track_url: track.url,
    comments: comments
  });
  Docs.save()
    .then((data) => {
      console.log('SAVING TO DB...');
      callback(null, data);
    })
    .catch((error) => {
      console.log('FAILED TO SAVE TO DB: ', error);
      callback(error);
    });
};

let find = (username, callback) => {
  Track.find(username).limit(10).sort({comments: -1})
    .then((data) => {
      console.log('SEARCHING DB...');
      callback(null, data);
    })
    .catch((error) => {
      console.log('FAILED TO SEARCH DB: ', error);
      callback(error);
    })
};

let update = (trackName, updateComments, callback) => {
  Track.update({})
};

module.exports = {save, find, update};