import React from 'react';
import './scss/styles.scss';
import { Route, Switch } from 'react-router-dom';
import Nav from "./components/nav.js";
import Landing from "./pages/landing.js";
import LuckyNumberGenerator from "./components/luckyNumberGenerator";

function App() {
  return (
    <div className="background">
      <Nav />
      <LuckyNumberGenerator />
      <Switch>
        <Route path="/home" component={Landing} />
        <Route path="/" component={Landing} />
      </Switch>
    </div>
    
  );
}

export default App;