import React from 'react';

const Country = (props) => (
  <div id="country">

    <div>

    <h4></h4>
    <div>
      <div>COUNTRY NAME: <span className="input">{props.country.name}</span></div>
      <div>COUNTRY POPULATION: <span className="input">{props.population.toLocaleString()}</span></div>
      {/*<div>Currency: {props.country.currencies}</div>*/}
      <div>NATIVE NAME: <span className="input">{props.country.nativeName}</span></div>
      <div>SUBREGION: <span className="input">{props.country.subregion}</span></div>
        <div>RESOURCES: {props.resources.map((resource, index) => 
          <span><span className="input">{ (index ? ', ' : '') + resource }</span> </span>
          )}</div>
        <div>NUMBERS: {props.numbers.map((number, index) => 
          <span><span className="input">{ (index ? ', ' : '' ) + number}</span> </span>
          )}</div>
          
    </div>
    </div>
    <div>
    <button className="settle-btn">Do you want to settle?</button>
    </div>
  </div>
)

export default Country;