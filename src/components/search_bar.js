import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props){
      super(props);

      this.state={term:''}; //we can localize the state, by creating a personal state of SearchBar
  }

  onInputChange(term){
    this.setState({term}); //setto lo stato generale della proprietà term
    this.props.onSearchTermChange(term); //do term alla funzione che si trova in index per far partire la YTSearch
  }

  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="Enter text to search videos!"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
