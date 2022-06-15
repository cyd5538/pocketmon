import React, { useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiFillHome,
  AiFillProfile,
  AiFillStar,
} from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SdiebarStyle = styled.div`
  width: 230px;
  height: 100vh;
  background-color: skyblue;
  z-index: 999;
  color: black;
  font-weight: bold;
  position: fixed;
  top: 0;
  left: ${(props) => (props.open ? "-165px" : "0")};
  transition: all ease-in 0.3s;
  font-size: 1.8rem;
 
  .arrow {
    font-size: 2rem;
    width: 40px;
    height: 40px;
    border: 3px solid black;
    text-align: center;
    border-radius: 20px;
    top: 30px;
    color: black;
    position: absolute;
    right: -15px;
  }
  
  @media screen and (max-width:980px) {
    left: ${(props) => (props.open ? "0" : "-195px")};
  }
`;

const MenuStyle = styled.div`
  margin-top: 100px;
  div a {
    display: flex;
    justify-content: space-between;
    padding: 20px 15px;
    cursor: pointer;
  }
  div a:hover{
    background-color: purple;
    color: white;
  }
  @media screen and (max-width:980px) {
    div a {
      padding: 20px 5px;
    }
  }
`;

const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <SdiebarStyle open={!open}>
      <div className="arrow">
        {open ? (
          <AiOutlineArrowLeft onClick={() => setOpen(!open)} />
        ) : (
          <AiOutlineArrowRight onClick={() => setOpen(!open)} />
        )}
      </div>
      <MenuStyle>
        <div>
          <Link to="/home">
            <span>Home</span>
            <span>
              <AiFillHome />
            </span>
          </Link>
        </div>
        <div>
          <Link to="/profile">
            <span>Profile</span>
            <span>
              <AiFillProfile />
            </span>
          </Link>
        </div>

        <div>
          <Link to="/bookmark">
            <span>Bookmark</span>
            <span>
              <AiFillStar />
            </span>
          </Link>
        </div>
      </MenuStyle>
    </SdiebarStyle>
  );
};

export default SideBar;
