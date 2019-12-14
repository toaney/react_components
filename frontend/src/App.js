import React from 'react';
import './scss/styles.scss';
import { Route, Switch } from 'react-router-dom';
import Landing from "./pages/landing.js";
import ComponentLibrary from "./pages/componentLibrary.js";
import Nav from "./components/nav.js";

function App() {
  return (
    <div className="background">
      <Nav />
      <Switch>
        <Route path="/home" component={Landing} />
        <Route path="/" component={ComponentLibrary} />
      </Switch>
    </div>
    
  );
}

export default App;