import React from 'react';
import styled from "styled-components";
import envelopeIcon from "./icons/envelope-solid.svg";
import languageIcon from "./icons/language-solid.svg";

const ContainerBlock = styled.div`
    margin: 5rem 0 auto;
  `;

const IconLink = styled.a`
    width: 2rem;
    display:block;
    filter: invert(1);
    margin: 1rem auto;
  `;

const ContainerTop = () => {
  return (
    <ContainerBlock>
      <IconLink href="#">
        <img src={envelopeIcon} alt="" />
      </IconLink>
      <IconLink href="#">
        <img src={languageIcon} alt="" />
      </IconLink>
    </ContainerBlock>
  )
}

export default ContainerTop