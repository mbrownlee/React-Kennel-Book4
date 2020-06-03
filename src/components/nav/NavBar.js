import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
  return (
    <header>
      <h1 className="site-title">
        Student Kennels
        <br />
        <small>Loving care when you're not there.</small>
      </h1>
      <nav>
        <ul className="container">
          <li>
            <Link className="nav-link" to="/"> Home </Link>
          </li>
          {props.hasUser
            ? <li>
                <Link className="nav-link" to="/animals"> Animals </Link>
              </li>
            : null}
          <li>
            <Link className="nav-link" to="/location"> Locations </Link>
          </li>
          {props.hasUser
            ? <li>
                <Link className="nav-link" to="/employees"> Employees </Link>
              </li>
            : null}
          {props.hasUser
            ? <li>
                <Link className="nav-link" to="/owner"> Owners </Link>
              </li>
            : null}
          {!props.hasUser
            ? <li>
                <Link className="nav-link" to="/login"> Login </Link>
              </li>
            : null}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;