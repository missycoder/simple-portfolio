import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {

  return (
  <div class="navHeader">
    <nav> class="navbar"
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;