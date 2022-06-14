import React from "react";
import Logo from "./assets/Logoo.png";
import ball from "./assets/ball.png";
import styled from "styled-components";

const HeaderStyled = styled.div`
  margin-bottom: 70px;
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  .ball {
    width: 100px;
    height: 100px;
  }

  .bounce {
    animation: bounce 2s ease infinite;
  }
  @keyframes bounce {
    70% {
      transform: translateY(0%);
    }
    80% {
      transform: translateY(-15%);
    }
    90% {
      transform: translateY(0%);
    }
    95% {
      transform: translateY(-7%);
    }
    97% {
      transform: translateY(0%);
    }
    99% {
      transform: translateY(-3%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 800px) {
    #logo {
      width: 300px;
    }
    .ball {
      width: 50px;
      height: 50px;
    }
  }

  @media screen and (max-width: 500px) {
    #logo {
      width: 100px;
    }
    .ball {
      width: 30px;
      height: 30px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <img class="ball bounce" src={ball} alt={ball} />
      <img id="logo" src={Logo} alt={Logo} />
      <img class="ball bounce" src={ball} alt={ball} />
    </HeaderStyled>
  );
};

export default Header;
