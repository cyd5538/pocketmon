import React from "react";
import styled from "styled-components";

const SearchStyle = styled.form`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 50px;
  position: relative;

  input {
    width: 40%;
    border-radius: 35px;
    padding-left: 30px;
    font-size: 1.2rem;
    border: 2px solid purple;
    color: purple;
  }
  button {
    border-radius: 35px;
    width: 60px;
    position: absolute;
    height: 100%;
    right: 30%;
    background-color: purple;
    font-size: 1rem;
    color: white;
    border: none;
    cursor: pointer;
  }

  @media screen and (max-width: 989px) {
    input {
      width: 60%;
    }
    button {
      right: 20%;
    }
  }
`;

const Search = ({setPokemonSearch, pokemonSearch}) => {
  

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
    setPokemonSearch(e.target.value)
  }

  return (
    <SearchStyle onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="포켓몬을 검색하세요"
        onChange={handleChange}
      />
    </SearchStyle>
  );
};

export default Search;
