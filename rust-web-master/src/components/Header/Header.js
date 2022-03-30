import React from 'react'
import Menu from "../Menu/Menu";
import Logo from "./logorust.svg"
import styled from "styled-components";

const HeaderDiv = styled.header`
    width: 25%;
    height: 100%;
  `;
const ImgLogo = styled.img `
    cursor: pointer;
    width: 100%;
    max-width: 250px;
  `;
const ContainerLogo = styled.a `
    display:block;
    margin-bottom: auto;
    margin-top: 5rem;
  `;
const ContainerLayout = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left:3rem
  `;

const Header = () => {
  return (
    <HeaderDiv>
      <ContainerLayout>
        <ContainerLogo href="/">
          <ImgLogo src={Logo} />
        </ContainerLogo>
        <Menu />
      </ContainerLayout>
    </HeaderDiv>
  )
}

export default Header