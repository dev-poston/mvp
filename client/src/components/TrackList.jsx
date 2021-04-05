import React from 'react';
import TrackItem from './TrackItem.jsx';

const TrackList = (props) => (
  <div>
    <h5>Top 10 Tracks:</h5>
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Track Link</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
        {props.tracks.map((item, index) => (
          <TrackItem
            key={index}
            track={item}
          />
        ))}
      </tbody>
    </table>
  </div>
);

export default TrackList;