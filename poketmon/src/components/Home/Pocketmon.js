import React, { useState, useEffect } from "react";
import axios from "axios";
import PocketmonList from "./PocketmonList";
import styled from "styled-components";
import HomeButton from "./HomeButton";

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;

const PocketmonStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  column-gap: 20px;
  row-gap: 20px;
  margin-left: auto;
`;

const Pocketmon = ({
  pokemon,
  setPokemon,
  pokemonSearch,
  handleClick,
  theme,
  setTheme,
}) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getPokemonList = async () => {
    let pokemonArray = [];
    for (let i = 1; i <= 151; i++) {
      pokemonArray = [...pokemonArray, await getPokemonData(i)];
    }
    setPokemon(pokemonArray);
    setLoading(false);
  };

  const getPokemonData = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res;
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  return (
    <Center>
      <PocketmonStyle>
        {pokemon
          .slice((page - 1) * 30, (page - 1) * 30 + 32)
          .filter((index) => {
            if (pokemonSearch === "") {
              return index;
            } else if (
              index.data.name
                .toLowerCase()
                .includes(pokemonSearch.toLowerCase())
            ) {
              return index;
            }
          })
          .map((a) => (
            <PocketmonList
              theme={theme}
              setTheme={setTheme}
              key={a.data.id}
              data={a.data}
              handleClick={handleClick}
            />
          ))}
      </PocketmonStyle>
      <HomeButton pokemon={pokemon} setPage={setPage} />
    </Center>
  );
};

export default Pocketmon;
