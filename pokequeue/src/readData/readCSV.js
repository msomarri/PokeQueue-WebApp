import React from 'react';
import ReactDOM from 'react-dom/client';
// Reading our file that contains the json object

const jsonData= require('./PokeData.json');


export const Data = () => {
  console.log(jsonData);
}

export const Poke = (props) =>{
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

export default Data;
// Purpose of this class is to read a CSV File and return the data for the applic0atation
//The goal is to save this as a json appplication
