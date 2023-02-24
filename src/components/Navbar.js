import React from "react";
import { NavLink } from "react-router-dom";

/*NavLinks styling */
const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "6px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};
function Navbar() {
  return <div className="navlinks-and-search">
    
    <NavLink
        className="navbarhoverclass"
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>

      <NavLink
        className="navbarhoverclass"
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
      About
      </NavLink>

      <NavLink
        className="navbarhoverclass"
        to="/build-muscle"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        BuildMuscle
      </NavLink>

      <NavLink
        className="navbarhoverclass"
        to="/gain-weight"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
        >
          GainWeight
      </NavLink>
      
      <NavLink
        className="navbarhoverclass"
        to="/lose-weight"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
        >
          LoseWeight
   </NavLink>
   <div class="rightNav">
                  <input type="text" placeholder="Search.." />
                  <button class="btn">Search</button>
                  </div>
    
  </div>;
}

export default Navbar;