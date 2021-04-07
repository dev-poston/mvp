import React from 'react';

const TopItems = (props) => (
  <div className="topItem">
    <h6>Artist: {props.track.username}</h6>
    <h6>Song Title: {props.track.track_name}</h6>
  </div>
);

export default TopItems;