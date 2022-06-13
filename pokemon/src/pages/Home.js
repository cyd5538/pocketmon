import React, { useState } from "react";
import Header from "../components/Header";
import PocketList from "../components/Pocketmon";
import Search from "../components/Search";


const Home = () => {
  const [pokemonSearch, setPokemonSearch] = useState("");
  const [pokemon, setPokemon] = useState([]);

  return (
    <div>
      <Header />
      <Search
        pokemonSearch={pokemonSearch}
        setPokemonSearch={setPokemonSearch}
      />
      <PocketList
        pokemon={pokemon}
        setPokemon={setPokemon}
        setPokemonSearch={setPokemonSearch}
        pokemonSearch={pokemonSearch}
      />
    </div>
  );
};

export default Home;
