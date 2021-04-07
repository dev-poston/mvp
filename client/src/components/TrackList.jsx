import React from 'react';
import TrackItem from './TrackItem.jsx';

const TrackList = (props) => (
  <div>
    <h5>Top {props.tracks.length} Tracks:</h5>
    <table>
      <thead>
        <tr>
          <th>Artist Name</th>
          <th>Song Title</th>
          <th>Link</th>
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