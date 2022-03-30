import React from 'react'
import styled from "styled-components";
import ContainerTop from "./_partials/ContainerTop";
import ContainerBottom from "./_partials/ContainerBottom";

const FooterDiv = styled.div`
    width:5%;
    display: flex;
    flex-direction: column;
    height:100%
  `;

const Footer = () => {
  return (
    <FooterDiv>
      <ContainerTop />
      <ContainerBottom />
    </FooterDiv>
  )
}

export default Footer