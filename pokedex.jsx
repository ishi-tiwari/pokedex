 create-react-app;pokedex
 
  import React from 'react';

const Pokemon = () => {
  return <div>I will catch the PokemonCard's!!</div>;
};
import AllPokemon from './containers/Pokemon';

const App = () => {
  return (
    <div className='App'>
     Pokedex
      <div>
        <AllPokemon />
      </div>
    </div>
  );
};
const URL = 'https://pokeapi.co/api/v2/pokemon/ditto';

export const getPokemons = () => {
  return fetch(URL).then((response) => response.json());
};
import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';
import { getPokemons } from '../services/pokemons';

const AllPokemon = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  return (
    <div>
      <div>
        {Object.entries(pokemons)[3] &&
          Object.entries(pokemons)[3][1].map((pokemon, index) => {
            return <PokemonCard key={index} {...pokemon} />;
          })}
      </div>
    </div>
  );
};
import React from 'react';

const PokemonCard = (props) => {
  console.log(props.id);
  return (
    <div>
      <h3>{props.name}</h3>
      
        <img src={`C:\Users\ishita\Desktop\html code\pokemon pictures/${props.id}.png`}
      />
    </div>
  );
};
export default PokemonCard;




