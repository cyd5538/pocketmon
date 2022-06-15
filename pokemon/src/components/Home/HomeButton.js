import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styled from "styled-components";


const HomeButtonStyle = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

const HomeButton = ({ pokemon, setPage }) => {
  return (
    <HomeButtonStyle>
      <Stack spacing={2}>
        <Pagination
          count={(pokemon?.length / 30).toFixed(0)}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 0);
          }}
          color="primary"
        />
      </Stack>
    </HomeButtonStyle>
  );
};



export default HomeButton;
