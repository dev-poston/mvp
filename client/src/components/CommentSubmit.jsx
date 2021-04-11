import React from 'react';

class CommentSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newComment: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(e) {
    this.setState({
      newComment: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    let username = e.target.parentNode.parentNode.children[0].innerText.slice(8);
    let track_name = e.target.parentNode.parentNode.children[1].innerText.slice(12);
    this.props.submitComment({
      username: username,
      track_name: track_name,
      newComment: this.state.newComment
    });
    this.setState({
      newComment: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
          <input type="submit" value="Post"/>
        </form>
      </div>
    )
  };
};

export default CommentSubmit;