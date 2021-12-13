import React from 'react'
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
      <NavLink to="/" exact className="nav-link">
       Home
      </NavLink>
      <NavLink to="/about" className="nav-link">
        Grass
      </NavLink>
      <NavLink to="/contact" className="nav-link">
       Contact
      </NavLink>
        </nav>
    )
}

export default NavBar
