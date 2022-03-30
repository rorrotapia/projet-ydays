import React  from 'react';
import './App.css';
import BackgroundVideo from "./pages/_partials/BackgroundVideo";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Router from "./components/Router/Router";
import Footer from "./components/Footer/Footer";

const Wrapper = styled.div`
    height: 100vh;
    background-color: rgba(24,23,18,.9)
  `;
const Body = styled.div`
    display: flex;
    height: 100%
  `;

const App = () => {
  return (
    <Wrapper>
      <BackgroundVideo />
      <Body>
        <Header />
        <Router />
        <Footer />
      </Body>
    </Wrapper>
  );
}

export default App;
