import React from 'react';

import styled from 'styled-components';

// @ts-ignore
import TypeWriterEffect from 'react-typewriter-effect';

import WuuDLogo from './assets/WuuDTeam.svg';

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
  pointer-events: none;
`;

const Typewriter = styled.div`
  bottom: 20%;
  position: absolute;
  align-items: center;
  justify-content: center;
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

function home() {
  return (
    <Container>
      <Logo src={WuuDLogo} />
      <Typewriter>
        <TypeWriterEffect
          textStyle={{
            width: '100%',
            height: '100%',
            color: 'white',
            textAlign: 'center',
          }}
          multiText={[
            'Smart',
            'Unique',
            'Powerful',
            'Innovative',
            'WuuD Team',
            'Coming Soon...',
          ]}
          multiTextLoop
          startDelay={0}
          typeSpeed={100}
          cursorColor='#505050'
          multiTextDelay={1500}
        />
      </Typewriter>
      <Copyright>© 2022 WuuD Team Technologies UG</Copyright>
    </Container>
  );
}

export default home;
