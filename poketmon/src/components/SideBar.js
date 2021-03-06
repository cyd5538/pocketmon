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
import { MdDarkMode } from "react-icons/md";
import { BsFillBrightnessHighFill } from "react-icons/bs";

const SdiebarStyle = styled.div`
  width: 230px;
  height: 100vh;
  background-color: ${(props) => props.theme.sidebarColor};
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
    border: ${(props) => props.theme.toggleBorder};
    text-align: center;
    border-radius: 20px;
    top: 30px;
    color: ${(props) => props.theme.textColor};
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
    color : ${(props) => props.theme.textColor};
  }
  div a:hover{
    background-color: rgba(51, 164, 82, 0.91);
 
  }
  @media screen and (max-width:980px) {
    div a {
      padding: 20px 5px;
    }
  }
`;

const Toggle = styled.div`
  div{
    
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 17px;
    width: 100px;
    height: 40px;
    border-radius: 20px;
    border: ${(props) => props.theme.borderColor};
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    .left{
      position: absolute;
      height: 40px;
      width: 50px;
      background-color: black;
      left: -17px;
      transition: all ease-in 0.3s;
    }
    .right{
      position: absolute;
      height: 40px;
      width: 50px;
      background-color: #F2F7F4;
      left: 33px;
      transition: all ease-in 0.3s;
    }
  }
`
const SideBar = ({theme, setTheme}) => {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  function changeTheme() {
    if (theme === "lightTheme") {
      setTheme("dartTheme");
      setToggle(true);
    } else {
      setTheme("lightTheme");

      setToggle(false);
    }
  }


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

          <Toggle>
            <div>
              <MdDarkMode /> 
              <BsFillBrightnessHighFill />

              {toggle ? (
            <div onClick={changeTheme} className="left"></div>
          ) : (
            <div onClick={changeTheme} className="right"></div>
          )}
            </div>
          </Toggle>
 
      </MenuStyle>
    </SdiebarStyle>
  );
};

export default SideBar;
