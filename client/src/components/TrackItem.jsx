import React from 'react';

const TrackItem = (props) => {
  if (props.track.track_url.includes('soundcloud')) {
    let scLink = 'https://w.soundcloud.com/player/?url=https://soundcloud.com/' + props.track.username + '/' + props.track.track_name;
    return (
      <tr>
        <td>{props.track.username}</td>
        <td>{props.track.track_name}</td>
        <td><a href={props.track.track_url}>{props.track.track_url}</a></td>
        <td>{props.track.comments.length}</td>
        <td><iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src={scLink}></iframe></td>
      </tr>
    )
  } else if (props.track.track_url.includes('youtube')) {
    let hashSlice = props.track.track_url.slice(props.track.track_url.indexOf('=') + 1);
    let ytLink = 'https://www.youtube.com/embed/' + hashSlice;
    return (
      <tr>
        <td>{props.track.username}</td>
        <td>{props.track.track_name}</td>
        <td><a href={props.track.track_url}>{props.track.track_url}</a></td>
        <td>{props.track.comments.length}</td>
        <td><iframe width="100%" height="166" src={ytLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></td>
      </tr>
    )
  } else if (props.track.track_url.includes('dropbox')) {
    return (
      <tr>
        <td>{props.track.username}</td>
        <td>{props.track.track_name}</td>
        <td><a href={props.track.track_url}>{props.track.track_url}</a></td>
        <td>{props.track.comments.length}</td>
        <td><iframe src={props.track.track_url} className="dropbox-embed" data-height="166" data-width="100%"></iframe></td>
      </tr>
    )
  } else {
    return (
      <tr>
        <td>{props.track.username}</td>
        <td>{props.track.track_name}</td>
        <td><a href={props.track.track_url}>{props.track.track_url}</a></td>
        <td>{props.track.comments.length}</td>
      </tr>
    )
  }
};

export default TrackItem;

// https://www.dropbox.com/s/ndhpjofkqmt5h06/skylineremix.wav?dl=0