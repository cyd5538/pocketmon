import React, { useState, useEffect } from "react";
import axios from "axios";
import PocketmonList from "./PocketmonList";
import styled from "styled-components";
import {Spinner} from "./Loading";
import HomeButton from "./HomeButton";



const PocketmonStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content : center;
    column-gap: 20px;
    row-gap: 20px;
`;

const Pocketmon = ({pokemon, setPokemon, pokemonSearch,handleClick}) => {
  
  const [loading, setLoading] = useState(true);
  const [limit,setLimit] = useState(24);
  
  const getPokemonList = async () => {
    let pokemonArray = [];
    for (let i = 1; i <= 151; i++) {
      pokemonArray = [...pokemonArray, await getPokemonData(i)];
    }
    console.log(pokemonArray);
    setPokemon(pokemonArray);
    setLoading(false);
  };
  
  const loadMore = () => {
    setLimit(limit+24)
  }

  const getPokemonData = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res;
  };

  useEffect(() => {
    getPokemonList();

  }, []);



  return (
    <>
      {loading ? (
        <div><Spinner/></div>
      ) : (
        <>
        <PocketmonStyle>
        {pokemon.slice(0,limit).filter((index) => {
          if(pokemonSearch === ''){
            return index;
          }else if(index.data.name.toLowerCase().includes(pokemonSearch.toLowerCase())){
            return index;
          }
        }).map((a) => (
            <PocketmonList key={a.data.id} data={a.data} loadMore={loadMore} handleClick={handleClick} />
          ))}
        </PocketmonStyle>
        <HomeButton loadMore={loadMore} />
        </>
      )}
    </>
  );
};

export default Pocketmon;
