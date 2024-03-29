import React from "react";
import Preview from "../views/Preview";
import HomeLight from "../views/all-home-version/HomeLight";
import RtlHomeLight from "../views/all-home-version/RtlHomeLight";
import Home from "../components/Home";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeLight} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
