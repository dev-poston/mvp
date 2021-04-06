import React from 'react';

const TrackItem = (props) => (
  <tr>
    <td>{props.track.username}</td>
    <td>{props.track.track_name}</td>
    <td><a href={props.track.track_url}>{props.track.track_url}</a></td>
    <td>{props.track.comments}</td>
  </tr>
);

export default TrackItem;