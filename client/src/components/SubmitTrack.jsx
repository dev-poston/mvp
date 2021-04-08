import React from 'react';

class SubmitTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      track_name: '',
      track_url: '',
      comments: [],
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
      track_name: e.target.value
    });
  };

  handleLinkChange(e) {
    this.setState({
      track_url: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitTrack(this.state);
  };

  render() {
    return (
      <div>
        <form className="submit" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Artist Name" onChange={this.handleUsernameChange} required/>
          <input type="text" placeholder="Track Name" onChange={this.handleTrackNameChange} required/>
          <input type="text" placeholder="Track Link" onChange={this.handleLinkChange} required/>
          <input type="submit"/>
        </form>
      </div>
    )
  };
};

export default SubmitTrack;