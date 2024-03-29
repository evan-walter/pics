import React from 'react';

export default class SearchBar extends React.Component {
  state = { term: '' };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.term);
  };

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.handleFormSubmit} className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
