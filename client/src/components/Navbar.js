import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink className="navbar-brand" to="/">Rescue Dog Finder</NavLink>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/saveddogs">Saved Dogs</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar;