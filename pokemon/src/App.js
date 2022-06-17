import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyle from "./styles/GlobalStyle";
import Detailpage from "./pages/Detailpage";
import Profile from "./pages/Profile";
import Bookmark from "./pages/Bookmark";
import Login from "./pages/Login";
import { ThemeProvider } from "styled-components";
import { lightTheme, dartTheme, themes } from "./styles/Theme";

function App() {
  const [pokemonSearch, setPokemonSearch] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [cart, setCart] = useState([]);
  const [theme, setTheme] = useState("lightTheme");

  const handleClick = (item) => {
    if (pokemon.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        <Routes>
          <Route
            path="/home"
            element={
              <Home
                pokemonSearch={pokemonSearch}
                setPokemonSearch={setPokemonSearch}
                pokemon={pokemon}
                setPokemon={setPokemon}
                handleClick={handleClick}
                theme={theme}
                setTheme={setTheme}
              />
            }
          />
          <Route
            path="/:id"
            element={<Detailpage theme={theme} setTheme={setTheme} />}
          />
          <Route
            path="/profile"
            element={<Profile theme={theme} setTheme={setTheme}/>}
          />
          <Route
            path="/bookmark"
            element={
              <Bookmark
                theme={theme}
                setTheme={setTheme}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route
            path="/"
            element={<Login theme={theme} setTheme={setTheme} />}
          />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
