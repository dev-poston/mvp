import React from 'react';
import TrackItem from './TrackItem.jsx';

const TrackList = (props) => (
  <div>
    <h3>Top {props.tracks.length} Tracks:</h3>
    {props.tracks.map((item, index) => (
      <TrackItem
        key={index}
        track={item}
        submitComment={props.submitComment}
      />
    ))}
  </div>
);

export default TrackList;