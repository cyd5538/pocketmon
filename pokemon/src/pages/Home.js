import React  from "react";
import Header from "../components/Home/Header";
import Pocketmon from "../components/Home/Pocketmon";
import Search from "../components/Home/Search";
import Sidebar from '../components/SideBar'
const Home = ({
  setPokemonSearch,
  pokemon,
  setPokemon,
  pokemonSearch,
  handleClick
}) => {
  return (
    <div>
      <Sidebar />
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
