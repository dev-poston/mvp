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
    track_name: track.track_name,
    track_url: track.track_url,
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

let find = (query, callback) => {
  Track.find(query).limit(10).sort({comments: -1})
    .then((data) => {
      console.log('SEARCHING DB...');
      callback(null, data);
    })
    .catch((error) => {
      console.log('FAILED TO SEARCH DB: ', error);
      callback(error);
    });
};

let update = (options, callback) => {
  Track.update({track_name: options.track_name, username: options.username}, {$set: {comments: options.comments}})
    .then((data) => {
      console.log('UPDATING DATA...', data);
      callback(null, data);
    })
    .catch((error) => {
      console.log('FAILED TO UPDATE DATA: ', error);
      callback(error);
    });
};

module.exports = {save, find, update};