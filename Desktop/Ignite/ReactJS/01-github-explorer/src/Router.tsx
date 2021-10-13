import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Contato from "./components/Contato";
import AlgunsProjetos from "./components/AlgunsProjetos";
import Curriculo from "./components/Curriculo";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/aboutme">
          <AboutMe />
        </Route>
        <Route exact path="/algunsprojetos">
          <AlgunsProjetos />
        </Route>
        <Route exact path="/contato">
          <Contato />
        </Route>
        <Route exact path="/curriculo">
          <Curriculo />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
