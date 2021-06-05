import React from "react";
import styled from "styled-components";
import wuud from "./assets/Group 3.svg";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: azure;
`;

const Logo = styled.img`
  width: 40%;
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <Container>
      <Logo src={wuud} />
    </Container>
  );
}

export default App;
