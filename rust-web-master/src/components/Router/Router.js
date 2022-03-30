import React from 'react';
import { Route } from "wouter";
import Home from '../../pages/Home'
import Servers from "../../pages/Servers";
import Stats from "../../pages/Stats";


const Router = () => {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/server" component={Servers} />
      <Route path="/stats" component={Stats} />
    </>
  )
}

export default Router