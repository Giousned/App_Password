import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Password excercise</span>
			</Link>
			<div className="ml-auto">
				<Link to="/">
					<button className="btn btn-primary">Home</button>
				</Link>
				<Link to="/my-passwords">
					<button className="btn btn-primary">Contraseñas guardadas</button>
				</Link>
			</div>
		</nav>
	);
};
