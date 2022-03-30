import React from 'react'
import video from '../assets/boatvillage1.mp4'
import pattern from '../assets/pattern.png'
import styled from "styled-components";

const Video = styled.video`
    position: fixed;
    object-fit: cover;
    width: 100%;
    height: 100vh;
    z-index: -1;
  `;
const Overlay = styled.div`
    background-image: url(${pattern});
    content: " ";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 500;
    pointer-events: none;
    opacity: .6;
  `;

const BackgroundVideo = () => {
  return (
    <>
      <Overlay></Overlay>
      <Video autoPlay muted loop>
        <source src={video} type="video/mp4"/>
      </Video>
    </>
  )
}

export default BackgroundVideo;