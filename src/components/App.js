import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import BuildMuscle from "./BuildMuscle";
import GainWeight from "./GainWeight";
import LoseWeight from "./LoseWeight";
import Bmi from "./Bmi";


function App() {

  return <div>
  <nav class="navbar background">
      <ul class="nav-list">
          <div class="logo">
    
          </div>
          
 <Navbar />
      <Switch>
        <Route exact path="/build-muscle">
          <BuildMuscle />
        </Route>
        <Route exact path="/gain-weight">
          <GainWeight />
        </Route>
         <Route exact path="/lose-weight">
          <LoseWeight />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      </ul>
      <div class="rightNav">
                    <input type="text" name="search" id="search" />
                    <button class="btn btn-sm">Search</button>
                </div>
  </nav>
  <Bmi />
  </div>;
}

export default App;
