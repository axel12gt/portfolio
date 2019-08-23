import React from "react";
import { Link, withRouter } from "react-router-dom";

function Nav() {
  return (
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <Link
          className={
            window.location.pathname === "/"
              ? "nav-link active"
              : "nav-link"
          }
          to="/"
        >
        Dameon Brown
        </Link>
      </li>
      <li class="nav-item">
        <Link
          className={
            window.location.pathname === "/projects"
              ? "nav-link active"
              : "nav-link"
          }
          to="/projects"
        >
          Projects
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
