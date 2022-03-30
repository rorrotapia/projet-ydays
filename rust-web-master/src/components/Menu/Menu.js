import React from 'react';
import MenuItem from "./_partials/MenuItem";
import styled from 'styled-components';

const Navtab = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    text-transform: uppercase
  `;
const Nav = styled.nav`
    margin-top: 0;
    margin-bottom: auto;
  `;


const Menu = () => {

  return (
    <Nav>
      <Navtab>
        <MenuItem />
      </Navtab>
    </Nav>
  )
  
}

export default Menu