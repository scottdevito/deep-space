import React, { Component } from 'react';
import styled from 'styled-components';

import Astronaut from './assets/Astronaut Graphic.svg';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <AppWrapper>
          <AppBarNav>
            <NavLinkActive>Home</NavLinkActive>
            <NavLink>Inter-Galactic</NavLink>
            <NavLink>Outer-Galactic</NavLink>
          </AppBarNav>
          <TextBlurb>
            <TextHeader>Welcome To Deep Space</TextHeader>
            <TextBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </TextBody>
            <CTAButton>Learn More</CTAButton>
          </TextBlurb>
        </AppWrapper>
        <AstronautImage src={Astronaut} alt="astronaut image" />
      </AppContainer>
    );
  }
}

export default App;

const AppContainer = styled.div`
  background-color: #121212;
  height: 100vh;
  width: 100vw;

  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AppBarNav = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const NavLink = styled.div`
  color: #fff;
  padding: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const NavLinkActive = styled(NavLink)`
  background-image: linear-gradient(
    120deg,
    rgb(255, 255, 255) 0%,
    rgb(255, 255, 255) 100%
  );
  background-repeat: no-repeat;
  background-position: 50% 62%;
  background-size: 35% 0.1rem;

  @media (max-width: 768px) {
    background-size: 50% 0.1rem;
    background-position: 50% 70%;
  }
`;

const TextBlurb = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 5.5rem;
  margin-top: 0.5rem;
  max-width: 46rem;
  align-self: flex-start;

  @media (max-width: 768px) {
    align-self: center;
    align-items: center;
    text-align: center;
    max-width: 65%;
    margin-left: 0;
    margin-bottom: 6rem;
  }
`;

const TextHeader = styled.h1`
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  font-size: 50px;
  letter-spacing: 0.1em;
  margin-bottom: 0;

  color: #ffffff;
`;

const TextBody = styled.p`
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  font-size: 18px;
  margin-bottom: 1.5rem;

  color: #b4b4b4;
`;

const CTAButton = styled.div`
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 12px;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 18px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  color: #ffffff;
`;

const AstronautImage = styled.img`
  position: absolute;
  height: 70%;
  right: 0;
  bottom: 0;

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
  }
`;
