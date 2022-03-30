import React from 'react'
import styled from "styled-components";

const ButtonPlay = styled.a`
    display: block;
    color: rgba(232,230,227,.6);
    padding: 1rem 3rem;
    text-align: center;
    font-family: 'Staatliches';
    text-decoration: none;
    font-size: 2rem;
    text-transform: uppercase;
    background-color: rgba(88,96,99,.5);
  `;

const Button = ({ children, href }) => {
  return (
    <ButtonPlay href={href}>{ children }</ButtonPlay>
  )
}

export default Button