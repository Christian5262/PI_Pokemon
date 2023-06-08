import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './views/home/Home';
import Detail from './views/Detail/Detail';
import Landing from './views/landing/Landing';
import CreatePokemon from './views/create/CreatePokemon';


function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/home/:id" element={<Detail/>} />
        <Route path="/create" element={<CreatePokemon/>}/>
      </Routes>
    </div>
  );
}

export default App;
