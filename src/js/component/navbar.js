import React from "react";
import { Link } from "react-router-dom";

import { LINKSNAVBAR } from "../store/LinksNavbar.jsx";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <span className="home">Password Excercise</span>
      </Link>
      <div className="ml-auto me-5">
        {LINKSNAVBAR.map((item, index) => {
          return (
            <Link key={index} to={item.link}>
              <button className="btn">
                {item.label}
              </button>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
