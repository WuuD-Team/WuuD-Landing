import React from 'react';

import styled from 'styled-components';

// @ts-ignore
import TypeWriterEffect from 'react-typewriter-effect';

import './index.css';
import WuuDLogo from './assets/WuuDTeam.svg';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(48, 207, 208);
  background: -moz-radial-gradient(
    circle,
    rgba(48, 207, 208, 1) 0%,
    rgba(51, 8, 103, 1) 80%
  );
  background: -webkit-radial-gradient(
    circle,
    rgba(48, 207, 208, 1) 0%,
    rgba(51, 8, 103, 1) 80%
  );
  background: radial-gradient(
    circle,
    rgba(48, 207, 208, 1) 0%,
    rgba(51, 8, 103, 1) 80%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#30cfd0",endColorstr="#330867",GradientType=1);
`;

const Logo = styled.img`
  width: 90%;
  z-index: 1;
  pointer-events: none;
`;

const Typewriter = styled.div`
  bottom: 25%;
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

const Contact = styled.p`
  color: black;
  font-weight: 500;
  text-align: center;
  font-family: 'Urbanist';
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Button = styled.button`
  bottom: 15%;
  height: 45px;
  width: 120px;
  display: flex;
  position: absolute;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-color: transparent;
`;

function home() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    window.location.href = 'mailto:support@wuud-team.com';
    e.preventDefault();
  };

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
      <Button type='button' onClick={handleClick} className='contact-button'>
        <Contact>Contact Us</Contact>
      </Button>
      <Copyright>© 2023 WuuD Team Technologies</Copyright>
    </Container>
  );
}

export default home;
