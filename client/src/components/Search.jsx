import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.search(this.state.item);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Search for Tracks" onChange={this.handleChange}/>
          <input type="submit" value="Search"/>
        </form>
      </div>
    )
  };
};

export default Search;