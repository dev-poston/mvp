import React from 'react';
import ReactDOM from 'react-dom';
import API from './API.js';
import TrackList from './components/TrackList.jsx';
import Search from './components/Search.jsx';

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
    API.sendItem({username: username}, (data) => {
      console.log('AJAX ONSEARCH @ CLIENT-SIDE: ', data)
    });
  };

  render() {
    return (
      <div>
        <h1>MyTrack Feedback</h1>
        <TrackList tracks={this.state.tracks}/>
        <Search search={this.onSearch}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));