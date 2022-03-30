import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Button from "../components/Button/Button";
import Server from "./Server";
import ButtonServer from "../components/Button/ButtonServer";
import axios from "axios"

const MainServers = styled.main`
  display:flex;
  width: 70%;
  background-color: rgba(28,30,31,.7);
`;
const Sidebar = styled.div`
  display:flex;
  flex-direction: column;
  width:30%;
  background-color: rgba(205,65,43,.21);
  font-family: 'Staatliches';
  padding: 3rem 0;
`;
const SidebarTitle = styled.h3`
  color: white;
  font-size: 3rem;
  margin: 0;
  padding: 0 1rem;
  font-weight: 100;
`;
const ListServers = styled.ul`
  margin-top: 5rem;
  font-size: 1.5rem;
  color: white;
`;

const ButtonPlay = styled.div`
  margin: auto 1rem 0;
`;
const Container = styled.div`
  width:70%;
  padding: 3rem;
`;


const Servers = () => {
  const [idServer, setIdServer] = useState('4824')
  const [statusServer, setStatusServer] = useState(null)
  
  //Deps = state qui change
  useEffect(() => {
    //IIFE (convention ";" avant)
    if (idServer) {
      ;(async () => {
        const { data } = await axios.get(`https://api.rust-servers.info/status/${idServer}`)
        setStatusServer(data)
      })()
    }
  },[idServer])
  
  return (
    <MainServers>
      <Sidebar>
        <SidebarTitle>Servers</SidebarTitle>
        <ListServers>
          <ButtonServer idServer={"4824"} serverSetter={setIdServer}>Vanilla x2</ButtonServer>
          {/*<ButtonServer idServer={"3631"} serverSetter={setIdServer}>Modded x2 - SOON</ButtonServer>*/}
        </ListServers>
        <ButtonPlay>
          <Button href={"steam://connect/64.42.181.188:49045"}>Play</Button>
        </ButtonPlay>
      </Sidebar>
      <Container>
        {statusServer
          ? <Server statusServer={statusServer}/>
          : null
        }
      </Container>
    </MainServers>
  )
}

export default Servers