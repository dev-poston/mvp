import React from 'react';
import CommentSubmit from './CommentSubmit.jsx';
import TrackComments from './TrackComments.jsx';

const TrackItem = (props) => {
  if (props.track.track_url.includes('soundcloud')) {
    let scLink = 'https://w.soundcloud.com/player/?url=https://soundcloud.com/' + props.track.username + '/' + props.track.track_name;
    return (
      <div className="item">
        <h4>Artist: {props.track.username}</h4>
        <h4>Song Title: {props.track.track_name}</h4>
        Link: <a href={props.track.track_url}>{props.track.track_url}</a>
        <br/>
        <br/>
        <iframe width="90%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src={scLink}></iframe>
        <h4>{props.track.comments.length} Comments: </h4>
        <CommentSubmit
          username={props.track.username}
          track_name={props.track.track_name}
          trackComments={props.track.comments}
          submitComment={props.submitComment}
        />
        <div>
          {props.track.comments.map((item, index) => (
            <TrackComments
              item={item}
              key={index}
            />
          ))}
        </div>
      </div>
    )
  } else if (props.track.track_url.includes('youtube')) {
    let hashSlice = props.track.track_url.slice(props.track.track_url.indexOf('=') + 1);
    let ytLink = 'https://www.youtube.com/embed/' + hashSlice;
    return (
      <div className="item">
        <h4>Artist: {props.track.username}</h4>
        <h4>Song Title: {props.track.track_name}</h4>
        Link: <a href={props.track.track_url}>{props.track.track_url}</a>
        <br/>
        <br/>
        <iframe width="90%" height="166" src={ytLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <h4>{props.track.comments.length} Comments: </h4>
        <CommentSubmit
          username={props.track.username}
          track_name={props.track.track_name}
          trackComments={props.track.comments}
          submitComment={props.submitComment}
        />
        <div>
          {props.track.comments.map((item, index) => (
            <TrackComments
              comment={item}
              key={index}
            />
          ))}
        </div>
      </div>
    )
  } else if (props.track.track_url.includes('dropbox')) {
    return (
      <div className="item">
        <h4>Artist: {props.track.username}</h4>
        <h4>Song Title: {props.track.track_name}</h4>
        Link: <a href={props.track.track_url}>{props.track.track_url}</a>
        <br/>
        <h4><iframe src={props.track.track_url} className="dropbox-embed" data-height="166" data-width="90%"></iframe></h4>
        <h4>{props.track.comments.length} Comments: </h4>
        <CommentSubmit
          username={props.track.username}
          track_name={props.track.track_name}
          trackComments={props.track.comments}
          submitComment={props.submitComment}
        />
        <div>
          {props.track.comments.map((item, index) => (
            <TrackComments
              comment={item}
              key={index}
            />
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <div className="item">
        <h4>{props.track.username}</h4>
        <h4>{props.track.track_name}</h4>
        <a href={props.track.track_url}>{props.track.track_url}</a>
        <h4>{props.track.comments.length} Comments: </h4>
        <CommentSubmit
          username={props.track.username}
          track_name={props.track.track_name}
          trackComments={props.track.comments}
          submitComment={props.submitComment}
        />
        <div>
          {props.track.comments.map((item, index) => (
            <TrackComments
              comment={item}
              key={index}
            />
          ))}
        </div>
      </div>
    )
  }
};

export default TrackItem;