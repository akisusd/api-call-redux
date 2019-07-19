import React from 'react'
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
      <nav  className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="navbar-brand nav-item" to="/"><span className="nav-link">Home</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="navbar-brand nav-item" to="/product"><span className="nav-link">Add Product</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="navbar-brand nav-item" to="/cart"><span className="nav-link">Cart</span></NavLink>
          </li>
        </ul>
      </nav>
    )
}

export default Navigation