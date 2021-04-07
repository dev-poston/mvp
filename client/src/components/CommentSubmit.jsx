import React from 'react';

class CommentSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      track_name: this.props.track_name,
      comments: this.props.trackComments,
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
    let comments = this.state.comments
    comments.push(this.state.newComment);
    this.props.submitComment({
      username: this.state.username,
      track_name: this.state.track_name,
      comments: comments
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