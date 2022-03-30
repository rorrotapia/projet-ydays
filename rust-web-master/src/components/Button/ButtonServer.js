import React from 'react';
import styled from "styled-components";

const ItemServer = styled.div`
    cursor: pointer;
    align-items: center;
    display: flex;
    padding: 1rem 2rem;
    margin-left: 2rem;
    height: 5vh;
    background-color: rgba(0,0,0,.4);
    text-align: center;
    margin-bottom: 2rem;
  `;

const ButtonServer = ({ children, idServer, serverSetter }) => {
  return (
    <ItemServer onClick={() => {
      serverSetter(idServer)
    }}>
      {children}
    </ItemServer>
  )
}

export default ButtonServer