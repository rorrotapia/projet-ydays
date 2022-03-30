import React from 'react';
import styled from "styled-components";
import Button from "../components/Button/Button";
import Calendar from "../components/Calendar/Calendar";

const NameServer = styled.div`
  font-size: 5rem;
  text-align:center;
  line-height: 4.5rem;
  font-weight: 100;
  color: hsla(0,0%,100%,.8);
`;
const TitlePage = styled.div`
  justify-content: center;
  margin-bottom: 4rem;
  display:flex;
  text-transform:uppercase;
  font-family: 'Staatliches';
`;
const ButtonMap = styled.div`
  justify-content: center;
  margin-bottom: 4rem;
  display:flex;
`;
const ButtonStatus = styled.div`
  background-color: rgba(69,85,42,.6);
  font-size: 3rem;
  padding: .5rem;
  margin-left: 1rem;
  align-self: center;
  display: flex;
  color:white;
`;
const InfoPage = styled.div`
  display:flex;
  font-family: 'Staatliches';
  text-transform:uppercase;
  color: hsla(0,0%,100%,.8);
`;
const Players = styled.div`
  font-size: 2rem;
`;
const PlayersInfo = styled.div`
  font-size: 1.5rem;
`;
const StatusInfo = styled.div`
  display:flex;
  flex-direction:column;
  width: 40%;
  margin: 0 auto 0 0;
`;


const Server = ({ statusServer }) => {
  return (
    <>
      <TitlePage>
        <NameServer>{statusServer?.name}</NameServer>
        <ButtonStatus>{statusServer?.status}</ButtonStatus>
      </TitlePage>
      <InfoPage>
        <StatusInfo>
          <Players>Players</Players>
          <PlayersInfo>{statusServer?.players}/{statusServer?.players_max}</PlayersInfo>
        </StatusInfo>
        <ButtonMap>
          <Button href="http://playrust.io/map/?64.42.181.188:49045">Map</Button>
        </ButtonMap>
      </InfoPage>
      <Calendar />
    </>
  )
}

export default Server