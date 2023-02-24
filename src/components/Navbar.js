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
  return <div>
    
    <NavLink
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
        to="/lose-weight"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
        >
          LoseWeight
   </NavLink>
    
  </div>;
}

export default Navbar;