import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import BuildMuscle from "./BuildMuscle";
import GainWeight from "./GainWeight";
import LoseWeight from "./LoseWeight";
import Bmi from "./Bmi";
// import '../../src/App.css'
import About from "./About";


function App() {
  //generates a random image of 150pixels dimensions for the front page
  const imgUrl ="https://picsum.photos/200"
    
  return <div>
  {/* <nav class="navbar background"> */}
      <ul class="nav-list">
          <div class="logo">
          {/* <img alt="logo" src="" width={140} height={100} />  */}
          </div>
      <header className="App-header">{/**/}
          <Navbar />
      </header>
      <Switch>
      <Route exact path="/about">
          <About />
        </Route>

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
                  {/* <div class="rightNav"> moved to Navbar
                  <input type="text" placeholder="Search.." />
                  <button class="btn">Search</button>
                  </div> */}
  {/* </nav> */}

  <div>
   <img src={imgUrl} alt="randomimage"/>
  </div>

  
  </div>;
}

export default App;
