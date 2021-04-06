import React from 'react';

class SubmitTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      trackName: '',
      link: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleTrackNameChange = this.handleTrackNameChange.bind(this);
    this.handleLinkChange =  this.handleLinkChange.bind(this);
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    });
  };

  handleTrackNameChange(e) {
    this.setState({
      trackName: e.target.value
    });
  };

  handleLinkChange(e) {
    this.setState({
      link: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitTrack(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Username" onChange={this.handleUsernameChange}/>
          <input type="text" placeholder="Track Name" onChange={this.handleTrackNameChange}/>
          <input type="text" placeholder="Track Link" onChange={this.handleLinkChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  };
};

export default SubmitTrack;