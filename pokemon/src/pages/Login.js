import React, { useState } from "react";
import styled from "styled-components";
import { signup, login, useAuth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";

const LoginStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  .box {
    width: 400px;
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0px 0px 39px -3px rgba(0, 0, 0, 0.63);
  }

  .Tabmenu {
    font-size: 1.5rem;
    color: black;
    font-weight: bold;
    display: flex;
    justify-content: center;
    padding: 1rem;
    column-gap: 20px;
    position: relative;
    .left {
      position: absolute;
      bottom: 10px;
      left: 105px;
      width: 70px;
      height: 3px;
      background-color: black;
      transition: all ease-in 0.3s;
    }
    .right {
      position: absolute;
      bottom: 10px;
      left: 200px;
      width: 90px;
      height: 3px;
      background-color: black;
      transition: all ease-in 0.3s;
    }
  }

  .form {
    padding: 1rem;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    input {
      font-size: 1rem;
      height: 40px;
      padding-left: 15px;
      border-radius: 10px;
      border: none;
    }
    button {
      height: 40px;
      border-radius: 10px;
      border: none;
      color: black;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding-left: 2rem;
      padding-right: 2rem;
      span:first-child{
        font-size:1.3rem;
      }
    }
  }
  .oauth {
    display: flex;
    justify-content: space-between;
    column-gap: 20px;
    button {
      width: 100%;
      color: black;
    }
  }
  .join {
    margin-top: 60px;
  }
  @media screen and (max-width:500px) {
    .box{
      width:300px;
    }
    .Tabmenu {

    .left {
      position: absolute;
      bottom: 10px;
      left: 58px;
      width: 70px;
      height: 3px;
      background-color: black;
      transition: all ease-in 0.3s;
    }
    .right {
      position: absolute;
      bottom: 10px;
      left: 150px;
      width: 90px;
      height: 3px;
      background-color: black;
      transition: all ease-in 0.3s;
    }
  }
`;

const Login = () => {
  const [tabmenu, setTabmenu] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  const currentUser = useAuth();
  const auth = getAuth();
  const user = auth.currentUser;

  const provider = new GoogleAuthProvider();
  const github = new GithubAuthProvider();

  const handleSignup = async () => {
    try {
      await signup(email, password);
      alert("회원가입이 완료되었습니다 로그인해주세요.");
      setEmail("");
      setPassword("");
      setTabmenu(true)
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate("/home");
    } catch(err) {
      alert(err)
    }
  };

  //구글로그인
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      navigate("/home");
    });
  };

  //Github 로그인
  const signInWithGithub = () => {
    signInWithPopup(auth, github).then((result) => {
      localStorage.setItem("isAuth", true);
      navigate("/home");
    });
  };

  return (
    <LoginStyled>
      <div className="box">
        <div className="Tabmenu">
          <span onClick={() => setTabmenu(true)}>로그인</span>
          <span onClick={() => setTabmenu(false)}>회원가입</span>
          {tabmenu ? (
            <div className="left"></div>
          ) : (
            <div className="right"></div>
          )}
        </div>
        {tabmenu ? (
          <div className="form">
            <input
              placeholder="asd"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="on"
            />
            <input
              placeholder="asdas"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="on"
            />
            <button onClick={handleLogin}>Submit</button>
            <div className="oauth">
              <button onClick={signInWithGoogle}>
                <span>
                  <FcGoogle />
                </span>
                <span>Google</span>
              </button>
              <button onClick={signInWithGithub}>
                <span>
                  <BsGithub />
                </span>
                <span> Github</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="form">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="email을 입력하세요"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
            <button onClick={handleSignup} className="join">
              Join
            </button>
          </div>
        )}
      </div>
    </LoginStyled>
  );
};

export default Login;
