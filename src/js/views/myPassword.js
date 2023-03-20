import React from "react";

import "../../styles/home.css";

import Hero from "../component/Hero.jsx";
import List from "../component/List.jsx";
import ListItem from "../component/ListItem.jsx";


export const MyPassword = () => (
	<div className="text-center mt-5">
		<Hero/>
		<h1>Contraseñas guardadas</h1>
		<List />
		<ListItem />
	</div>
);