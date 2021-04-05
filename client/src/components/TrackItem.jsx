import React from 'react';

const TrackItem = (props) => (
  <tr>
    <td>{props.track.username}</td>
    <td><a href={props.track.link}>{props.track.link}</a></td>
    <td>{props.track.comments}</td>
  </tr>
);

export default TrackItem;