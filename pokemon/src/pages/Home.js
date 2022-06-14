import React  from "react";
import Header from "../components/Home/Header";
import Pocketmon from "../components/Home/Pocketmon";
import Search from "../components/Home/Search";

const Home = ({
  setPokemonSearch,
  pokemon,
  setPokemon,
  pokemonSearch,
  handleClick
}) => {
  return (
    <div>
      <Header />
      <Search setPokemonSearch={setPokemonSearch} />
      <Pocketmon
        pokemon={pokemon}
        setPokemon={setPokemon}
        pokemonSearch={pokemonSearch}
        handleClick={handleClick}
      />
    </div>
  );
};

export default Home;
