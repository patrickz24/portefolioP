import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";




export default function Routes() {

  return (
    <Switch>
      <Route exact path="/projects">
    <Projects />
  </Route>
      <Route exact path="/about">
    <About />
  </Route>
  <Route exact path="/">
        <Home />
  </Route>
    </Switch>
  );
}