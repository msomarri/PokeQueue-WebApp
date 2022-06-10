import logo from './logo.svg';
import './App.css';
import {Data, Poke, Pokedex}  from "./readData/pokemonInfo"
const  App = () => {
  Data();
  return(
     <div>
     <h1>Welcome to my App</h1>
     </div>
   );
};

export default App;
