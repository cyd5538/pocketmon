import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding : 0;
  }
  body{
    width: 100%;
  }
  a{
    text-decoration: none;
  }
`;

export default GlobalStyle;
