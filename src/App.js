import React from 'react';
import './App.css';
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState({});
  const [, setCurrentPokemonId] = useState(0);
  const [busqueda, setbusqueda ] = useState("");

  const fetchPokemon = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  };

  const getRandomInt = (min = 1, max = 600) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

 

  const add = () => {
    if (pokemon.id === 600) {
      pokemon.id = 0;
    }
    return pokemon.id + 1;
  }

  const decrease = () => {
    if (pokemon.id === 1) {
      pokemon.id = 601;
    }
    return pokemon.id - 1;
  }
 
  const Buscar = () => {
    if(busqueda !== "" ){
      fetchPokemon(busqueda);    
    }else {      
      alert("campo vacio ");
    }
  }

const filtrar = e =>{
  setbusqueda(e.target.value);
}
 

useEffect(() => { 
   console.log({ pokemon });
    setCurrentPokemonId(pokemon.id);
    pokemon?.abilities?.map((ability) => console.log(ability.ability.name));        
  }, [pokemon]);

  return (
    <div className="App">    
      <header className="App-header">    
      <button className='btn-github'>
        <a  className='btn-github' href='https://github.com/gustavopadilla1/Proyecto-React-pokedex-PWA.git'>GitHub</a>
      </button>

      <div>
      <input  className='buscar' type="text" placeholder='Buscar' value={busqueda} onChange={filtrar}></input>
      <button  className='button-buscar' onClick={Buscar}>Buscar </button>
      </div>  
     
        <div className="flex-container">
          <img
            src={pokemon?.sprites?.back_default ?? "https://m.media-amazon.com/images/I/91s3ed2bcdL._SX500_.jpg"}
            className="poke-image"
            alt="logo" />

          <img src={pokemon?.sprites?.front_default ?? "https://www.clipartmax.com/png/small/190-1908923_open-pokeball-clip-art-pokeball-hd-png.png"}
            className="poke-image"
            alt="logo" />

        </div>
        <p className='titulo'>ID:</p> 
        <p className='text'>{pokemon.id}</p>
        <p className='titulo'>Nombre:</p> 
        <p className='text'>{pokemon.name ?? "No Pokemon Selected"}</p>
        <div className="flex-cotainer">
          <button className="button" onClick={() => fetchPokemon(decrease())}>Back</button>
          <button className="button" onClick={() => fetchPokemon(getRandomInt())}>Random</button>
          <button className="button" onClick={() => fetchPokemon(add())}> Next </button>
        </div>

      </header>
      
      <button className='button'>
        <a href="#miModal" className='button'>Habilidades</a>
      </button>

      <div id="miModal" className="modal">
        <div className="modal-contenido">    
          <h3>{"Nombre:"}</h3>
          <p className='text'> {pokemon?.name ?? "No Pokemon Selected"}</p>
          <h3>{"Abilidades"}</h3>

          <ul className='text'>
            {
              pokemon?.abilities?.map((ability) => (
                <li key={ability.ability.id}>                   
                    {ability.ability.name }                
                </li>                  
              ))
           
            }          
                <img src={pokemon?.sprites?.back_default ?? "" }  alt="" />
               <img src={pokemon?.sprites?.back_shiny ?? ""} alt="" />             
               <img src={pokemon?.sprites?.front_default ?? ""} alt="" />
               <img src={pokemon?.sprites?.front_shiny ?? ""} alt="" />            
               

          </ul>

          <button className="modal-boton-cerrar">
            <a className="modal-boton-cerrar" href="#home">Cerrar</a>
          </button> 



        </div>
      </div>
    </div>
  );
}

export default App;

