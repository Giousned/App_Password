import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-5">Password excercise</span>
			</Link>
			<div className="ml-auto me-5">
				<Link to="/">
					<button className="btn btn btn-outline-primary me-1">Home</button>
				</Link>
				<Link to="/my-passwords">
					<button className="btn btn btn-outline-primary">Contraseñas guardadas</button>
				</Link>
			</div>
		</nav>
	);
};
