import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <NavLink className="navbar-brand" to="/"><h3>Rescue Dog Finder</h3></NavLink>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/saved_dogs">Saved Dogs</NavLink>
        </li> */}
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/survey">Survey</NavLink>
        </li> */}
      </ul>
    </div>
  </nav>
)

export default Navbar;