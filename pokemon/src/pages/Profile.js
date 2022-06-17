import React, { useEffect, useState } from "react";
import Sidebar from "../components/SideBar";
import { logout, useAuth, upload } from "../firebase";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import styled from "styled-components";

const ProfileStyle = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  #avatar {
    width: 200px;
    height: 200px;
  }
  .none {
    display: none;
  }
  .upload {
    background-color: red;
    width: 180px;
    padding: 10px;
    text-align: center;
    border: none;
    font-size: 1rem;
  }
  .animate {
    transition: all 0.1s;
    -webkit-transition: all 0.1s;
  }

  .action-button {
    position: relative;
    padding: 10px 40px;
    margin: 0px 10px 10px 0px;
    float: left;
    border-radius: 3px;
    font-family: "Lato", sans-serif;
    font-size: 18px;
    color: #fff;
    text-decoration: none;
  }

  .blue {
    background-color: #3498db;
    border-bottom: 5px solid #2980b9;
    text-shadow: 0px -2px #2980b9;
  }
  .welcome {
    font-size: 1.3rem;
    color: purple;
    font-weight: bold;
  }
`;

const Profile = ({theme, setTheme}) => {
  let navigate = useNavigate();
  const currentUser = useAuth();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoUrl] = useState("");

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch {
      alert("error");
    }
  };

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  function handleClick() {
    upload(photo, currentUser, setLoading);
  }

  useEffect(() => {
    if (currentUser?.photoUrl) {
      setPhotoUrl(currentUser.photoURL);
    }
  }, [currentUser]);

  return (
    <div>
      <>
        <Sidebar theme={theme} setTheme={setTheme} />
      </>
      <ProfileStyle>
        <div className="welcome">환영합니다 {currentUser?.email}</div>
        <Stack direction="row" spacing={2}>
          <Avatar id="avatar" alt="" src={currentUser?.photoURL} />
        </Stack>
        <label
          className="upload action-button shadow animate blue"
          for="input-file"
        >
          사진 선택 
        </label>
        <input
          className="none"
          type="file"
          id="input-file"
          onChange={handleChange}
        />
        <button
          className="upload action-button shadow animate blue"
          onClick={handleClick}
        >
          사진 올리기
        </button>

        <button
          className="upload action-button shadow animate blue"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </ProfileStyle>
    </div>
  );
};

export default Profile;
