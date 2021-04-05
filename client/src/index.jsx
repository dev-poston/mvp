import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));