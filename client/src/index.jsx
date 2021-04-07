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
      tracks: []
    };
    this.onSearch = this.onSearch.bind(this);
    this.submitTrack = this.submitTrack.bind(this);
    this.submitComment = this.submitComment.bind(this);
  };

  componentDidMount() {
    API.readAll((data) => {
      console.log('AJAX CDM/READALL CLIENT-SIDE: ', data);
      this.setState({
        tracks: data
      });
    });
  };

  onSearch(username) {
    console.log('YOU SEARCHED FOR: ', username);
    API.readOne({username: username}, (data) => {
      console.log('READONE CLIENT-SIDE: ', data);
      this.setState({
        tracks: data
      });
    });
  };

  submitTrack(options) {
    console.log('YOU SUBMITTED: ', options);
    API.sendItem(options, (data) => {
      console.log('SENDITEM CLIENT-SIDE: ', data);
      this.setState({
        tracks: data
      });
    });
  };

  submitComment(options) {
    API.sendComment(options, (data) => {
      console.log('SEND COMMENT CLIENT-SIDE: ', data);
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
        <h5>Submit a Track for Feedback:</h5>
        <SubmitTrack submitTrack={this.submitTrack}/>
        <br/>
        <Search search={this.onSearch}/>
        <TrackList
          tracks={this.state.tracks}
          submitComment={this.submitComment}
        />
      </div>
    )
  };
};

ReactDOM.render(<App />, document.getElementById('app'));