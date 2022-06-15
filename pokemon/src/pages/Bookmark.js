import React, { useState } from "react";
import styled from "styled-components";
import { SiPocketcasts } from "react-icons/si";
import { Link } from "react-router-dom";
import Sidebar from "../components/SideBar";

const Tung = styled.div`
  .tung {
    font-size: 2rem;
    text-align: center;
    margin-top: 150px;
    font-weight: bold;
    color: #121fcf;
  }
`;

const Display = styled.div`
  padding: 1rem;
  margin-left: 80px;
  margin-right: 80px;
  display: flex;
  column-gap: 20px;
  row-gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const PocketmonListStyle = styled.div`
  width: 250px;
  height: 300px;
  border-radius: 30px;
  border: 1px solid #000;
  padding: 10px;
  position: relative;
  box-shadow: 0px 0px 8px 1px rgba(128, 0, 0, 0.5);
  button {
    width: 25px;
    height: 25px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    background-color: purple;
    color: white;
    transition: all ease-in 0.3s;
  }
  button:hover {
    transform: scale(1.1);
  }
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
  display: flex;
  justify-content: space-between;
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
    background-color: ${(props) => props.theme.main};
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
    .span span:first-child {
      font-size: 0.8rem;
      padding: 4px 8px;
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
    padding: 2px 4px;
    font-size: 0.8rem;
    right: 5px;
  }
`;

const Bookmark = ({ cart, setCart }) => {
  const handelDelete = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  // 카트 중복제거
  const cartArray = cart.filter((item, i) => {
    return (
      cart.findIndex((item2, j) => {
        return item.id === item2.id;
      }) === i
    );
  });

  console.log(cartArray);
  return (
    <>
      <Sidebar />

      <Tung>
        {cart.length === 0 ? (
          <div className="tung">즐겨찾기가 비어있습니다</div>
        ) : (
          <Display>
            {cartArray.map((a) => (
              <>
                <PocketmonListStyle>
                  <Idname>
                    <span className="span">
                      <span>{a.id}</span>
                      <span>{a.name}</span>
                    </span>
                    <button onClick={() => handelDelete(a.id)}>X</button>
                  </Idname>
                  <Link to={`/${a.name}`}>
                    <div className="image">
                      <img
                        src={a.sprites.other.dream_world.front_default}
                        alt=""
                      />
                    </div>
                  </Link>
                  <Pocketlogo>
                    <SiPocketcasts /> Pokemon
                  </Pocketlogo>
                </PocketmonListStyle>
              </>
            ))}
          </Display>
        )}
      </Tung>
    </>
  );
};

export default Bookmark;
