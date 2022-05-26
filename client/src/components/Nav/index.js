import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      // If the user is logged in they will see the following navbar options
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/shop">
              Shop
            </Link>
          </li>

          <li className="mx-1">
            <Link to="/about">
              About
            </Link>
          </li>
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
      // If they aren't logged in then they will instead see these nav bar options
    } else {
      return (
        <ul className="flex-row">
           <li className="mx-1">
            <Link to="/shop">
              Shop
            </Link>
          </li>
  
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>

          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag"></span>
          SHUKS INDUSTRIES
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;