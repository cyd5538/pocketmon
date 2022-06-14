import React, { useState } from "react";
import styled from "styled-components";
import DetailpageListStats from "./DetailpageListStats";


const DetailpageListStyle = styled.div`
  width: 100%;
  margin-top: 100px;
  padding-top: 3rem;
  background-color: black;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  img {
    max-width: 500px;
    width: 100%;
  }
  color: white;
  .right {
    padding: 1rem;
    width: 600px;
  }
  @media screen and (max-width: 580px) {
    padding: 1rem;
    img {
      max-width: 200px;
      width: 100%;
    }
    .right {
      padding: 1rem;
      width: 400px;
    }
  }
  @media screen and (max-width: 480px) {
    padding: 1rem;
    img {
      max-width: 200px;
      width: 100%;
    }
    .right {
      padding: 1rem;
      width: 300px;
    }
  }
`;

const Title = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: space-between;

  div:first-child {
    font-size: 2rem;
    color: #fff;
    text-shadow: 8px 5px 10px #ffffff;
  }

  @media screen and (max-width: 580px) {

  }
`;

const HeightWeight = styled.div`
  margin-top: 50px;
  display: flex;
  column-gap: 20px;
  div span {
    font-weight: bold;
  }
  @media screen and (max-width: 580px) {
    div {
      font-size: 1.5rem;
    }
  }
`;

const Ability = styled.div`
  display: flex;
  margin-top: 30px;
  column-gap: 20px;
  div {
    background-color: skyblue;
    color: black;
    border: 1px solid #000;
    padding: 5px 15px 5px 15px;
    border-radius: 20px;
  }
`;
const Stats = styled.div`
  width: 600px;
  display: flex;
  @media screen and (max-width: 680px) {
    width: 400px;
  }
  @media screen and (max-width: 500px) {
    width: 350px;
  }
`;

const DetailpageList = ({ pocket }) => {

  const [color, setColor] = useState("");

  const typeColor = () => {
    switch (pocket?.types[1].type.name) {
      case "normal":
        setColor("rgb(172, 169, 116)");
        break;
      case "grass":
        setColor("rgb(32, 64, 0)");
        break;
      case "water":
        setColor("rgb(8, 81, 122)");
        break;
      case "fire":
        setColor("rgb(248, 184, 14)");
        break;
      case "flying":
        setColor("rgb(220, 229, 234)");
        break;
      case "bug":
        setColor("rgb(217, 254, 158)");
        break;
      case "posion":
        setColor("rgb(97, 19, 128)");
        break;
      case "electric":
        setColor("rgb(97, 19, 128)");
        break;
      case "ground":
        setColor("rgb(191, 172, 33)");
        break;
      case "fighting":
        setColor("rgb(128, 11, 17)");
        break;
      case "psychic":
        setColor("rgb(138, 5, 50)");
        break;
      case "rock":
        setColor("rgb(71, 64, 38)");
        break;
      case "ice":
        setColor("rgb(16, 61, 67)");
        break;
      case "dragon":
        setColor("rgb(41, 3, 106)");
        break;
      case "ghost":
        setColor("rgb(71, 43, 83)");
        break;
      case "dark":
        setColor("rgb(45, 34, 28)");
        break;
      case "steel":
        setColor("rgb(69, 69, 69)");
        break;
      case "fairy":
        setColor("rgb(69, 69, 69)");
        break;
      default:
        break;
    }
  };

  return (
    <DetailpageListStyle>
      <img src={pocket?.sprites.other.home.front_default} alt={pocket?.name} />
      <div className="right">
        <Title>
          <div>{pocket?.name}</div>
        </Title>
        <HeightWeight>
          <div>
            <span>height :</span> {pocket?.height}0 cm
          </div>
          <div>
            <span>weight :</span> {pocket?.weight / 10} kg
          </div>
        </HeightWeight>
        <Ability>
          {pocket?.types.map((type, index) => (
            <div key={index}>
              <span>{type.type.name}</span>
            </div>
          ))}
        </Ability>
        <Stats>
          <DetailpageListStats pocket={pocket} />
        </Stats>
      </div>
    </DetailpageListStyle>
  );
};


export default DetailpageList;
