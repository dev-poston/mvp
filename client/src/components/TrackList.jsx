import React from 'react';
import TrackItem from './TrackItem.jsx';
import TopItems from './TopItems.jsx';

const TrackList = (props) => (
  <React.Fragment>
    <div className="trackCollection">
      <div className="tracks">
        {props.tracks.map((item, index) => (
          <TrackItem
          key={index}
          track={item}
          search={props.search}
          submitComment={props.submitComment}
          />
        ))}
        <div className="top10">
          <h3 >Top {props.topTracks.length} Tracks:</h3>
          {props.topTracks.map((item, index) => (
            <TopItems
            key={index}
            track={item}
            />
          ))}
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default TrackList;