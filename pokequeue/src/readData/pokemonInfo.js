import React from 'react';
import ReactDOM from 'react-dom/client';
// Reading our file that contains the json object

const jsonData= require('./PokeData.json');
// Set the size of the pokedex
const size = 242;

// Testing func to see what is in the json object
export const Data = () => {
  console.log(jsonData);
}

// Display the information on one pokemon
export const Pokemon_Card = (props) =>{
  const pokemon = props.pokeNum -1;
  return (
    <div>
    <h1>{jsonData["dex number"][pokemon]}      {jsonData["pokemon"][pokemon]}</h1>
    <img src={jsonData["picture location "][pokemon]}/>
    <h2> Location </h2>
    <p>{jsonData["Location"][pokemon]}</p>
    </div>
  )
}

export const Pokemon_Card2 = (props) =>{
  const pokemon = props.pokeNum -1;
  return (
    <div className="card" style={{width: "18rem"}}>
      <img className="card-img-top" src={jsonData["picture location "][pokemon]} alt={jsonData["pokemon"][pokemon]} />
      <div className="card-body">
        <h5 className="card-title"> {jsonData["dex number"][pokemon]}  {jsonData["pokemon"][pokemon]}</h5>
        <p className="card-text">{jsonData["Location"][pokemon]}</p>
        <a href="#" className="btn btn-primary">add</a>
      </div>
      </div>
  )
}

export const Pokedex = () =>{
const p = [];
  for ( let i = 0 ; i < size ; i++)
  {
  p.push(
    <div>
    <h1>{jsonData["dex number"][i]}      {jsonData["pokemon"][i]}</h1>
    <img src={jsonData["picture location "][i]}/>
    <form>
      <label>Add to Queue</label>
      <input type="checkbox" />
    </form>
    </div>
  )
  }
  return p;
}
//
// export default Data;
