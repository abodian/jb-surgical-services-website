import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
// pages for this kit
import LandingPage from "views/LandingPage.js";
import SoftTissueSurgeryPage from "views/SoftTissueSurgeryPage.js"
import OrthopaedicPage from "views/OrthopaedicPage.js"
import RegenerativeMedicinePage from "views/RegenerativeMedicinePage.js"
import PhotobiomodulationPage from "views/PhotobiomodulationPage.js"


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/soft-tissue-surgery" render={(props) => <SoftTissueSurgeryPage {...props} />} />
      <Route path="/orthopaedic" render={(props) => <OrthopaedicPage {...props} />} />
      <Route path="/regenerative-medicine" render={(props) => <RegenerativeMedicinePage {...props} />} />
      <Route path="/photobiomodulation" render={(props) => <PhotobiomodulationPage {...props} />} />
      <Route path="/" render={(props) => <LandingPage {...props} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);
