import React from "react";
import styled from "styled-components";
import wuud from "./assets/wuudTeam.svg";
// @ts-ignore
import StarfieldAnimation from "react-starfield-animation";

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
  width: 90%;
  z-index: 1;
`;

const Soon = styled.p`
  bottom: 20%;
  color: white;
  position: absolute;
  text-align: center;
  font-family: "Urbanist";
  font-weight: 700;
  @media (min-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    font-size: 27px;
  }
`;

const Copyright = styled.p`
  bottom: 5%;
  color: white;
  position: absolute;
  text-align: center;
  font-family: "Urbanist";
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <Container>
      <Logo src={wuud} />
      <StarfieldAnimation
        numParticles={1000}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <Soon>Coming Soon...</Soon>
      <Copyright>© 2022 WuuD Team Technologies LLC</Copyright>
    </Container>
  );
}

export default App;
