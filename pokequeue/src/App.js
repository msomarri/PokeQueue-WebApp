import logo from './logo.svg';
import './App.css';
import {Data, Pokemon_Card2 , Pokedex}  from "./readData/pokemonInfo";
import {Navbar} from "./Nav/informationBar";
const  App = () => {
  Data();
  return(
     <div>
     <h1>Welcome to my App</h1>
     <Navbar />
     <Pokemon_Card2 pokeNum="6" />
     </div>
   );
};

export default App;
