import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 50px;
    padding-bottom: 50px;
    
    .w-btn {
    position: relative;
    border: none;
    display: inline-block;
    padding: 15px 30px;
    border-radius: 15px;
    font-family: "paybooc-Light", sans-serif;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    font-weight: 600;
    transition: 0.25s;
    cursor: pointer;
}

.w-btn-gra3 {
    background: linear-gradient(
        45deg,
        #ff0000,
        #ff7300,
        #fffb00,
        #48ff00,
        #00ffd5,
        #002bff,
        #7a00ff,
        #ff00c8,
        #ff0000
    );
    color: white;
}
.w-btn-gra-anim {
    background-size: 400% 400%;
    animation: gradient1 5s ease infinite;
}
@keyframes gradient1 {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
}
`

const HomeButton = ({loadMore}) => {
  return (
    <ButtonStyled>
            <button className="w-btn w-btn-gra3 w-btn-gra-anim" type="button" onClick={loadMore}>
        The More
    </button>
    </ButtonStyled>
  )
}

export default HomeButton