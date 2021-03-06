import React from 'react';
import ReactDOM from 'react-dom';
import API from './API.js';
import TrackList from './components/TrackList.jsx';
import Search from './components/Search.jsx';
import SubmitTrack from './components/SubmitTrack.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      topTracks: []
    };
    this.onSearch = this.onSearch.bind(this);
    this.submitTrack = this.submitTrack.bind(this);
    this.submitComment = this.submitComment.bind(this);
  };

  componentDidMount() {
    API.readAll((data) => {
      this.setState({
        topTracks: data
      });
    });
  };

  onSearch(username) {
    console.log('YOU SEARCHED FOR: ', username);
    API.readOne({username: username}, (data) => {
      this.setState({
        tracks: data
      });
    });
  };

  submitTrack(options) {
    console.log('YOU SUBMITTED: ', options);
    API.sendItem(options, (data) => {
      this.setState({
        tracks: data
      });
      API.readAll((data) => {
        this.setState({
          topTracks: data
        });
      });
    });
  };

  submitComment(options) {
    API.sendComment(options, (data) => {
      this.setState({
        tracks: data
      });
    });
  };

  render() {
    return (
      <div>
        <h1>MyTrack Feedback</h1>
        <br/>
        <h5 className="submitMsg">Submit a Track for Feedback:</h5>
        <SubmitTrack submitTrack={this.submitTrack}/>
        <Search search={this.onSearch}/>
        <TrackList
          search={this.onSearch}
          tracks={this.state.tracks}
          topTracks={this.state.topTracks}
          submitComment={this.submitComment}
        />
      </div>
    )
  };
};

ReactDOM.render(<App />, document.getElementById('app'));