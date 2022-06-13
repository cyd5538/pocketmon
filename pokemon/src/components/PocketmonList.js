import React from "react";
import styled from "styled-components";
import { SiPocketcasts } from "react-icons/si";
import { Link } from "react-router-dom";

const PocketmonListStyle = styled.div`
  width: 250px;
  height: 300px;
  border-radius: 30px;
  border: 1px solid #000;
  padding: 10px;
  position: relative;
  filter: drop-shadow(-3px 0px 7px #000);
  .image {
    display: flex;
    width: 100%;

    justify-content: center;
  }
  img {
    margin-top: 50px;
    width: 100px;
    text-align: center;
    transition: all ease-in 0.5s;
  }
  img:hover {
    transform: scale(1.2);
  }
  @media screen and (max-width: 989px) {
    width: 150px;
    height: 200px;
    img {
      width: 50px;
    }
  }
`;

const Idname = styled.div`
  .span {
    border: 1px solid #000;
    padding: 2px 10px;
    border-radius: 15px;
  }
  .span span:first-child {
    margin-right: 10px;
    border: 1px solid #000;
    padding: 2px 20px;
    position: relative;
    left: -11px;
    border-radius: 15px;
    background-color: ${props => props.theme.main};
    color: black;
    font-weight: bold;
  }

  .span span:last-child {
    font-weight: bold;
    color: black;
  }
  @media screen and (max-width: 989px) {
    .span {
      margin-right: 0;
    padding: 2px 10px 2px 5px;
  }
    .span span:first-child{
      font-size: 0.8rem;
      padding : 4px 8px;
      top: -1px;
    }
    .span span:last-child {
      font-size: 0.8rem;
  }
  }
`;

const Pocketlogo = styled.span`
  position: absolute;
  right: 15px;
  bottom: 20px;
  border: 1px solid #000;
  padding: 2px 10px;
  border-radius: 15px;
  color: black;
  @media screen and (max-width: 989px) {
    padding : 2px 4px;
    font-size: 0.8rem;
    right: 5px;
  }
`;

const PocketmonList = ({ data }) => {
  
  const color = ["f00","ff8c00", "ff0", "008000", "0000ff","0000ff","4b0082","800080"]

  const getRandomColor = function(length){
    return parseInt(Math.random() * color.length)
  }
  const theme = {
    main: `#${color[getRandomColor()]}`
  };
  return (
    <>
      <PocketmonListStyle >
        <Link to={`/${data.name}`}>
          <Idname theme={theme}>
            <span className="span">
              <span>{data.id}</span>
              <span>{data.name}</span>
            </span>
          </Idname>
          <div className="image">
            <img src={data.sprites.other.dream_world.front_default} alt="" />
          </div>
          <Pocketlogo>
            <SiPocketcasts /> Pokemon
          </Pocketlogo>
        </Link>
      </PocketmonListStyle>
    </>
  );
};

export default PocketmonList;
