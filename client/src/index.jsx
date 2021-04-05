import React from 'react';
import ReactDOM from 'react-dom';
import API from './API.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    API.readAll((data) => {
      console.log('AJAX DATA - CLIENT-SIDE: ', data);
    })
  }

  render() {
    return (
      <div>
        <h1>MyTrack Feedback</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));