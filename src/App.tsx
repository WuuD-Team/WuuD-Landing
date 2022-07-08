import React from "react";
import styled from "styled-components";
import wuud from "./assets/wuudTeam.svg";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1c1f26;
`;

const Logo = styled.img`
  width: 100%;
`;

const Copyright = styled.p`
  bottom: 10%;
  color: white;
  position: absolute;
  text-align: center;
  font-family: "Urbanist";
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <Container>
      <Logo src={wuud} />
      <Copyright>© 2022 WuuD Team Technologies, Inc.</Copyright>
    </Container>
  );
}

export default App;
