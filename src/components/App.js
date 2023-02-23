import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
// import logo from "./logo_image/logo.png" ;
import BuildMuscle from "./BuildMuscle";
import GainWeight from "./GainWeight";
import LoseWeight from "./LoseWeight";
import Bmi from "./Bmi";


function App() {
  return <div>
  <nav class="navbar background">
      <ul class="nav-list">
          <div class="logo">
          {/* <img alt="logo" src="" width={150} height={100} />  */}
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
                  <input type="text" placeholder="Search.." />
                  <button class="btn">Search</button>
                  </div>
  </nav>

  <div>
  {/* <img src="https://picsum.photos/200" alt="randomnutritionimages" /> */}
  </div>

  <Bmi />
  </div>;
}

export default App;
