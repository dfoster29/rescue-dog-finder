import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <NavLink className="navbar-brand" to="/"><h2>Plenty of Pups</h2></NavLink>
    
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
    <div className="justify-content-right text-white">powered by 
        <a href="https://www.petfinder.com">
        <img alt="petfinder" src="https://wagspetadoption.org/wp-content/uploads/2016/10/pet_finder_logo_tm.svg"></img>
        </a>
    </div>
  </nav>
)

export default Navbar;