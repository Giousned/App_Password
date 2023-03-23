import React from "react";
import { Link } from "react-router-dom";

import { LINKSNAVBAR } from "../store/LinksNavbar.jsx";

export const Navbar = () => {
  return (
    <nav className="navbar bg-body-secondary mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1 ms-5">Password excercise</span>
      </Link>
      <div className="ml-auto me-5">
        {LINKSNAVBAR.map((item, index) => {
          return (
            <Link key={index} to={item.link}>
              <button className="btn btn btn-outline-primary me-1">
                {item.label}
              </button>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
