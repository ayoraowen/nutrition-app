import React from "react";
import { Route, Switch } from "react-router-dom";
import logo from "../images/nd_logo.png";
// import Navbar from "./Navbar";
import NavBar from "./NavBar";
import Home from "./Home";
import BuildMuscle from "./BuildMuscle";
import GainWeight from "./GainWeight";
import LoseWeight from "./LoseWeight";
import Bmi from "./Bmi";
import "./App";
import About from "./About";
import './App.css';

function App() {
  return (
    <div>
      {/* <nav >class="navbar background" */}
        {/* <ul >class="nav-list" */}
          {/* <div class="logo">
            <img src={logo} alt="logo" width={150} height={100} />
          </div> */}

          <NavBar />
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
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        {/* </ul> */}
        <div class="rightNav">
          <input type="text" name="search" id="search" />
          <button class="btn btn-sm">Search</button>
        </div>
      {/* </nav> */}
    </div>
  );
}

export default App;
