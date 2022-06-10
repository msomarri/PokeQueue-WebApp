import logo from './logo.svg';
import './App.css';
import {Data, Poke, Pokedex}  from "./readData/pokemonInfo";
import {Navbar} from "./Nav/informationBar";
const  App = () => {
  Data();
  return(
     <div>
     <h1>Welcome to my App</h1>
     <Navbar />
     </div>
   );
};

export default App;
