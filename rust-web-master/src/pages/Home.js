import React from 'react';
import styled from "styled-components";

const HomeMain = styled.main`
    width: 70%;
    display:flex;
  `;
const ContainerHome = styled.div`
    color: white;
    font-family: 'Staatliches';
    margin: auto 15%;
    align-self: center;
    text-transform: uppercase;
  `;
const TextTitle = styled.h1`
    font-size: 8rem;
  `;
const TextSubTitle = styled.h3`
    font-size: 5rem;
  `;

const Home = () => {

  return (
    <HomeMain>
      <ContainerHome>
        <TextTitle>Welcome to</TextTitle>
        <TextSubTitle>Rusty Trombone x2</TextSubTitle>
      </ContainerHome>
    </HomeMain>
  )
}

export default Home