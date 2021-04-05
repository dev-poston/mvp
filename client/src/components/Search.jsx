import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      item: e.target.value
    })
  };

  handleSubmit() {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
};

export default Search;