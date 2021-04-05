import React from 'react';
import TrackItem from './TrackItem.jsx';

const TrackList = (props) => (
  <div>
    <h5>Top {props.tracks.length} Tracks:</h5>
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
            search={props.search}
          />
        ))}
      </tbody>
    </table>
  </div>
);

export default TrackList;