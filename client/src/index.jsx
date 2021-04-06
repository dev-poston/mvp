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
  }

  componentDidMount() {
    API.readAll((data) => {
      console.log('AJAX CDM @ CLIENT-SIDE: ', data);
    });
  }

  onSearch(username) {
    console.log('YOU SEARCHED FOR: ', username);
    API.sendItem({username: username}, (data) => {
      console.log('AJAX ONSEARCH @ CLIENT-SIDE: ', data)
    });
  };

  render() {
    return (
      <div>
        <h1>MyTrack Feedback v1.0</h1>
        <Search search={this.onSearch}/>
        <TrackList tracks={this.state.tracks}/>
        <br/>
        <h5>Submit a Track for Feedback:</h5>
        <SubmitTrack />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));