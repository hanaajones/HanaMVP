import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onChange (e) {
    console.log("e.target:", e.target.value)
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  save() {
      this.props.onSettle(this.state.term); ``
  }

  render() {
    return (<div>
      <h4>Settle on more countries</h4>
      Find a country: <input value={this.state.term} onChange={this.onChange.bind(this)}/>       
      <button onClick={this.search.bind(this)}>Search</button>
      <button onClick={this.save.bind(this)}>Settle</button>
    </div>) 
  }
}

export default Search;