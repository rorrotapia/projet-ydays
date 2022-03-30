import React from 'react';
import styled from "styled-components";
import steamIcon from "./icons/steam-brands.svg"
import discordIcon from "./icons/discord-brands.svg"

const ContainerBlock = styled.div`
    margin: auto 0 3rem;
  `;

const IconLink = styled.a`
    width: 2rem;
    display:block;
    filter: invert(1);
    margin: 1rem auto;
  `;

const ContainerBottom = () => {
  return (
    <ContainerBlock>
      <IconLink href="https://discord.gg/e3sMDUgqPH">
        <img src={discordIcon} alt=""/>
      </IconLink>
      <IconLink href="#">
        <img src={steamIcon} alt=""/>
      </IconLink>
    </ContainerBlock>
  )
}

export default ContainerBottom