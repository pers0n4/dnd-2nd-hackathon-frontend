import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./Auth/signin";
import SignUp from "./Auth/signup";
import Map from "./Map";
import Write from "./Edit/write";

const Routes = () => (
  <Router>
    <Route path="/" component={Map} />
    <Route path="/write" component={Write} />
    <Route path="/auth/signup" component={SignUp} />
    <Route path="/auth/signin" component={SignIn} />
  </Router>
);

export default Routes;
