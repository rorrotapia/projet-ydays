import React from 'react';
import styled from "styled-components";
import { Link } from "wouter";

const NavTabItem = styled.li`
    font-family: 'Staatliches';
    font-size: 3rem;
    cursor: pointer;
    color: white;
  `;
const NavTabLink = styled.a`
    text-decoration: unset;
    color: white;
  `;

const MenuItem = ({ name,active, disabled, url, index }) => {
  return (
    <>
      <Link href="/">
        <NavTabItem>Home</NavTabItem>
      </Link>
      <NavTabLink href="https://app.gpay.io/store/rustytrombone">
        <NavTabItem>Store</NavTabItem>
      </NavTabLink>
      <Link href="/server">
        <NavTabItem>Servers</NavTabItem>
      </Link>
      {/*<Link href="/stats">
        <NavTabItem>Stats</NavTabItem>
      </Link>*/}
    </>
    
    /*<NavTabItem>
      {url
        ? <NavTabLink href={`${url}`}>{name}</NavTabLink>
        : <span>{name}</span>
      }
      {disabled ? `(WIP)` : ``}
    </NavTabItem>*/
  )
}

export default MenuItem