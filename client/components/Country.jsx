import React from 'react';

const Country = (props) => (
  <div>
    <h4> Country searched</h4>
    <div>
      <div>Country Name: {props.country.name}</div>
      <div>Country Population: {props.country.population}</div>
      {/*<div>Currency: {props.country.currencies}</div>*/}
      <div>Native Name: {props.country.nativeName}</div>
      <div>Subregion: {props.country.subregion}</div>
        <div>Resources: {props.resources.map(resource => 
          <span>{resource}, </span>
          )}</div>
        <div>Numbers: {props.numbers.map(number => 
          <span>{number}, </span>
          )}</div>
      <img ></img>
    </div>
  </div>
)

export default Country;