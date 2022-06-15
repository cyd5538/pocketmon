import React from "react";
import Sidebar from "../components/SideBar";
import { logout, useAuth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import styled from "styled-components";

const ProfileStyle = styled.div`
     margin-top: 100px;
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap : 20px;
    #avatar{
      width: 200px;
      height: 200px;
    }
`

const Profile = () => {
  let navigate = useNavigate();
  const currentUser = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch {
      alert("error");
    }
  };

  return (
    <div>
      <>
        <Sidebar />
      </>
      <ProfileStyle>
        <Stack direction="row" spacing={2}>
          <Avatar id="avatar" alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </Stack>
        <input type="file" />
        <button>사진 올리기</button>
        환영합니다 {currentUser?.email}
        <button onClick={handleLogout}>Log Out</button>
      </ProfileStyle>
    </div>
  );
};

export default Profile;
