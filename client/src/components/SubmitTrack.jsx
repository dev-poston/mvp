import React from 'react';

class SubmitTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trackName: '',
      link: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLinkChange -  this.handleLinkChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      trackName: e.targte.value
    });
  };

  handleLinkChange(e) {
    this.setState({
      link: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();

  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Track Name" onChange={this.handleNameChange}/>
          <input type="text" placeholder="Track Link" onChange={this.handleLinkChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  };
};

export default SubmitTrack;