import React from "react";
import styled from "styled-components";
import wuud from "./assets/wuudTeam.svg";
import Header from "./components/Header";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: #1c1c1e;
`;

const Logo = styled.img`
  width: 40%;
  margin: auto;
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <Container>
      <Header />
      <Logo src={wuud} />
    </Container>
  );
}

export default App;
