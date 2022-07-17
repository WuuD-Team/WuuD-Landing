import React from 'react';

import styled from 'styled-components';

import forbidden from '../assets/forbidden.svg';
import logo from '../assets/WuuDTeam.svg';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #1c1f26;
`;

const WuuDLogo = styled.img`
  top: 2%;
  left: 0;
  width: 20%;
  position: absolute;
  pointer-events: none;
`;

const Forbidden = styled.img`
  width: 35%;
  margin-bottom: 45px;
  pointer-events: none;
`;

const Oops = styled.div`
  width: 30%;
  color: white;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
  font-family: 'Urbanist';
  @media (min-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Copyright = styled.p`
  bottom: 5%;
  color: white;
  position: absolute;
  text-align: center;
  font-family: 'Urbanist';
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

function restricted() {
  document.title = 'Not available in your area';

  return (
    <Container>
      <WuuDLogo src={logo} />
      <Forbidden src={forbidden} />
      <Oops>
        Oops! It looks like WuuD Team is not available in your area yet.
      </Oops>
      <Copyright>© 2022 WuuD Team Technologies LLC</Copyright>
    </Container>
  );
}

export default restricted;
