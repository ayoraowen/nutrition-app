import React from "react";
import { NavLink } from "react-router-dom";
import './App.css'

const linkStyles = {
  // display: "inline-block",
  // width: "100px",
  // padding: "6px",
  // margin: "0 6px 6px",
  // background: "blue",
  // textDecoration: "none",
  // color: "white",
  // display: "inline-block",
  // padding: "0.5rem 1rem",
  // margin: "0 1rem",
  // textDecoration: "none",
  // fontSize: "1.2em",
  // color: "firebrick",
  // borderBottom: "2px solid firebrick",
  // transition: "0.1s",
};

function NavBar() {
  return (
    <div>{/* <nav >*/}
      {/* <a id="homelink" href="#home" >home</a>
        <a id="aboutlink" href="#about" >about</a> */}
      <NavLink
        className="navbarclass"
        to="/"
        exact
        // style={linkStyles}
        // hoverStyle={{
        //   background: "green",
        //   borderBottom: "2px solid red"
        // }}
        activeStyle={{
          // background: "darkblue",
          borderBottom: "2px solid red"
        }}
      >
        Home
      </NavLink>
      <NavLink
        className="navbarclass"
        to="/about"
        exact
        // style={linkStyles}
        activeStyle={{
          // background: "darkblue",
          borderBottom: "2px solid red"
        }}
      >
        About
      </NavLink>
      <NavLink
        className="navbarclass"
        to="/build-muscle"
        exact
        // style={linkStyles}
        activeStyle={{
          // background: "darkblue",
          borderBottom: "2px solid red"
        }}
      >
        BuildMuscle
      </NavLink>
      <NavLink
        className="navbarclass"
        to="/gain-weight"
        exact
        // style={linkStyles}
        activeStyle={{
          // background: "darkblue",
          borderBottom: "2px solid red"
        }}
      >
        GainWeight
      </NavLink>
      <NavLink
        className="navbarclass"
        to="/lose-weight"
        exact
        // style={linkStyles}
        activeStyle={{
          // background: "darkblue",
          borderBottom: "2px solid red"
        }}
      >
        LoseWeight
      </NavLink>
    </div>// </nav>
    
  );
}

export default NavBar;
