import logo from './logo.svg';
import './App.css';
import {Data, Poke}  from "./readData/readCSV"
const  App = () => {
  Data();
  return(
     <div>
     <h1>Welcome to my App</h1>
     <Poke pokeNum="200" />
     </div>
   );
};

export default App;
