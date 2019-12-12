import React from 'react';
import './scss/styles.scss';
import { Route, Switch } from 'react-router-dom';
import Landing from "./pages/landing.js";
import ComponentLibrary from "./pages/componentLibrary.js";
import Nav from "./components/nav.js";
import LuckyNumberGenerator from "./components/luckyNumberGenerator";

function App() {
  return (
    <div className="background">
      <Nav />
      <LuckyNumberGenerator />
      <Switch>
        <Route path="/home" component={Landing} />
        <Route path="/" component={ComponentLibrary} />
      </Switch>
    </div>
    
  );
}

export default App;