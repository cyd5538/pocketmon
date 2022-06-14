import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyle from "./styles/GlobalStyle";
import Detailpage from "./pages/Detailpage";
import SideBar from "./components/SideBar";
import Profile from "./pages/Profile";
import Bookmark from "./pages/Bookmark";

function App() {
  const [pokemonSearch, setPokemonSearch] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if(pokemon.indexOf(item) !== -1) return;
     setCart([...cart, item]); 
  };

  return (
    <>
      <GlobalStyle />
      <SideBar  cart={cart} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              pokemonSearch={pokemonSearch}
              setPokemonSearch={setPokemonSearch}
              pokemon={pokemon}
              setPokemon={setPokemon}
              handleClick={handleClick}
            />
          }
        />
        <Route path="/:id" element={<Detailpage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookmark" element={<Bookmark cart={cart} setCart={setCart} />} />
      </Routes>
    </>
  );
}

export default App;
