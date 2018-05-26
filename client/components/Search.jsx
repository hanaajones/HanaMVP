import React from 'react';
import Bootstrap from 'react-bootstrap';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onChange(e) {
    console.log("e.target:", e.target.value)
    this.setState({
      term: e.target.value
    });
  }

  search(e) {
    if(e.key === 'Enter') {
       this.props.onSearch(this.state.term);
    }
   
  }

  save() {
    this.props.onSettle(this.state.term); 
  }

  render() {
    return (
    <div>
      <h4>Conquer your countries</h4>
      <div class="container-1">
        <span class="icon"><i class="fa fa-search"></i></span>
        <div>
        <span id="findCountry" >Find a country: </span><input className="search-input" id="search" type="text" placeholder="Search" value={this.state.term} onChange={this.onChange.bind(this)} onKeyPress={this.search.bind(this)}/>
        </div>
      </div>
      {/*<div class="container-2">
        <button className="search-btn" id="searchBtn" placeHolder="sBtn" onClick={this.search.bind(this)}>Search</button>
      </div>*/}
      {/*<div class="container-3">
        {/*<button className="settle-btn" id="settleBtn" placeHolder="seBtn" onClick={this.save.bind(this)}>Settle</button>*/}
      {/*</div>*/}
    </div>)
  }
}

export default Search;